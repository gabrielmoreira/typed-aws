// CloudFormation Resource AWS::EC2::EIPAssociation

import { CFResource } from '../../base';

export type EIPAssociation_Type = 'AWS::EC2::EIPAssociation';
export const EIPAssociation_Type = 'AWS::EC2::EIPAssociation';

/**
 * Resource Type definition for AWS::EC2::EIPAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html}
 */
export default function EIPAssociation(props: EIPAssociation_Properties) {
  return new CFResource<EIPAssociation_Type, EIPAssociation_Properties>(
    EIPAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::EIPAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html}
 */
export type EIPAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-allocationid}
   */
  AllocationId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-eip}
   */
  EIP?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-instanceid}
   */
  InstanceId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-networkinterfaceid}
   */
  NetworkInterfaceId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html#cfn-ec2-eipassociation-PrivateIpAddress}
   */
  PrivateIpAddress?: string;
};
