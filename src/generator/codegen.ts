import { normalizeSchema } from './normalize';
import { SpecRegistry } from './parser';
import {
  SchemaRegistry,
  Schema,
  TypeDefinition,
  LiteralType,
  StringType,
  ArrayType,
  NumberType,
  BooleanType,
  RefType,
  ObjectType,
  AnyOfType,
  AllOfType,
  OneOfType,
} from './types';
import { concatWith, formatDoc } from './utils';

export function createModels(registry: SchemaRegistry, specs: SpecRegistry) {
  const modules: Record<string, ModuleModel> = {};
  Object.values(registry).forEach((schema) => {
    const module = (modules[schema.module] =
      modules[schema.module] || new ModuleModel(schema.module));
    module.addSchemaType(schema, specs);
  });
  return modules;
}

export function getAllResources(modules: Record<string, ModuleModel>) {
  const resourceModels: ResourceModel[] = [];
  Object.values(modules).forEach((module) => {
    resourceModels.push(...Object.values(module.resources));
  });
  return resourceModels;
}

export class ModuleModel {
  resources: Record<string, ResourceModel> = {};
  constructor(readonly name: string) {}

  addSchemaType(schema: Schema, specs: SpecRegistry) {
    const module = (this.resources[schema.resource] =
      this.resources[schema.resource] ||
      new ResourceModel(schema.resource, this));
    module.addSchemaType(schema, specs);
  }
}

export class ResourceModel {
  types: TypeModel[] = [];
  constructor(readonly name: string, readonly module: ModuleModel) {}
  mainModel: TypeModel;
  mainSchema: Schema;

  addSchemaType(schema: Schema, specs: SpecRegistry) {
    const model = createModel(schema, [schema.name], specs);
    this.types.push(model);
    if (schema.id === schema.namespace) {
      this.mainModel = model;
      this.mainSchema = schema;
    }
  }

  toString() {
    return `
import { CfnResource, Resolvable } from '../../base';

export type ${this.mainModel.getName()}_Type = '${this.mainSchema.namespace}';
export const ${this.mainModel.getName()}_Type = '${this.mainSchema.namespace}';

${formatDoc(
  this.mainModel.getTypeDocumentation()
)}export default function ${this.mainModel.getName()}(props: ${this.mainModel.getName()}_Properties) {
  return new CfnResource<${this.mainModel.getName()}_Properties>(${this.mainModel.getName()}_Type, props);
};

${this.types
  .map((type) => {
    return `${formatDoc(
      type.getTypeDocumentation()
    )}export type ${type.getName()}${
      type === this.mainModel ? '_Properties' : ''
    } = ${type.toString()}`;
  })
  .join('\n\n')}
`;
  }
}

class TypeModel<Type extends TypeDefinition = TypeDefinition> {
  description?: string;
  pattern?: string;
  resourceType?: string;
  readonly name: string;
  readonly type: LiteralType;
  constructor(
    readonly schema: Schema<Type>,
    readonly names: string[],
    readonly specs: SpecRegistry
  ) {
    this.name = schema.name;
    this.type = schema.type as LiteralType; // TODO check ref
    if (schema.namespace === schema.id) {
      this.resourceType = schema.namespace;
    }
    this.description = schema.description;
  }

  getName() {
    if (this.name) return normalizeName(this.name);
    return normalizeName(this.names.join('_'));
  }

  getPropertyDocs(propertyName?: string | typeof AnyProperty) {
    let seeLink = this.specs.getDocumentation(
      this.schema.id,
      propertyName === AnyProperty ? '' : propertyName
    );
    if (seeLink) seeLink = `{@link ${seeLink}}`;
    return seeLink;
  }

  getTypeDocumentation() {
    let seeLink = this.specs.getDocumentation(this.schema.id);
    if (seeLink) seeLink = `{@link ${seeLink}}`;
    if (!this.description) return concatWith({ prefix: '\n' }, seeLink);
    return concatWith({ joiner: '\n' }, this.description, seeLink);
  }
}

class StringTypeModel extends TypeModel<StringType> {
  constructor(
    schema: Schema<StringType>,
    names: string[],
    specs: SpecRegistry
  ) {
    super(schema, names, specs);
  }
  toString() {
    if (this.schema.enum) {
      const enumTypeLiteral = this.schema.enum
        .map((item) => `'${item}'`)
        .join(' | ');
      return `Resolvable<${enumTypeLiteral}>`;
    }
    return `Resolvable<string>`;
  }
}

