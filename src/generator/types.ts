export type SchemaRegistry = Record<string, Schema>;

export type Schema<T extends TypeDefinition = TypeDefinition> = {
  id: string; // e.g: AWS::QuickSight::DataSet/S3Source
  root?: boolean;
  namespace: string; // e.g: AWS::QuickSight::DataSet
  module: string; // e.g: QuickSight
  resource: string; // e.g: DataSet
  name: string; // type name => e.g: S3Source
} & BaseTypeDefinition &
  T;

  export type PropertyRef = string;

export type BaseTypeDefinition = {
  description?: string;
  originalType?: string;
} & ConditionalTypes;

export type ConditionalTypes = AnyOfType | OneOfType | AllOfType | {};

export type AnyOfType = {
  anyOf: TypeDefinition[];
};

export type OneOfType = {
  oneOf: TypeDefinition[];
};

export type AllOfType = {
  allOf: TypeDefinition[];
};

export type TypeDefinition = BaseTypeDefinition &
  (StringType | ArrayType | ObjectType | RefType | NumberType | BooleanType);

export type Properties = Record<string, TypeDefinition>;

// Schema property types

export type ObjectType = {
  type: 'object';
  required?: string[];
  properties?: Properties;
  patternProperties?: Properties;
  minProperties?: number;
  maxProperties?: number;
  additionalProperties?: boolean;
  readOnlyProperties?: PropertyRef[];
  writeOnlyProperties?: PropertyRef[];
  createOnlyProperties?: PropertyRef[];
  primaryIdentifier?: PropertyRef[];
  deprecatedProperties?: PropertyRef[];
  handlers?: any;
};

export type StringType = {
  type: 'string';
  format?: string | 'int64' | 'date-time' | 'double' | 'string';
  examples?: string[];
  enum?: string[];
  default?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

export type ArrayType = {
  type: 'array';
  items: TypeDefinition;
  default?: any[];
  examples?: any[];
  uniqueItems?: boolean;
  minItems?: number;
  maxItems?: number;
};

export type BooleanType = {
  type: 'boolean';
  default?: boolean;
};

export type NumberType = {
  type: 'number';
  multipleOf?: number;
  default?: number;
  minimum?: number;
  maximum?: number;
};

export type LiteralType =
  | 'object'
  | 'string'
  | 'array'
  | 'boolean'
  | 'number'
  | 'reference';

export type RefType = {
  type?: LiteralType;
  $ref: string;
};

export type ResourceFile = { module: string; resource: string; fileName: string };
export type ModuleFile = { module: string; fileName: string };
export type IndexFile = { fileName: string };
export type FileData = { source: string };

export type Writer = (
  directory: string,
  fileName: string,
  source: string
) => Promise<void>;