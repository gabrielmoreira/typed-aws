// CloudFormation Resource AWS::EC2::TransitGatewayPeeringAttachment

import { CFResource } from '../../base';

export type TransitGatewayPeeringAttachment_Type =
  'AWS::EC2::TransitGatewayPeeringAttachment';
export const TransitGatewayPeeringAttachment_Type =
  'AWS::EC2::TransitGatewayPeeringAttachment';

/**
 * The AWS::EC2::TransitGatewayPeeringAttachment type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html}
 */
export default function TransitGatewayPeeringAttachment(
  props: TransitGatewayPeeringAttachment_Properties
) {
  return new CFResource<
    TransitGatewayPeeringAttachment_Type,
    TransitGatewayPeeringAttachment_Properties
  >(TransitGatewayPeeringAttachment_Type, props);
}

/**
 * The AWS::EC2::TransitGatewayPeeringAttachment type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html}
 */
export type TransitGatewayPeeringAttachment_Properties = {
  Status?: PeeringAttachmentStatus;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#cfn-ec2-transitgatewaypeeringattachment-options}
   */
  Options?: TransitGatewayPeeringAttachmentOptions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#cfn-ec2-transitgatewaypeeringattachment-transitgatewayid}
   */
  TransitGatewayId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#cfn-ec2-transitgatewaypeeringattachment-peertransitgatewayid}
   */
  PeerTransitGatewayId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#cfn-ec2-transitgatewaypeeringattachment-peeraccountid}
   */
  PeerAccountId: string;
  State?: string;
  CreationTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#cfn-ec2-transitgatewaypeeringattachment-peerregion}
   */
  PeerRegion: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#cfn-ec2-transitgatewaypeeringattachment-tags}
   */
  Tags?: Tag[];
  TransitGatewayAttachmentId?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaypeeringattachment-transitgatewaypeeringattachmentoptions.html}
 */
export type TransitGatewayPeeringAttachmentOptions = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaypeeringattachment-transitgatewaypeeringattachmentoptions.html#cfn-ec2-transitgatewaypeeringattachment-transitgatewaypeeringattachmentoptions-dynamicrouting}
   */
  DynamicRouting?: string;
};

export type Tag = {
  Value?: string;
  Key?: string;
};

export type PeeringAttachmentStatus = {
  Message?: string;
  Code?: string;
};
