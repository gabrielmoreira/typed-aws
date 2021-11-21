// CloudFormation Resource AWS::EC2::SubnetCidrBlock

import { CFResource } from '../../base';

export type SubnetCidrBlock_Type = 'AWS::EC2::SubnetCidrBlock';
export const SubnetCidrBlock_Type = 'AWS::EC2::SubnetCidrBlock';

/**
 * Resource Type definition for AWS::EC2::SubnetCidrBlock {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html}
 */
export default function SubnetCidrBlock(props: SubnetCidrBlock_Properties) {
  return new CFResource<SubnetCidrBlock_Type, SubnetCidrBlock_Properties>(
    SubnetCidrBlock_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::SubnetCidrBlock {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html}
 */
export type SubnetCidrBlock_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-ipv6cidrblock}
   */
  Ipv6CidrBlock: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-subnetid}
   */
  SubnetId: string;
};
