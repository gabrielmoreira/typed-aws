// CloudFormation Resource AWS::EC2::TransitGatewayRouteTablePropagation

import { CFResource } from '../../base';

export type TransitGatewayRouteTablePropagation_Type =
  'AWS::EC2::TransitGatewayRouteTablePropagation';
export const TransitGatewayRouteTablePropagation_Type =
  'AWS::EC2::TransitGatewayRouteTablePropagation';

/**
 * Resource Type definition for
 * AWS::EC2::TransitGatewayRouteTablePropagation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export default function TransitGatewayRouteTablePropagation(
  props: TransitGatewayRouteTablePropagation_Properties
) {
  return new CFResource<
    TransitGatewayRouteTablePropagation_Type,
    TransitGatewayRouteTablePropagation_Properties
  >(TransitGatewayRouteTablePropagation_Type, props);
}

/**
 * Resource Type definition for
 * AWS::EC2::TransitGatewayRouteTablePropagation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export type TransitGatewayRouteTablePropagation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html#cfn-ec2-transitgatewayroutetablepropagation-transitgatewayroutetableid}
   */
  TransitGatewayRouteTableId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html#cfn-ec2-transitgatewayroutetablepropagation-transitgatewayattachmentid}
   */
  TransitGatewayAttachmentId: string;
};
