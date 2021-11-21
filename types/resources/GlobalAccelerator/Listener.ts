// CloudFormation Resource AWS::GlobalAccelerator::Listener

import { CFResource } from '../../base';

export type Listener_Type = 'AWS::GlobalAccelerator::Listener';
export const Listener_Type = 'AWS::GlobalAccelerator::Listener';

/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export default function Listener(props: Listener_Properties) {
  return new CFResource<Listener_Type, Listener_Properties>(
    Listener_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export type Listener_Properties = {
  ListenerArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-acceleratorarn}
   */
  AcceleratorArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-portranges}
   */
  PortRanges: PortRange[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-protocol}
   */
  Protocol: 'TCP' | 'UDP';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-clientaffinity}
   */
  ClientAffinity?: 'NONE' | 'SOURCE_IP';
};

export type Port = number;

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
