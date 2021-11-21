// CloudFormation Resource AWS::MemoryDB::SubnetGroup

import { CfnResource } from '../../base';

export type SubnetGroup_Type = 'AWS::MemoryDB::SubnetGroup';
export const SubnetGroup_Type = 'AWS::MemoryDB::SubnetGroup';

/**
 * The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB
 * Subnet Group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html}
 */
export default function SubnetGroup(props: SubnetGroup_Properties) {
  return new CfnResource<SubnetGroup_Properties>(SubnetGroup_Type, props);
}

/**
 * The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB
 * Subnet Group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html}
 */
export type SubnetGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-subnetgroupname}
   */
  SubnetGroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-tags}
   */
  Tags?: Tag[];
  ARN?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