class ArrayTypeModel extends TypeModel<ArrayType> {
  model: TypeModel;
  constructor(schema: Schema<ArrayType>, names: string[], specs: SpecRegistry) {
    super(schema, names, specs);
    this.model = createModel(schema.items, this.names, specs);
  }
  toString() {
    return `(${this.model}\n)[]`;
  }
}

class NumberTypeModel extends TypeModel<NumberType> {
  constructor(
    schema: Schema<NumberType>,
    names: string[],
    specs: SpecRegistry
  ) {
    super(schema, names, specs);
  }
  toString() {
    return `Resolvable<number>`;
  }
}

class BooleanTypeModel extends TypeModel<BooleanType> {
  constructor(
    schema: Schema<BooleanType>,
    names: string[],
    specs: SpecRegistry
  ) {
    super(schema, names, specs);
  }
  toString() {
    return `Resolvable<boolean>`;
  }
}

class RefTypeModel extends TypeModel<RefType> {
  refType: string;
  constructor(schema: Schema<RefType>, names: string[], specs: SpecRegistry) {
    super(schema, names, specs);
    this.refType =
      this.schema.$ref.split('/').pop() ||
      `unknown // Ref type: ${this.schema.$ref}`;
  }
  toString() {
    return this.refType;
  }
}

class IntersectionTypeModel extends TypeModel {
  models: TypeModel[] = [];
  constructor(names: string[], specs: SpecRegistry) {
    super({ type: 'intersection' } as unknown as Schema, names, specs);
  }

  addTypeModel(model: TypeModel) {
    this.models.push(model);
  }

  toString() {
    return `(${this.models.map((model) => model.toString()).join(' & ')})`;
  }
}

class UnionTypeModel extends TypeModel {
  models: TypeModel[] = [];
  constructor(names: string[], specs: SpecRegistry) {
    super({ type: 'union' } as unknown as Schema, names, specs);
  }

  addTypeModel(model: TypeModel) {
    this.models.push(model);
  }

  toString() {
    return `(${this.models.map((model) => model.toString()).join(' | ')})`;
  }
}

const AnyProperty = Symbol('*');
class ObjectTypeModel extends TypeModel<ObjectType> {
  members: Record<string | symbol, MemberModel> = {};
  constructor(
    schema: Schema<ObjectType>,
    names: string[],
    specs: SpecRegistry
  ) {
    super(schema, names, specs);
    const { properties, patternProperties, additionalProperties } = schema;
    if (properties) {
      Object.keys(properties).forEach((key) => {
        const valueSchema = properties[key];
        const property = (this.members[key] =
          this.members[key] ||
          new MemberModel(this, key, [...names, key], specs));
        property.addSchema(valueSchema);
      });
    }
    if (patternProperties) {
      Object.keys(patternProperties).forEach((pattern) => {
        const valueSchema = patternProperties[pattern];
        const property = (this.members[AnyProperty] =
          this.members[AnyProperty] ||
          new MemberModel(this, AnyProperty, [...names, 'Any'], specs));
        property.addPatternSchema(pattern, valueSchema);
      });
    }
    if (additionalProperties !== false) {
      const property = (this.members[AnyProperty] =
        this.members[AnyProperty] ||
        new MemberModel(this, AnyProperty, [...names, 'Any'], specs));
      property.setUnknown();
    }
  }
  isRequired(key) {
    return this.schema.required?.includes(key);
  }

  toStringMember(member: MemberModel) {
    return `${formatDoc(member.getTypeDocumentation())}${member.toString(
      this.isRequired(member.name)
    )};`;
  }

  toString() {
    return `{
${Reflect.ownKeys(this.members)
  .map((key) => this.toStringMember(this.members[key]))
  .join('\n')}
}`;
  }
}

class MemberModel {
  type: TypeModel;
  isUnknown?: boolean;
  constructor(
    readonly parentModel: TypeModel,
    readonly name: string | typeof AnyProperty,
    readonly names: string[],
    readonly specs: SpecRegistry
  ) {}

  setUnknown() {
    this.isUnknown = true;
  }

  getTypeDocumentation() {
    const propertyDocs = this.type?.getTypeDocumentation();
    const parentPropertyDocs = this.parentModel?.getPropertyDocs(this.name);
    if (propertyDocs && parentPropertyDocs)
      return `${propertyDocs}\n${parentPropertyDocs}`;
    if (propertyDocs && !parentPropertyDocs) return `${propertyDocs}`;
    if (parentPropertyDocs) return `${parentPropertyDocs}`;
  }

