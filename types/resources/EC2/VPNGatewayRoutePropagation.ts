// CloudFormation Resource AWS::EC2::VPNGatewayRoutePropagation

import { CfnResource } from '../../base';

export type VPNGatewayRoutePropagation_Type =
  'AWS::EC2::VPNGatewayRoutePropagation';
export const VPNGatewayRoutePropagation_Type =
  'AWS::EC2::VPNGatewayRoutePropagation';

/**
 * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html}
 */
export default function VPNGatewayRoutePropagation(
  props: VPNGatewayRoutePropagation_Properties
) {
  return new CfnResource<VPNGatewayRoutePropagation_Properties>(
    VPNGatewayRoutePropagation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html}
 */
export type VPNGatewayRoutePropagation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html#cfn-ec2-vpngatewayrouteprop-routetableids}
   */
  RouteTableIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html#cfn-ec2-vpngatewayrouteprop-vpngatewayid}
   */
  VpnGatewayId: string;
};
