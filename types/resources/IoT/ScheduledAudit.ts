// CloudFormation Resource AWS::IoT::ScheduledAudit

import { CfnResource, Resolvable } from '../../base';

export type ScheduledAudit_Type = 'AWS::IoT::ScheduledAudit';
export const ScheduledAudit_Type = 'AWS::IoT::ScheduledAudit';

/**
 * Scheduled audits can be used to specify the checks you want to perform
 * during an audit and how often the audit should be run. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html}
 */
export default function ScheduledAudit(props: ScheduledAudit_Properties) {
  return new CfnResource<ScheduledAudit_Properties>(ScheduledAudit_Type, props);
}

/**
 * Scheduled audits can be used to specify the checks you want to perform
 * during an audit and how often the audit should be run. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html}
 */
export type ScheduledAudit_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-scheduledauditname}
   */
  ScheduledAuditName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-frequency}
   */
  Frequency: Resolvable<'DAILY' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-dayofmonth}
   */
  DayOfMonth?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-dayofweek}
   */
  DayOfWeek?: Resolvable<'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-targetchecknames}
   */
  TargetCheckNames: Resolvable<string>[];
  ScheduledAuditArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
