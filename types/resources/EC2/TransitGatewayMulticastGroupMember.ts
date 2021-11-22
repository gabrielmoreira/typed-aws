// CloudFormation Resource AWS::EC2::TransitGatewayMulticastGroupMember

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<TransitGatewayMulticastGroupMember_Properties>(
    TransitGatewayMulticastGroupMember_Type,
    props
  );
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
  GroupIpAddress: Resolvable<string>;
  TransitGatewayAttachmentId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html#cfn-ec2-transitgatewaymulticastgroupmember-transitgatewaymulticastdomainid}
   */
  TransitGatewayMulticastDomainId: Resolvable<string>;
  SubnetId?: Resolvable<string>;
  ResourceId?: Resolvable<string>;
  ResourceType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html#cfn-ec2-transitgatewaymulticastgroupmember-networkinterfaceid}
   */
  NetworkInterfaceId: Resolvable<string>;
  GroupMember?: Resolvable<boolean>;
  GroupSource?: Resolvable<boolean>;
  MemberType?: Resolvable<string>;
  SourceType?: Resolvable<string>;
};
