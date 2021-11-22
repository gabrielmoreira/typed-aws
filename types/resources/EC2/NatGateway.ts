// CloudFormation Resource AWS::EC2::NatGateway

import { CfnResource, Resolvable } from '../../base';

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
  SubnetId: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-connectivitytype}
   */
  ConnectivityType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#cfn-ec2-natgateway-allocationid}
   */
  AllocationId?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
