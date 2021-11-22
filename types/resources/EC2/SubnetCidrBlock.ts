// CloudFormation Resource AWS::EC2::SubnetCidrBlock

import { CfnResource, Resolvable } from '../../base';

export type SubnetCidrBlock_Type = 'AWS::EC2::SubnetCidrBlock';
export const SubnetCidrBlock_Type = 'AWS::EC2::SubnetCidrBlock';

/**
 * Resource Type definition for AWS::EC2::SubnetCidrBlock {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html}
 */
export default function SubnetCidrBlock(props: SubnetCidrBlock_Properties) {
  return new CfnResource<SubnetCidrBlock_Properties>(
    SubnetCidrBlock_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::SubnetCidrBlock {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html}
 */
export type SubnetCidrBlock_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-ipv6cidrblock}
   */
  Ipv6CidrBlock: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-subnetid}
   */
  SubnetId: Resolvable<string>;
};
