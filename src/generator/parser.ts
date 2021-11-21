import fs from 'fs';
import { SchemaRegistry, Schema } from './types';

export async function parseSchemaFile(file: string) {
  const json = await fs.promises.readFile(file);
  return parseSchemaJson(json.toString());
}

export function parseSchemaJson(json: string) {
  const schemaObject = JSON.parse(json);
  if (typeof schemaObject !== 'object' || !schemaObject)
    throw new Error(`Invalid schema: ${json}`);
  return parseSchemaRegistry(schemaObject);
}

function parseSchemaRegistry(schemaObject: Record<string, any>) {
  const registry: SchemaRegistry = {};
  const schemaTypeName = schemaObject['typeName'];
  const { module, typeName } = toTypeName(schemaTypeName);
  if (!module) throw new Error('Module name not detected: ' + schemaTypeName);
  registerType(
    {
      id: schemaTypeName,
      namespace: schemaTypeName,
      module,
      resource: typeName,
      name: typeName,
      root: true,
      type: 'object',
      ...schemaObject,
    },
    registry
  );

  const definitions = schemaObject['definitions'];
  if (definitions) {
    for (const key in definitions) {
      const definition = definitions[key];
      registerType(
        {
          id: `${schemaTypeName}.${key}`,
          namespace: schemaTypeName,
          module,
          resource: typeName,
          name: key,
          ...definition,
        } as Schema,
        registry
      );
    }
  }
  return registry;
}

function registerType(schema: Schema, registry: SchemaRegistry) {
  if (registry[schema.id]) {
    throw new Error(`Type ${schema} already registered`);
  }
  registry[schema.id] = schema;
}

function toTypeName(typeName: string) {
  const tokens = typeName.split('::');
  if (tokens.length === 3) {
    return { module: tokens[1], typeName: tokens[2] };
  } else if (tokens.length === 1) {
    return { typeName: typeName };
  }
  throw new Error(`Unknown Type name format: ${typeName}`);
}

export async function parseSpecs(file: string) {
  const json = await fs.promises.readFile(file);
  return parseSpecsJson(json.toString());
}

export function parseSpecsJson(json: string) {
  const specsJson = JSON.parse(json);
  if (typeof specsJson !== 'object' || !specsJson)
    throw new Error(`Invalid specs json: ${json}`);
  return new SpecRegistry(specsJson);
}

export class SpecRegistry {
  constructor(readonly spec: Spec) {}

  getDocumentation(id: string, property?: string) {
    const type = this.findType(id);
    if (type) {
      if (!property) {
        return type.Documentation;
      } else {
        return type.Properties?.[property]?.Documentation;
      }
    }
  }

  private findType(id: string) {
    const propertyType = this.spec.PropertyTypes[id];
    if (propertyType) return propertyType;
    const resourceType = this.spec.ResourceTypes[id];
    if (resourceType) return resourceType;
  }
}

type Spec = {
  PropertyTypes: Record<string, PropertiesSpec>;
  ResourceTypes: Record<string, ResourcesSpec>;
};

type PropertiesSpec = {
  Documentation?: string;
  Properties?: Record<string, PropertySpec>;
};
type PropertySpec = TypeSpec;

type ResourcesSpec = {
  Documentation?: string;
  Attributes?: Record<string, AttributeSpec>;
  Properties?: Record<string, ResourceSpec>;
};
type ResourceSpec = TypeSpec;

type AttributeSpec = {
  PrimitiveType: string;
};

type TypeSpec = {
  Documentation?: string;
  UpdateType?: string;
  Required?: boolean;
  PromitiveType?: string;
  ItemType?: string;
  Type?: string;
};
