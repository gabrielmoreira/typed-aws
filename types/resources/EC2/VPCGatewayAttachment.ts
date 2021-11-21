// CloudFormation Resource AWS::EC2::VPCGatewayAttachment

import { CfnResource } from '../../base';

export type VPCGatewayAttachment_Type = 'AWS::EC2::VPCGatewayAttachment';
export const VPCGatewayAttachment_Type = 'AWS::EC2::VPCGatewayAttachment';

/**
 * Resource Type definition for AWS::EC2::VPCGatewayAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html}
 */
export default function VPCGatewayAttachment(
  props: VPCGatewayAttachment_Properties
) {
  return new CfnResource<VPCGatewayAttachment_Properties>(
    VPCGatewayAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPCGatewayAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html}
 */
export type VPCGatewayAttachment_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html#cfn-ec2-vpcgatewayattachment-internetgatewayid}
   */
  InternetGatewayId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html#cfn-ec2-vpcgatewayattachment-vpcid}
   */
  VpcId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html#cfn-ec2-vpcgatewayattachment-vpngatewayid}
   */
  VpnGatewayId?: string;
};
