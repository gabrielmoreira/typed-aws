// CloudFormation Resource AWS::EC2::TransitGatewayMulticastGroupMember

import { CFResource } from '../../base';

export type TransitGatewayMulticastGroupMember_Type =
  'AWS::EC2::TransitGatewayMulticastGroupMember';
export const TransitGatewayMulticastGroupMember_Type =
  'AWS::EC2::TransitGatewayMulticastGroupMember';

/**
 * The AWS::EC2::TransitGatewayMulticastGroupMember registers and
 * deregisters members and sources (network interfaces) with the transit
 * gateway multicast group {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html}
 */
export default function TransitGatewayMulticastGroupMember(
  props: TransitGatewayMulticastGroupMember_Properties
) {
  return new CFResource<
    TransitGatewayMulticastGroupMember_Type,
    TransitGatewayMulticastGroupMember_Properties
  >(TransitGatewayMulticastGroupMember_Type, props);
}

/**
 * The AWS::EC2::TransitGatewayMulticastGroupMember registers and
 * deregisters members and sources (network interfaces) with the transit
 * gateway multicast group {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html}
 */
export type TransitGatewayMulticastGroupMember_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html#cfn-ec2-transitgatewaymulticastgroupmember-groupipaddress}
   */
  GroupIpAddress: string;
  TransitGatewayAttachmentId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html#cfn-ec2-transitgatewaymulticastgroupmember-transitgatewaymulticastdomainid}
   */
  TransitGatewayMulticastDomainId: string;
  SubnetId?: string;
  ResourceId?: string;
  ResourceType?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html#cfn-ec2-transitgatewaymulticastgroupmember-networkinterfaceid}
   */
  NetworkInterfaceId: string;
  GroupMember?: boolean;
  GroupSource?: boolean;
  MemberType?: string;
  SourceType?: string;
};
