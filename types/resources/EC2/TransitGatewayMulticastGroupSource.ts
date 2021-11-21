// CloudFormation Resource AWS::EC2::TransitGatewayMulticastGroupSource

import { CFResource } from '../../base';

export type TransitGatewayMulticastGroupSource_Type =
  'AWS::EC2::TransitGatewayMulticastGroupSource';
export const TransitGatewayMulticastGroupSource_Type =
  'AWS::EC2::TransitGatewayMulticastGroupSource';

/**
 * The AWS::EC2::TransitGatewayMulticastGroupSource registers and
 * deregisters members and sources (network interfaces) with the transit
 * gateway multicast group {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html}
 */
export default function TransitGatewayMulticastGroupSource(
  props: TransitGatewayMulticastGroupSource_Properties
) {
  return new CFResource<
    TransitGatewayMulticastGroupSource_Type,
    TransitGatewayMulticastGroupSource_Properties
  >(TransitGatewayMulticastGroupSource_Type, props);
}

/**
 * The AWS::EC2::TransitGatewayMulticastGroupSource registers and
 * deregisters members and sources (network interfaces) with the transit
 * gateway multicast group {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html}
 */
export type TransitGatewayMulticastGroupSource_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html#cfn-ec2-transitgatewaymulticastgroupsource-groupipaddress}
   */
  GroupIpAddress: string;
  TransitGatewayAttachmentId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html#cfn-ec2-transitgatewaymulticastgroupsource-transitgatewaymulticastdomainid}
   */
  TransitGatewayMulticastDomainId: string;
  SubnetId?: string;
  ResourceId?: string;
  ResourceType?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html#cfn-ec2-transitgatewaymulticastgroupsource-networkinterfaceid}
   */
  NetworkInterfaceId: string;
  GroupMember?: boolean;
  GroupSource?: boolean;
  MemberType?: string;
  SourceType?: string;
};