  addTypeModel(model: TypeModel) {
    if (!this.type) {
      this.type = model;
    } else if (this.type instanceof UnionTypeModel) {
      this.type.addTypeModel(model);
    } else {
      const typeModel = (this.type = new UnionTypeModel(
        this.names,
        this.specs
      ));
      typeModel.addTypeModel(model);
      return typeModel;
    }
    return model;
  }

  addSchema(schema: TypeDefinition) {
    const newModel = createModel(schema, this.names, this.specs);
    this.addTypeModel(newModel);
  }

  addPatternSchema(pattern: string, schema: TypeDefinition) {
    const newModel = createModel(schema, this.names, this.specs);
    newModel.pattern = pattern;
    this.addTypeModel(newModel);
  }

  toString(isRequired?: boolean) {
    return `${this.name === AnyProperty ? '[k: string]' : this.name}${
      this.name === AnyProperty || isRequired ? '' : '?'
    }: ${
      this.isUnknown
        ? 'unknown'
        : normalizeName(this.type?.toString()) || 'unknown // PROPERTY MODEL??'
    }`;
  }
}

function createModel(
  schema: TypeDefinition,
  names: string[],
  specs: SpecRegistry
): TypeModel {
  normalizeSchema(schema);
  let typeModel: TypeModel | null = null;
  switch (schema.type) {
    case 'string':
      typeModel = new StringTypeModel(
        schema as Schema<StringType>,
        names,
        specs
      );
      break;
    case 'object':
      typeModel = new ObjectTypeModel(
        schema as Schema<ObjectType>,
        names,
        specs
      );
      break;
    case 'array':
      typeModel = new ArrayTypeModel(schema as Schema<ArrayType>, names, specs);
      break;
    case 'number':
      typeModel = new NumberTypeModel(
        schema as Schema<NumberType>,
        names,
        specs
      );
      break;
    case 'boolean':
      typeModel = new BooleanTypeModel(
        schema as Schema<BooleanType>,
        names,
        specs
      );
      break;
    case 'reference':
      typeModel = new RefTypeModel(schema as Schema<RefType>, names, specs);
      break;
  }
  const conditionalModel = createConditionalModel(schema, names, specs);
  if (conditionalModel) {
    return conditionalModel;
  } else if (typeModel) {
    return typeModel;
  }
  throw new Error(
    `Invalid schema without type and conditionals (anyOf, allOf, oneOf): ${JSON.stringify(
      schema
    )}`
  );
}

function hasAnyOf(
  schema: TypeDefinition
): schema is TypeDefinition & AnyOfType {
  return Array.isArray(schema['anyOf']);
}

function hasAllOf(
  schema: TypeDefinition
): schema is TypeDefinition & AllOfType {
  return Array.isArray(schema['allOf']);
}

function hasOneOf(
  schema: TypeDefinition
): schema is TypeDefinition & OneOfType {
  return Array.isArray(schema['oneOf']);
}

function createConditionalModel(
  schema: TypeDefinition,
  names: string[],
  specs: SpecRegistry
): TypeModel | null {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const { anyOf, allOf, oneOf, not, ...parentSchema } = schema as any;
  const addSubSchemas = (
    subSchemas: TypeDefinition[],
    typeModel: UnionTypeModel | IntersectionTypeModel
  ) => {
    subSchemas.map((subSchema, i) => {
      const newSchema = { ...parentSchema, ...subSchema } as TypeDefinition;
      typeModel.addTypeModel(createModel(newSchema, [...names, `${i}`], specs));
    });
  };
  if (hasAnyOf(schema)) {
    const unionModel = new UnionTypeModel(names, specs);
    addSubSchemas(schema.anyOf, unionModel);
    return unionModel;
  } else if (hasAllOf(schema)) {
    const intersectionModel = new IntersectionTypeModel(names, specs);
    addSubSchemas(schema.allOf, intersectionModel);
    return intersectionModel;
  } else if (hasOneOf(schema)) {
    const unionModel = new UnionTypeModel(names, specs);
    addSubSchemas(schema.oneOf, unionModel);
    return unionModel;
  }
  return null;
}

function normalizeName(name?: string) {
  if (!name) return name;
  if (name === 'Object') return 'ObjectData';
  return name;
}
