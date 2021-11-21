// CloudFormation Resource AWS::EC2::NatGateway

import { CfnResource } from '../../base';

export type NatGateway_Type = 'AWS::EC2::NatGateway';
export const NatGateway_Type = 'AWS::EC2::NatGateway';

/**
 * Resource Type definition for AWS::EC2::NatGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html}
 */
export default function NatGateway(props: NatGateway_Properties) {
  return new CfnResource<NatGateway_Properties>(NatGateway_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::NatGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html}
 */
export type NatGateway_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-subnetid}
   */
  SubnetId: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-connectivitytype}
   */
  ConnectivityType?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-allocationid}
   */
  AllocationId?: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
