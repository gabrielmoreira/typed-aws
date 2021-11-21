// CloudFormation Resource AWS::EC2::VPCCidrBlock

import { CfnResource } from '../../base';

export type VPCCidrBlock_Type = 'AWS::EC2::VPCCidrBlock';
export const VPCCidrBlock_Type = 'AWS::EC2::VPCCidrBlock';

/**
 * Resource Type definition for AWS::EC2::VPCCidrBlock {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html}
 */
export default function VPCCidrBlock(props: VPCCidrBlock_Properties) {
  return new CfnResource<VPCCidrBlock_Properties>(VPCCidrBlock_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::VPCCidrBlock {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html}
 */
export type VPCCidrBlock_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#cfn-ec2-vpccidrblock-cidrblock}
   */
  CidrBlock?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#cfn-ec2-vpccidrblock-ipv6pool}
   */
  Ipv6Pool?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#cfn-ec2-vpccidrblock-vpcid}
   */
  VpcId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#cfn-ec2-vpccidrblock-ipv6cidrblock}
   */
  Ipv6CidrBlock?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#cfn-ec2-vpccidrblock-amazonprovidedipv6cidrblock}
   */
  AmazonProvidedIpv6CidrBlock?: boolean;
};
