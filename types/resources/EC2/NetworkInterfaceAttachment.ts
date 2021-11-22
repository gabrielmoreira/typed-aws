// CloudFormation Resource AWS::EC2::NetworkInterfaceAttachment

import { CfnResource, Resolvable } from '../../base';

export type NetworkInterfaceAttachment_Type =
  'AWS::EC2::NetworkInterfaceAttachment';
export const NetworkInterfaceAttachment_Type =
  'AWS::EC2::NetworkInterfaceAttachment';

/**
 * Resource Type definition for AWS::EC2::NetworkInterfaceAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html}
 */
export default function NetworkInterfaceAttachment(
  props: NetworkInterfaceAttachment_Properties
) {
  return new CfnResource<NetworkInterfaceAttachment_Properties>(
    NetworkInterfaceAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::NetworkInterfaceAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html}
 */
export type NetworkInterfaceAttachment_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-deleteonterm}
   */
  DeleteOnTermination?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-deviceindex}
   */
  DeviceIndex: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-instanceid}
   */
  InstanceId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-networkinterfaceid}
   */
  NetworkInterfaceId: Resolvable<string>;
};
