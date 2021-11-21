// CloudFormation Resource AWS::NetworkManager::CustomerGatewayAssociation

import { CfnResource } from '../../base';

export type CustomerGatewayAssociation_Type =
  'AWS::NetworkManager::CustomerGatewayAssociation';
export const CustomerGatewayAssociation_Type =
  'AWS::NetworkManager::CustomerGatewayAssociation';

/**
 * The AWS::NetworkManager::CustomerGatewayAssociation type associates a
 * customer gateway with a device and optionally, with a link. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html}
 */
export default function CustomerGatewayAssociation(
  props: CustomerGatewayAssociation_Properties
) {
  return new CfnResource<CustomerGatewayAssociation_Properties>(
    CustomerGatewayAssociation_Type,
    props
  );
}

/**
 * The AWS::NetworkManager::CustomerGatewayAssociation type associates a
 * customer gateway with a device and optionally, with a link. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html}
 */
export type CustomerGatewayAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-globalnetworkid}
   */
  GlobalNetworkId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-customergatewayarn}
   */
  CustomerGatewayArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-deviceid}
   */
  DeviceId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-linkid}
   */
  LinkId?: string;
};
