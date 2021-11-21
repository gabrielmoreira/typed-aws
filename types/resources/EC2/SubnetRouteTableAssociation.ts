// CloudFormation Resource AWS::EC2::SubnetRouteTableAssociation

import { CFResource } from '../../base';

export type SubnetRouteTableAssociation_Type =
  'AWS::EC2::SubnetRouteTableAssociation';
export const SubnetRouteTableAssociation_Type =
  'AWS::EC2::SubnetRouteTableAssociation';

/**
 * Resource Type definition for AWS::EC2::SubnetRouteTableAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html}
 */
export default function SubnetRouteTableAssociation(
  props: SubnetRouteTableAssociation_Properties
) {
  return new CFResource<
    SubnetRouteTableAssociation_Type,
    SubnetRouteTableAssociation_Properties
  >(SubnetRouteTableAssociation_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::SubnetRouteTableAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html}
 */
export type SubnetRouteTableAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html#cfn-ec2-subnetroutetableassociation-routetableid}
   */
  RouteTableId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html#cfn-ec2-subnetroutetableassociation-subnetid}
   */
  SubnetId: string;
};
