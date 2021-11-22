// CloudFormation Resource AWS::EC2::EIP

import { CfnResource, Resolvable } from '../../base';

export type EIP_Type = 'AWS::EC2::EIP';
export const EIP_Type = 'AWS::EC2::EIP';

/**
 * Resource Type definition for AWS::EC2::EIP {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html}
 */
export default function EIP(props: EIP_Properties) {
  return new CfnResource<EIP_Properties>(EIP_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::EIP {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html}
 */
export type EIP_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html#cfn-ec2-eip-publicipv4pool}
   */
  PublicIpv4Pool?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html#cfn-ec2-eip-domain}
   */
  Domain?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html#cfn-ec2-eip-instanceid}
   */
  InstanceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html#cfn-ec2-eip-tags}
   */
  Tags?: Tag[];
  AllocationId?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
