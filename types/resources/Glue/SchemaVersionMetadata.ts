// CloudFormation Resource AWS::Glue::SchemaVersionMetadata

import { CFResource } from '../../base';

export type SchemaVersionMetadata_Type = 'AWS::Glue::SchemaVersionMetadata';
export const SchemaVersionMetadata_Type = 'AWS::Glue::SchemaVersionMetadata';

/**
 * This resource adds Key-Value metadata to a Schema version of Glue
 * Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html}
 */
export default function SchemaVersionMetadata(
  props: SchemaVersionMetadata_Properties
) {
  return new CFResource<
    SchemaVersionMetadata_Type,
    SchemaVersionMetadata_Properties
  >(SchemaVersionMetadata_Type, props);
}

/**
 * This resource adds Key-Value metadata to a Schema version of Glue
 * Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html}
 */
export type SchemaVersionMetadata_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html#cfn-glue-schemaversionmetadata-schemaversionid}
   */
  SchemaVersionId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html#cfn-glue-schemaversionmetadata-key}
   */
  Key: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html#cfn-glue-schemaversionmetadata-value}
   */
  Value: string;
};
