// CloudFormation Resource AWS::EC2::TransitGatewayVpcAttachment

import { CfnResource, Resolvable } from '../../base';

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
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-transitgatewayid}
   */
  TransitGatewayId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-vpcid}
   */
  VpcId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-subnetids}
   */
  SubnetIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-addsubnetids}
   */
  AddSubnetIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#cfn-ec2-transitgatewayvpcattachment-removesubnetids}
   */
  RemoveSubnetIds?: Resolvable<string>[];
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
    DnsSupport?: Resolvable<string>;
    Ipv6Support?: Resolvable<string>;
    ApplianceModeSupport?: Resolvable<string>;
  };
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
