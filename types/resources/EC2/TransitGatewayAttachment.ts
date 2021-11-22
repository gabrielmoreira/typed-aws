// CloudFormation Resource AWS::EC2::TransitGatewayAttachment

import { CfnResource, Resolvable } from '../../base';

export type TransitGatewayAttachment_Type =
  'AWS::EC2::TransitGatewayAttachment';
export const TransitGatewayAttachment_Type =
  'AWS::EC2::TransitGatewayAttachment';

/**
 * Resource Type definition for AWS::EC2::TransitGatewayAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html}
 */
export default function TransitGatewayAttachment(
  props: TransitGatewayAttachment_Properties
) {
  return new CfnResource<TransitGatewayAttachment_Properties>(
    TransitGatewayAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::TransitGatewayAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html}
 */
export type TransitGatewayAttachment_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html#cfn-ec2-transitgatewayattachment-transitgatewayid}
   */
  TransitGatewayId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html#cfn-ec2-transitgatewayattachment-vpcid}
   */
  VpcId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html#cfn-ec2-transitgatewayattachment-subnetids}
   */
  SubnetIds: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html#cfn-ec2-transitgatewayattachment-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
