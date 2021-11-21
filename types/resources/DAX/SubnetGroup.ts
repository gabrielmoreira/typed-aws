// CloudFormation Resource AWS::DAX::SubnetGroup

import { CfnResource } from '../../base';

export type SubnetGroup_Type = 'AWS::DAX::SubnetGroup';
export const SubnetGroup_Type = 'AWS::DAX::SubnetGroup';

/**
 * Resource Type definition for AWS::DAX::SubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html}
 */
export default function SubnetGroup(props: SubnetGroup_Properties) {
  return new CfnResource<SubnetGroup_Properties>(SubnetGroup_Type, props);
}

/**
 * Resource Type definition for AWS::DAX::SubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html}
 */
export type SubnetGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#cfn-dax-subnetgroup-description}
   */
  Description?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#cfn-dax-subnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#cfn-dax-subnetgroup-subnetgroupname}
   */
  SubnetGroupName?: string;
};
