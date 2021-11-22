// CloudFormation Resource AWS::Athena::DataCatalog

import { CfnResource, Resolvable } from '../../base';

export type DataCatalog_Type = 'AWS::Athena::DataCatalog';
export const DataCatalog_Type = 'AWS::Athena::DataCatalog';

/**
 * Resource schema for AWS::Athena::DataCatalog {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html}
 */
export default function DataCatalog(props: DataCatalog_Properties) {
  return new CfnResource<DataCatalog_Properties>(DataCatalog_Type, props);
}

/**
 * Resource schema for AWS::Athena::DataCatalog {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html}
 */
export type DataCatalog_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-parameters}
   */
  Parameters?: {
    [k: string]: Resolvable<string>;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-tags}
   */
  Tags?: Tags;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-type}
   */
  Type: Resolvable<'LAMBDA' | 'GLUE' | 'HIVE'>;
};

export type Tags = Tag[];

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
