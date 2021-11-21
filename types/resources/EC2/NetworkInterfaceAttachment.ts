// CloudFormation Resource AWS::EC2::NetworkInterfaceAttachment

import { CFResource } from '../../base';

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
  return new CFResource<
    NetworkInterfaceAttachment_Type,
    NetworkInterfaceAttachment_Properties
  >(NetworkInterfaceAttachment_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::NetworkInterfaceAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html}
 */
export type NetworkInterfaceAttachment_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-deleteonterm}
   */
  DeleteOnTermination?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-deviceindex}
   */
  DeviceIndex: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-instanceid}
   */
  InstanceId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html#cfn-ec2-network-interface-attachment-networkinterfaceid}
   */
  NetworkInterfaceId: string;
};
