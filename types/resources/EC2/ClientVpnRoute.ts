// CloudFormation Resource AWS::EC2::ClientVpnRoute

import { CfnResource } from '../../base';

export type ClientVpnRoute_Type = 'AWS::EC2::ClientVpnRoute';
export const ClientVpnRoute_Type = 'AWS::EC2::ClientVpnRoute';

/**
 * Resource Type definition for AWS::EC2::ClientVpnRoute {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html}
 */
export default function ClientVpnRoute(props: ClientVpnRoute_Properties) {
  return new CfnResource<ClientVpnRoute_Properties>(ClientVpnRoute_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::ClientVpnRoute {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html}
 */
export type ClientVpnRoute_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html#cfn-ec2-clientvpnroute-clientvpnendpointid}
   */
  ClientVpnEndpointId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html#cfn-ec2-clientvpnroute-targetvpcsubnetid}
   */
  TargetVpcSubnetId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html#cfn-ec2-clientvpnroute-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html#cfn-ec2-clientvpnroute-destinationcidrblock}
   */
  DestinationCidrBlock: string;
};
