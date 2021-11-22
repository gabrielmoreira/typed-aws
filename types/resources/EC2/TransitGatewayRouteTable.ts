// CloudFormation Resource AWS::EC2::TransitGatewayRouteTable

import { CfnResource, Resolvable } from '../../base';

export type TransitGatewayRouteTable_Type =
  'AWS::EC2::TransitGatewayRouteTable';
export const TransitGatewayRouteTable_Type =
  'AWS::EC2::TransitGatewayRouteTable';

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTable {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html}
 */
export default function TransitGatewayRouteTable(
  props: TransitGatewayRouteTable_Properties
) {
  return new CfnResource<TransitGatewayRouteTable_Properties>(
    TransitGatewayRouteTable_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTable {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html}
 */
export type TransitGatewayRouteTable_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html#cfn-ec2-transitgatewayroutetable-transitgatewayid}
   */
  TransitGatewayId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html#cfn-ec2-transitgatewayroutetable-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
