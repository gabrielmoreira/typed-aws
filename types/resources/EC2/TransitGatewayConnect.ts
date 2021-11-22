// CloudFormation Resource AWS::EC2::TransitGatewayConnect

import { CfnResource, Resolvable } from '../../base';

export type TransitGatewayConnect_Type = 'AWS::EC2::TransitGatewayConnect';
export const TransitGatewayConnect_Type = 'AWS::EC2::TransitGatewayConnect';

/**
 * The AWS::EC2::TransitGatewayConnect type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html}
 */
export default function TransitGatewayConnect(
  props: TransitGatewayConnect_Properties
) {
  return new CfnResource<TransitGatewayConnect_Properties>(
    TransitGatewayConnect_Type,
    props
  );
}

/**
 * The AWS::EC2::TransitGatewayConnect type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html}
 */
export type TransitGatewayConnect_Properties = {
  TransitGatewayAttachmentId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html#cfn-ec2-transitgatewayconnect-transporttransitgatewayattachmentid}
   */
  TransportTransitGatewayAttachmentId: Resolvable<string>;
  TransitGatewayId?: Resolvable<string>;
  State?: Resolvable<string>;
  CreationTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html#cfn-ec2-transitgatewayconnect-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html#cfn-ec2-transitgatewayconnect-options}
   */
  Options: TransitGatewayConnectOptions;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnect-transitgatewayconnectoptions.html}
 */
export type TransitGatewayConnectOptions = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnect-transitgatewayconnectoptions.html#cfn-ec2-transitgatewayconnect-transitgatewayconnectoptions-protocol}
   */
  Protocol?: Resolvable<string>;
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};
