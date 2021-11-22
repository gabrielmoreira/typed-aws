// CloudFormation Resource AWS::DMS::ReplicationSubnetGroup

import { CfnResource, Resolvable } from '../../base';

export type ReplicationSubnetGroup_Type = 'AWS::DMS::ReplicationSubnetGroup';
export const ReplicationSubnetGroup_Type = 'AWS::DMS::ReplicationSubnetGroup';

/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html}
 */
export default function ReplicationSubnetGroup(
  props: ReplicationSubnetGroup_Properties
) {
  return new CfnResource<ReplicationSubnetGroup_Properties>(
    ReplicationSubnetGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html}
 */
export type ReplicationSubnetGroup_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-replicationsubnetgroupdescription}
   */
  ReplicationSubnetGroupDescription: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-replicationsubnetgroupidentifier}
   */
  ReplicationSubnetGroupIdentifier?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-subnetids}
   */
  SubnetIds: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#cfn-dms-replicationsubnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
