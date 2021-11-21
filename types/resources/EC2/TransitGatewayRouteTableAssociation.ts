// CloudFormation Resource AWS::EC2::TransitGatewayRouteTableAssociation

import { CfnResource } from '../../base';

export type TransitGatewayRouteTableAssociation_Type =
  'AWS::EC2::TransitGatewayRouteTableAssociation';
export const TransitGatewayRouteTableAssociation_Type =
  'AWS::EC2::TransitGatewayRouteTableAssociation';

/**
 * Resource Type definition for
 * AWS::EC2::TransitGatewayRouteTableAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export default function TransitGatewayRouteTableAssociation(
  props: TransitGatewayRouteTableAssociation_Properties
) {
  return new CfnResource<TransitGatewayRouteTableAssociation_Properties>(
    TransitGatewayRouteTableAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::EC2::TransitGatewayRouteTableAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export type TransitGatewayRouteTableAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html#cfn-ec2-transitgatewayroutetableassociation-transitgatewayroutetableid}
   */
  TransitGatewayRouteTableId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html#cfn-ec2-transitgatewayroutetableassociation-transitgatewayattachmentid}
   */
  TransitGatewayAttachmentId: string;
};
