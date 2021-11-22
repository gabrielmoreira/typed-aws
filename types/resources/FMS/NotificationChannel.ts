// CloudFormation Resource AWS::FMS::NotificationChannel

import { CfnResource, Resolvable } from '../../base';

export type NotificationChannel_Type = 'AWS::FMS::NotificationChannel';
export const NotificationChannel_Type = 'AWS::FMS::NotificationChannel';

/**
 * Designates the IAM role and Amazon Simple Notification Service (SNS)
 * topic that AWS Firewall Manager uses to record SNS logs. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html}
 */
export default function NotificationChannel(
  props: NotificationChannel_Properties
) {
  return new CfnResource<NotificationChannel_Properties>(
    NotificationChannel_Type,
    props
  );
}

/**
 * Designates the IAM role and Amazon Simple Notification Service (SNS)
 * topic that AWS Firewall Manager uses to record SNS logs. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html}
 */
export type NotificationChannel_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html#cfn-fms-notificationchannel-snsrolename}
   */
  SnsRoleName: ResourceArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html#cfn-fms-notificationchannel-snstopicarn}
   */
  SnsTopicArn: ResourceArn;
};

export type ResourceArn = Resolvable<string>;
