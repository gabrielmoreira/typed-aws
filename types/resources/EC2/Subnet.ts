// CloudFormation Resource AWS::EC2::Subnet

import { CFResource } from '../../base';

export type Subnet_Type = 'AWS::EC2::Subnet';
export const Subnet_Type = 'AWS::EC2::Subnet';

/**
 * Resource Type definition for AWS::EC2::Subnet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html}
 */
export default function Subnet(props: Subnet_Properties) {
  return new CFResource<Subnet_Type, Subnet_Properties>(Subnet_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::Subnet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html}
 */
export type Subnet_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-assignipv6addressoncreation}
   */
  AssignIpv6AddressOnCreation?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-awsec2subnet-prop-vpcid}
   */
  VpcId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-mappubliciponlaunch}
   */
  MapPublicIpOnLaunch?: boolean;
  NetworkAclAssociationId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-availabilityzone}
   */
  AvailabilityZone?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-cidrblock}
   */
  CidrBlock: string;
  SubnetId?: string;
  Ipv6CidrBlocks?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv6cidrblock}
   */
  Ipv6CidrBlock?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-outpostarn}
   */
  OutpostArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: string;
  Key: string;
};
