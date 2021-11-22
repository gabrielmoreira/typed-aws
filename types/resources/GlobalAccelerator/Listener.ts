// CloudFormation Resource AWS::GlobalAccelerator::Listener

import { CfnResource, Resolvable } from '../../base';

export type Listener_Type = 'AWS::GlobalAccelerator::Listener';
export const Listener_Type = 'AWS::GlobalAccelerator::Listener';

/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export default function Listener(props: Listener_Properties) {
  return new CfnResource<Listener_Properties>(Listener_Type, props);
}

/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export type Listener_Properties = {
  ListenerArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-acceleratorarn}
   */
  AcceleratorArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-portranges}
   */
  PortRanges: PortRange[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-protocol}
   */
  Protocol: Resolvable<'TCP' | 'UDP'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-clientaffinity}
   */
  ClientAffinity?: Resolvable<'NONE' | 'SOURCE_IP'>;
};

export type Port = Resolvable<number>;

/**
 * A port range to support for connections from  clients to your
 * accelerator. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html}
 */
export type PortRange = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html#cfn-globalaccelerator-listener-portrange-fromport}
   */
  FromPort: Port;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html#cfn-globalaccelerator-listener-portrange-toport}
   */
  ToPort: Port;
};
