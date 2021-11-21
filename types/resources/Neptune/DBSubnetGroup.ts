// CloudFormation Resource AWS::Neptune::DBSubnetGroup

import { CfnResource } from '../../base';

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
  DBSubnetGroupName?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-dbsubnetgroupdescription}
   */
  DBSubnetGroupDescription: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: string;
  Key: string;
};
