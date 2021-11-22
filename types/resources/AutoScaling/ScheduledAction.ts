// CloudFormation Resource AWS::AutoScaling::ScheduledAction

import { CfnResource, Resolvable } from '../../base';

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
  MinSize?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-recurrence}
   */
  Recurrence?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-timezone}
   */
  TimeZone?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-endtime}
   */
  EndTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-asgname}
   */
  AutoScalingGroupName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-starttime}
   */
  StartTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-desiredcapacity}
   */
  DesiredCapacity?: Resolvable<number>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html#cfn-as-scheduledaction-maxsize}
   */
  MaxSize?: Resolvable<number>;
};
