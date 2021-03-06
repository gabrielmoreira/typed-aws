// CloudFormation Resource AWS::EC2::Subnet

import { CfnResource, Resolvable } from '../../base';

export type Subnet_Type = 'AWS::EC2::Subnet';
export const Subnet_Type = 'AWS::EC2::Subnet';

/**
 * Resource Type definition for AWS::EC2::Subnet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html}
 */
export default function Subnet(props: Subnet_Properties) {
  return new CfnResource<Subnet_Properties>(Subnet_Type, props);
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
  AssignIpv6AddressOnCreation?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-awsec2subnet-prop-vpcid}
   */
  VpcId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-mappubliciponlaunch}
   */
  MapPublicIpOnLaunch?: Resolvable<boolean>;
  NetworkAclAssociationId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-availabilityzone}
   */
  AvailabilityZone?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-cidrblock}
   */
  CidrBlock: Resolvable<string>;
  SubnetId?: Resolvable<string>;
  Ipv6CidrBlocks?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv6cidrblock}
   */
  Ipv6CidrBlock?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-outpostarn}
   */
  OutpostArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
