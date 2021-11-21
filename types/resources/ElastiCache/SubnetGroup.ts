// CloudFormation Resource AWS::ElastiCache::SubnetGroup

import { CFResource } from '../../base';

export type SubnetGroup_Type = 'AWS::ElastiCache::SubnetGroup';
export const SubnetGroup_Type = 'AWS::ElastiCache::SubnetGroup';

/**
 * Resource Type definition for AWS::ElastiCache::SubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html}
 */
export default function SubnetGroup(props: SubnetGroup_Properties) {
  return new CFResource<SubnetGroup_Type, SubnetGroup_Properties>(
    SubnetGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ElastiCache::SubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html}
 */
export type SubnetGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-description}
   */
  Description: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-cachesubnetgroupname}
   */
  CacheSubnetGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: string;
  Key: string;
};