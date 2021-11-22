// CloudFormation Resource AWS::EC2::VPNConnectionRoute

import { CfnResource, Resolvable } from '../../base';

export type VPNConnectionRoute_Type = 'AWS::EC2::VPNConnectionRoute';
export const VPNConnectionRoute_Type = 'AWS::EC2::VPNConnectionRoute';

/**
 * Resource Type definition for AWS::EC2::VPNConnectionRoute {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection-route.html}
 */
export default function VPNConnectionRoute(
  props: VPNConnectionRoute_Properties
) {
  return new CfnResource<VPNConnectionRoute_Properties>(
    VPNConnectionRoute_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPNConnectionRoute {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection-route.html}
 */
export type VPNConnectionRoute_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection-route.html#cfn-ec2-vpnconnectionroute-cidrblock}
   */
  DestinationCidrBlock: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection-route.html#cfn-ec2-vpnconnectionroute-connectionid}
   */
  VpnConnectionId: Resolvable<string>;
};
