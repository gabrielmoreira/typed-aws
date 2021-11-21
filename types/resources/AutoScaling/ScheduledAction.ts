// CloudFormation Resource AWS::AutoScaling::ScheduledAction

import { CfnResource } from '../../base';

export type ScheduledAction_Type = 'AWS::AutoScaling::ScheduledAction';
export const ScheduledAction_Type = 'AWS::AutoScaling::ScheduledAction';

/**
 * Resource Type definition for AWS::AutoScaling::ScheduledAction {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html}
 */
export default function ScheduledAction(props: ScheduledAction_Properties) {
  return new CfnResource<ScheduledAction_Properties>(
    ScheduledAction_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::AutoScaling::ScheduledAction {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html}
 */
export type ScheduledAction_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-minsize}
   */
  MinSize?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-recurrence}
   */
  Recurrence?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-timezone}
   */
  TimeZone?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-endtime}
   */
  EndTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-asgname}
   */
  AutoScalingGroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-starttime}
   */
  StartTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-desiredcapacity}
   */
  DesiredCapacity?: number;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-maxsize}
   */
  MaxSize?: number;
};
