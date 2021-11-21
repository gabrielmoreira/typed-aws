// CloudFormation Resource AWS::IoT::ScheduledAudit

import { CfnResource } from '../../base';

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
  ScheduledAuditName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-frequency}
   */
  Frequency: 'DAILY' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-dayofmonth}
   */
  DayOfMonth?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-dayofweek}
   */
  DayOfWeek?: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-targetchecknames}
   */
  TargetCheckNames: string[];
  ScheduledAuditArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
