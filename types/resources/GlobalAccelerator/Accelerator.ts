// CloudFormation Resource AWS::GlobalAccelerator::Accelerator

import { CfnResource } from '../../base';

export type Accelerator_Type = 'AWS::GlobalAccelerator::Accelerator';
export const Accelerator_Type = 'AWS::GlobalAccelerator::Accelerator';

/**
 * Resource Type definition for AWS::GlobalAccelerator::Accelerator
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html}
 */
export default function Accelerator(props: Accelerator_Properties) {
  return new CfnResource<Accelerator_Properties>(Accelerator_Type, props);
}

/**
 * Resource Type definition for AWS::GlobalAccelerator::Accelerator
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html}
 */
export type Accelerator_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-ipaddresstype}
   */
  IpAddressType?: 'IPV4' | 'IPV6';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-ipaddresses}
   */
  IpAddresses?: IpAddress[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-enabled}
   */
  Enabled?: boolean;
  DnsName?: string;
  AcceleratorArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};

export type IpAddress = string;
