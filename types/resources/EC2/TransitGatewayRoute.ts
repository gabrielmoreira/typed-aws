// CloudFormation Resource AWS::EC2::TransitGatewayRoute

import { CfnResource } from '../../base';

export type TransitGatewayRoute_Type = 'AWS::EC2::TransitGatewayRoute';
export const TransitGatewayRoute_Type = 'AWS::EC2::TransitGatewayRoute';

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html}
 */
export default function TransitGatewayRoute(
  props: TransitGatewayRoute_Properties
) {
  return new CfnResource<TransitGatewayRoute_Properties>(
    TransitGatewayRoute_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html}
 */
export type TransitGatewayRoute_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html#cfn-ec2-transitgatewayroute-transitgatewayroutetableid}
   */
  TransitGatewayRouteTableId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html#cfn-ec2-transitgatewayroute-destinationcidrblock}
   */
  DestinationCidrBlock?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html#cfn-ec2-transitgatewayroute-blackhole}
   */
  Blackhole?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html#cfn-ec2-transitgatewayroute-transitgatewayattachmentid}
   */
  TransitGatewayAttachmentId?: string;
};
