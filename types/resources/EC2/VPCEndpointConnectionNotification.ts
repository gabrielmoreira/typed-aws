// CloudFormation Resource AWS::EC2::VPCEndpointConnectionNotification

import { CFResource } from '../../base';

export type VPCEndpointConnectionNotification_Type =
  'AWS::EC2::VPCEndpointConnectionNotification';
export const VPCEndpointConnectionNotification_Type =
  'AWS::EC2::VPCEndpointConnectionNotification';

/**
 * Resource Type definition for
 * AWS::EC2::VPCEndpointConnectionNotification {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html}
 */
export default function VPCEndpointConnectionNotification(
  props: VPCEndpointConnectionNotification_Properties
) {
  return new CFResource<
    VPCEndpointConnectionNotification_Type,
    VPCEndpointConnectionNotification_Properties
  >(VPCEndpointConnectionNotification_Type, props);
}

/**
 * Resource Type definition for
 * AWS::EC2::VPCEndpointConnectionNotification {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html}
 */
export type VPCEndpointConnectionNotification_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-connectionevents}
   */
  ConnectionEvents: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-vpcendpointid}
   */
  VPCEndpointId?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-serviceid}
   */
  ServiceId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-connectionnotificationarn}
   */
  ConnectionNotificationArn: string;
};
