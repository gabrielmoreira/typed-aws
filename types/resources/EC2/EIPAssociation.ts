// CloudFormation Resource AWS::EC2::EIPAssociation

import { CfnResource, Resolvable } from '../../base';

export type EIPAssociation_Type = 'AWS::EC2::EIPAssociation';
export const EIPAssociation_Type = 'AWS::EC2::EIPAssociation';

/**
 * Resource Type definition for AWS::EC2::EIPAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html}
 */
export default function EIPAssociation(props: EIPAssociation_Properties) {
  return new CfnResource<EIPAssociation_Properties>(EIPAssociation_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::EIPAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html}
 */
export type EIPAssociation_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-allocationid}
   */
  AllocationId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-eip}
   */
  EIP?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-instanceid}
   */
  InstanceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-networkinterfaceid}
   */
  NetworkInterfaceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-PrivateIpAddress}
   */
  PrivateIpAddress?: Resolvable<string>;
};
