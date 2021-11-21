// CloudFormation Resource AWS::DMS::ReplicationSubnetGroup

import { CFResource } from '../../base';

export type ReplicationSubnetGroup_Type = 'AWS::DMS::ReplicationSubnetGroup';
export const ReplicationSubnetGroup_Type = 'AWS::DMS::ReplicationSubnetGroup';

/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html}
 */
export default function ReplicationSubnetGroup(
  props: ReplicationSubnetGroup_Properties
) {
  return new CFResource<
    ReplicationSubnetGroup_Type,
    ReplicationSubnetGroup_Properties
  >(ReplicationSubnetGroup_Type, props);
}

/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html}
 */
export type ReplicationSubnetGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-replicationsubnetgroupdescription}
   */
  ReplicationSubnetGroupDescription: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-replicationsubnetgroupidentifier}
   */
  ReplicationSubnetGroupIdentifier?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
