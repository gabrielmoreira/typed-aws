import { LiteralType, TypeDefinition } from './types';

function normalizeSchemaType(schema: TypeDefinition): LiteralType | undefined {
  if (!schema.type && schema['$ref']) return 'reference';
  if (!schema.type && schema['allOf']) return;
  if (!schema.type && schema['oneOf']) return;
  if (!schema.type && schema['anyOf']) return;
  if (
    !schema.type &&
    (schema['properties'] ||
      schema['patternProperties'] ||
      schema['additionalProperties'])
  )
    return 'object';
  if (!schema.type)
    throw new Error(`Unknown schema type ${JSON.stringify(schema)}`);
  if (Array.isArray(schema.type)) {
    Object.assign(schema, {
      type: undefined,
      oneOf: schema.type.map((type) => ({ type })),
    });
  }
  return (schema.type as string) === 'integer' ? 'number' : schema.type;
}

export function normalizeSchema(schema: TypeDefinition) {
  schema.originalType = schema.type;
  schema.type = normalizeSchemaType(schema);
}
