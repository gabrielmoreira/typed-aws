// CloudFormation Resource AWS::EC2::PlacementGroup

import { CfnResource } from '../../base';

export type PlacementGroup_Type = 'AWS::EC2::PlacementGroup';
export const PlacementGroup_Type = 'AWS::EC2::PlacementGroup';

/**
 * Resource Type definition for AWS::EC2::PlacementGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html}
 */
export default function PlacementGroup(props: PlacementGroup_Properties) {
  return new CfnResource<PlacementGroup_Properties>(PlacementGroup_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::PlacementGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html}
 */
export type PlacementGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html#cfn-ec2-placementgroup-strategy}
   */
  Strategy?: string;
};
