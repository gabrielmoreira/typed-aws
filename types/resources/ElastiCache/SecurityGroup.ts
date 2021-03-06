// CloudFormation Resource AWS::ElastiCache::SecurityGroup

import { CfnResource, Resolvable } from '../../base';

export type SecurityGroup_Type = 'AWS::ElastiCache::SecurityGroup';
export const SecurityGroup_Type = 'AWS::ElastiCache::SecurityGroup';

/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html}
 */
export default function SecurityGroup(props: SecurityGroup_Properties) {
  return new CfnResource<SecurityGroup_Properties>(SecurityGroup_Type, props);
}

/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html}
 */
export type SecurityGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html#cfn-elasticache-securitygroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html#cfn-elasticache-securitygroup-description}
   */
  Description: Resolvable<string>;
  Id?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
