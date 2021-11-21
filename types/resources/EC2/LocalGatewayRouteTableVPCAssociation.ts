// CloudFormation Resource AWS::EC2::LocalGatewayRouteTableVPCAssociation

import { CFResource } from '../../base';

export type LocalGatewayRouteTableVPCAssociation_Type =
  'AWS::EC2::LocalGatewayRouteTableVPCAssociation';
export const LocalGatewayRouteTableVPCAssociation_Type =
  'AWS::EC2::LocalGatewayRouteTableVPCAssociation';

/**
 * Describes an association between a local gateway route table and a
 * VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html}
 */
export default function LocalGatewayRouteTableVPCAssociation(
  props: LocalGatewayRouteTableVPCAssociation_Properties
) {
  return new CFResource<
    LocalGatewayRouteTableVPCAssociation_Type,
    LocalGatewayRouteTableVPCAssociation_Properties
  >(LocalGatewayRouteTableVPCAssociation_Type, props);
}

/**
 * Describes an association between a local gateway route table and a
 * VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html}
 */
export type LocalGatewayRouteTableVPCAssociation_Properties = {
  LocalGatewayId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html#cfn-ec2-localgatewayroutetablevpcassociation-localgatewayroutetableid}
   */
  LocalGatewayRouteTableId: string;
  LocalGatewayRouteTableVpcAssociationId?: string;
  State?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html#cfn-ec2-localgatewayroutetablevpcassociation-vpcid}
   */
  VpcId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html#cfn-ec2-localgatewayroutetablevpcassociation-tags}
   */
  Tags?: Tags;
};

export type Tags = Tag[];

export type Tag = {
  Key?: string;
  Value?: string;
};
