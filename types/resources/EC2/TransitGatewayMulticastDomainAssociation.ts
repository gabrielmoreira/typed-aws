// CloudFormation Resource AWS::EC2::TransitGatewayMulticastDomainAssociation

import { CFResource } from '../../base';

export type TransitGatewayMulticastDomainAssociation_Type =
  'AWS::EC2::TransitGatewayMulticastDomainAssociation';
export const TransitGatewayMulticastDomainAssociation_Type =
  'AWS::EC2::TransitGatewayMulticastDomainAssociation';

/**
 * The AWS::EC2::TransitGatewayMulticastDomainAssociation type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html}
 */
export default function TransitGatewayMulticastDomainAssociation(
  props: TransitGatewayMulticastDomainAssociation_Properties
) {
  return new CFResource<
    TransitGatewayMulticastDomainAssociation_Type,
    TransitGatewayMulticastDomainAssociation_Properties
  >(TransitGatewayMulticastDomainAssociation_Type, props);
}

/**
 * The AWS::EC2::TransitGatewayMulticastDomainAssociation type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html}
 */
export type TransitGatewayMulticastDomainAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#cfn-ec2-transitgatewaymulticastdomainassociation-transitgatewaymulticastdomainid}
   */
  TransitGatewayMulticastDomainId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#cfn-ec2-transitgatewaymulticastdomainassociation-transitgatewayattachmentid}
   */
  TransitGatewayAttachmentId: string;
  ResourceId?: string;
  ResourceType?: string;
  State?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#cfn-ec2-transitgatewaymulticastdomainassociation-subnetid}
   */
  SubnetId: string;
};
