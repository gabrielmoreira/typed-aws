// CloudFormation Resource AWS::EC2::VPC

import { CfnResource } from '../../base';

export type VPC_Type = 'AWS::EC2::VPC';
export const VPC_Type = 'AWS::EC2::VPC';

/**
 * Resource Type definition for AWS::EC2::VPC {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html}
 */
export default function VPC(props: VPC_Properties) {
  return new CfnResource<VPC_Properties>(VPC_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::VPC {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html}
 */
export type VPC_Properties = {
  VpcId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html#cfn-aws-ec2-vpc-cidrblock}
   */
  CidrBlock: string;
  CidrBlockAssociations?: string[];
  DefaultNetworkAcl?: string;
  DefaultSecurityGroup?: string;
  Ipv6CidrBlocks?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html#cfn-aws-ec2-vpc-EnableDnsHostnames}
   */
  EnableDnsHostnames?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html#cfn-aws-ec2-vpc-EnableDnsSupport}
   */
  EnableDnsSupport?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html#cfn-aws-ec2-vpc-instancetenancy}
   */
  InstanceTenancy?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html#cfn-aws-ec2-vpc-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
