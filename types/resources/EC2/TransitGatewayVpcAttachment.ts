// CloudFormation Resource AWS::EC2::TransitGatewayVpcAttachment

import { CfnResource } from '../../base';

export type TransitGatewayVpcAttachment_Type =
  'AWS::EC2::TransitGatewayVpcAttachment';
export const TransitGatewayVpcAttachment_Type =
  'AWS::EC2::TransitGatewayVpcAttachment';

/**
 * Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html}
 */
export default function TransitGatewayVpcAttachment(
  props: TransitGatewayVpcAttachment_Properties
) {
  return new CfnResource<TransitGatewayVpcAttachment_Properties>(
    TransitGatewayVpcAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html}
 */
export type TransitGatewayVpcAttachment_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-transitgatewayid}
   */
  TransitGatewayId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-vpcid}
   */
  VpcId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-subnetids}
   */
  SubnetIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-addsubnetids}
   */
  AddSubnetIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-removesubnetids}
   */
  RemoveSubnetIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-options}
   */
  Options?: {
    DnsSupport?: string;
    Ipv6Support?: string;
    ApplianceModeSupport?: string;
  };
};

export type Tag = {
  Key: string;
  Value: string;
};
