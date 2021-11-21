// CloudFormation Resource AWS::EC2::TransitGatewayMulticastDomain

import { CfnResource } from '../../base';

export type TransitGatewayMulticastDomain_Type =
  'AWS::EC2::TransitGatewayMulticastDomain';
export const TransitGatewayMulticastDomain_Type =
  'AWS::EC2::TransitGatewayMulticastDomain';

/**
 * The AWS::EC2::TransitGatewayMulticastDomain type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html}
 */
export default function TransitGatewayMulticastDomain(
  props: TransitGatewayMulticastDomain_Properties
) {
  return new CfnResource<TransitGatewayMulticastDomain_Properties>(
    TransitGatewayMulticastDomain_Type,
    props
  );
}

/**
 * The AWS::EC2::TransitGatewayMulticastDomain type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html}
 */
export type TransitGatewayMulticastDomain_Properties = {
  TransitGatewayMulticastDomainId?: string;
  TransitGatewayMulticastDomainArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-transitgatewayid}
   */
  TransitGatewayId: string;
  State?: string;
  CreationTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-options}
   */
  Options?: {
    AutoAcceptSharedAssociations?: string;
    Igmpv2Support?: string;
    StaticSourcesSupport?: string;
  };
};

export type Tag = {
  Key?: string;
  Value?: string;
};
