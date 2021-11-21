// CloudFormation Resource AWS::ElastiCache::ParameterGroup

import { CfnResource } from '../../base';

export type ParameterGroup_Type = 'AWS::ElastiCache::ParameterGroup';
export const ParameterGroup_Type = 'AWS::ElastiCache::ParameterGroup';

/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html}
 */
export default function ParameterGroup(props: ParameterGroup_Properties) {
  return new CfnResource<ParameterGroup_Properties>(ParameterGroup_Type, props);
}

/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html}
 */
export type ParameterGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html#cfn-elasticache-parametergroup-description}
   */
  Description: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html#cfn-elasticache-parametergroup-properties}
   */
  Properties?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html#cfn-elasticache-parametergroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html#cfn-elasticache-parametergroup-cacheparametergroupfamily}
   */
  CacheParameterGroupFamily: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
