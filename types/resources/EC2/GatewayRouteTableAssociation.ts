// CloudFormation Resource AWS::EC2::GatewayRouteTableAssociation

import { CFResource } from '../../base';

export type GatewayRouteTableAssociation_Type =
  'AWS::EC2::GatewayRouteTableAssociation';
export const GatewayRouteTableAssociation_Type =
  'AWS::EC2::GatewayRouteTableAssociation';

/**
 * Associates a gateway with a route table. The gateway and route table
 * must be in the same VPC. This association causes the incoming traffic
 * to the gateway to be routed according to the routes in the route
 * table. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html}
 */
export default function GatewayRouteTableAssociation(
  props: GatewayRouteTableAssociation_Properties
) {
  return new CFResource<
    GatewayRouteTableAssociation_Type,
    GatewayRouteTableAssociation_Properties
  >(GatewayRouteTableAssociation_Type, props);
}

/**
 * Associates a gateway with a route table. The gateway and route table
 * must be in the same VPC. This association causes the incoming traffic
 * to the gateway to be routed according to the routes in the route
 * table. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html}
 */
export type GatewayRouteTableAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html#cfn-ec2-gatewayroutetableassociation-routetableid}
   */
  RouteTableId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html#cfn-ec2-gatewayroutetableassociation-gatewayid}
   */
  GatewayId: string;
  AssociationId?: string;
};
