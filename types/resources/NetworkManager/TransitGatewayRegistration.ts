// CloudFormation Resource AWS::NetworkManager::TransitGatewayRegistration

import { CFResource } from '../../base';

export type TransitGatewayRegistration_Type =
  'AWS::NetworkManager::TransitGatewayRegistration';
export const TransitGatewayRegistration_Type =
  'AWS::NetworkManager::TransitGatewayRegistration';

/**
 * The AWS::NetworkManager::TransitGatewayRegistration type registers a
 * transit gateway in your global network. The transit gateway can be in
 * any AWS Region, but it must be owned by the same AWS account that owns
 * the global network. You cannot register a transit gateway in more than
 * one global network. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html}
 */
export default function TransitGatewayRegistration(
  props: TransitGatewayRegistration_Properties
) {
  return new CFResource<
    TransitGatewayRegistration_Type,
    TransitGatewayRegistration_Properties
  >(TransitGatewayRegistration_Type, props);
}

/**
 * The AWS::NetworkManager::TransitGatewayRegistration type registers a
 * transit gateway in your global network. The transit gateway can be in
 * any AWS Region, but it must be owned by the same AWS account that owns
 * the global network. You cannot register a transit gateway in more than
 * one global network. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html}
 */
export type TransitGatewayRegistration_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html#cfn-networkmanager-transitgatewayregistration-globalnetworkid}
   */
  GlobalNetworkId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html#cfn-networkmanager-transitgatewayregistration-transitgatewayarn}
   */
  TransitGatewayArn: string;
};
