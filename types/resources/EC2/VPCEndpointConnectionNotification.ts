// CloudFormation Resource AWS::EC2::VPCEndpointConnectionNotification

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<VPCEndpointConnectionNotification_Properties>(
    VPCEndpointConnectionNotification_Type,
    props
  );
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
  ConnectionEvents: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-vpcendpointid}
   */
  VPCEndpointId?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-serviceid}
   */
  ServiceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html#cfn-ec2-vpcendpointconnectionnotification-connectionnotificationarn}
   */
  ConnectionNotificationArn: Resolvable<string>;
};
