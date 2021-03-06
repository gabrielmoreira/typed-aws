// CloudFormation Resource AWS::ElastiCache::SecurityGroupIngress

import { CfnResource, Resolvable } from '../../base';

export type SecurityGroupIngress_Type =
  'AWS::ElastiCache::SecurityGroupIngress';
export const SecurityGroupIngress_Type =
  'AWS::ElastiCache::SecurityGroupIngress';

/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroupIngress
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html}
 */
export default function SecurityGroupIngress(
  props: SecurityGroupIngress_Properties
) {
  return new CfnResource<SecurityGroupIngress_Properties>(
    SecurityGroupIngress_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroupIngress
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html}
 */
export type SecurityGroupIngress_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html#cfn-elasticache-securitygroupingress-cachesecuritygroupname}
   */
  CacheSecurityGroupName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html#cfn-elasticache-securitygroupingress-ec2securitygroupname}
   */
  EC2SecurityGroupName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html#cfn-elasticache-securitygroupingress-ec2securitygroupownerid}
   */
  EC2SecurityGroupOwnerId?: Resolvable<string>;
};
