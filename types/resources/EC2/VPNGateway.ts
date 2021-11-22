// CloudFormation Resource AWS::EC2::VPNGateway

import { CfnResource, Resolvable } from '../../base';

export type VPNGateway_Type = 'AWS::EC2::VPNGateway';
export const VPNGateway_Type = 'AWS::EC2::VPNGateway';

/**
 * Resource Type definition for AWS::EC2::VPNGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html}
 */
export default function VPNGateway(props: VPNGateway_Properties) {
  return new CfnResource<VPNGateway_Properties>(VPNGateway_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::VPNGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html}
 */
export type VPNGateway_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html#cfn-ec2-vpngateway-type}
   */
  Type: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html#cfn-ec2-vpngateway-amazonsideasn}
   */
  AmazonSideAsn?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html#cfn-ec2-vpngateway-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
