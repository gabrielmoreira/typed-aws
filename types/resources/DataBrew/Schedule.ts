// CloudFormation Resource AWS::DataBrew::Schedule

import { CfnResource, Resolvable } from '../../base';

export type Schedule_Type = 'AWS::DataBrew::Schedule';
export const Schedule_Type = 'AWS::DataBrew::Schedule';

/**
 * Resource schema for AWS::DataBrew::Schedule. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html}
 */
export default function Schedule(props: Schedule_Properties) {
  return new CfnResource<Schedule_Properties>(Schedule_Type, props);
}

/**
 * Resource schema for AWS::DataBrew::Schedule. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html}
 */
export type Schedule_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-jobnames}
   */
  JobNames?: JobName[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-cronexpression}
   */
  CronExpression: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html#cfn-databrew-schedule-tags}
   */
  Tags?: Tag[];
};

export type JobName = Resolvable<string>;

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
