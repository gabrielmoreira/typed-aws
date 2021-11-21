// CloudFormation Resource AWS::CloudWatch::CompositeAlarm

import { CfnResource } from '../../base';

export type CompositeAlarm_Type = 'AWS::CloudWatch::CompositeAlarm';
export const CompositeAlarm_Type = 'AWS::CloudWatch::CompositeAlarm';

/**
 * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which
 * aggregates the states of other Alarms (Metric or Composite Alarms) as
 * defined by the AlarmRule expression {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html}
 */
export default function CompositeAlarm(props: CompositeAlarm_Properties) {
  return new CfnResource<CompositeAlarm_Properties>(CompositeAlarm_Type, props);
}

/**
 * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which
 * aggregates the states of other Alarms (Metric or Composite Alarms) as
 * defined by the AlarmRule expression {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html}
 */
export type CompositeAlarm_Properties = {
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmname}
   */
  AlarmName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmrule}
   */
  AlarmRule: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmdescription}
   */
  AlarmDescription?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-actionsenabled}
   */
  ActionsEnabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-okactions}
   */
  OKActions?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmactions}
   */
  AlarmActions?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-insufficientdataactions}
   */
  InsufficientDataActions?: string[];
};
