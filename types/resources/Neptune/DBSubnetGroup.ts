// CloudFormation Resource AWS::Neptune::DBSubnetGroup

import { CfnResource, Resolvable } from '../../base';

export type DBSubnetGroup_Type = 'AWS::Neptune::DBSubnetGroup';
export const DBSubnetGroup_Type = 'AWS::Neptune::DBSubnetGroup';

/**
 * Resource Type definition for AWS::Neptune::DBSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html}
 */
export default function DBSubnetGroup(props: DBSubnetGroup_Properties) {
  return new CfnResource<DBSubnetGroup_Properties>(DBSubnetGroup_Type, props);
}

/**
 * Resource Type definition for AWS::Neptune::DBSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html}
 */
export type DBSubnetGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-dbsubnetgroupname}
   */
  DBSubnetGroupName?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-dbsubnetgroupdescription}
   */
  DBSubnetGroupDescription: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-subnetids}
   */
  SubnetIds: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
