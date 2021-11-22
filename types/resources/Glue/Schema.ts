// CloudFormation Resource AWS::Glue::Schema

import { CfnResource, Resolvable } from '../../base';

export type Schema_Type = 'AWS::Glue::Schema';
export const Schema_Type = 'AWS::Glue::Schema';

/**
 * This resource represents a schema of Glue Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html}
 */
export default function Schema(props: Schema_Properties) {
  return new CfnResource<Schema_Properties>(Schema_Type, props);
}

/**
 * This resource represents a schema of Glue Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html}
 */
export type Schema_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-registry}
   */
  Registry?: Registry;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-dataformat}
   */
  DataFormat: Resolvable<'AVRO' | 'JSON'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-compatibility}
   */
  Compatibility: Resolvable<
    | 'NONE'
    | 'DISABLED'
    | 'BACKWARD'
    | 'BACKWARD_ALL'
    | 'FORWARD'
    | 'FORWARD_ALL'
    | 'FULL'
    | 'FULL_ALL'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-schemadefinition}
   */
  SchemaDefinition: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-checkpointversion}
   */
  CheckpointVersion?: SchemaVersion;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#cfn-glue-schema-tags}
   */
  Tags?: Tag[];
  InitialSchemaVersionId?: Resolvable<string>;
};

/**
 * Identifier for the registry which the schema is part of. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html}
 */
export type Registry = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html#cfn-glue-schema-registry-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html#cfn-glue-schema-registry-arn}
   */
  Arn?: Resolvable<string>;
};

/**
 * Specify checkpoint version for update. This is only required to update
 * the Compatibility. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html}
 */
export type SchemaVersion = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html#cfn-glue-schema-schemaversion-islatest}
   */
  IsLatest?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html#cfn-glue-schema-schemaversion-versionnumber}
   */
  VersionNumber?: Resolvable<number>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
