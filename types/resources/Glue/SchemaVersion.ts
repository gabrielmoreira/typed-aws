// CloudFormation Resource AWS::Glue::SchemaVersion

import { CFResource } from '../../base';

export type SchemaVersion_Type = 'AWS::Glue::SchemaVersion';
export const SchemaVersion_Type = 'AWS::Glue::SchemaVersion';

/**
 * This resource represents an individual schema version of a schema
 * defined in Glue Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html}
 */
export default function SchemaVersion(props: SchemaVersion_Properties) {
  return new CFResource<SchemaVersion_Type, SchemaVersion_Properties>(
    SchemaVersion_Type,
    props
  );
}

/**
 * This resource represents an individual schema version of a schema
 * defined in Glue Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html}
 */
export type SchemaVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schema}
   */
  Schema: Schema;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schemadefinition}
   */
  SchemaDefinition: string;
  VersionId?: string;
};

/**
 * Identifier for the schema where the schema version will be created.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html}
 */
export type Schema = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html#cfn-glue-schemaversion-schema-schemaarn}
   */
  SchemaArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html#cfn-glue-schemaversion-schema-schemaname}
   */
  SchemaName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html#cfn-glue-schemaversion-schema-registryname}
   */
  RegistryName?: string;
};
