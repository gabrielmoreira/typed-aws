// CloudFormation Resource AWS::Batch::JobQueue

import { CfnResource } from '../../base';

export type JobQueue_Type = 'AWS::Batch::JobQueue';
export const JobQueue_Type = 'AWS::Batch::JobQueue';

/**
 * Resource Type definition for AWS::Batch::JobQueue {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export default function JobQueue(props: JobQueue_Properties) {
  return new CfnResource<JobQueue_Properties>(JobQueue_Type, props);
}

/**
 * Resource Type definition for AWS::Batch::JobQueue {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export type JobQueue_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#cfn-batch-jobqueue-computeenvironmentorder}
   */
  ComputeEnvironmentOrder: ComputeEnvironmentOrder[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#cfn-batch-jobqueue-priority}
   */
  Priority: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#cfn-batch-jobqueue-state}
   */
  State?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#cfn-batch-jobqueue-schedulingpolicyarn}
   */
  SchedulingPolicyArn?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#cfn-batch-jobqueue-jobqueuename}
   */
  JobQueueName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#cfn-batch-jobqueue-tags}
   */
  Tags?: {
    [k: string]: unknown;
  };
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-computeenvironmentorder.html}
 */
export type ComputeEnvironmentOrder = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-computeenvironmentorder.html#cfn-batch-jobqueue-computeenvironmentorder-computeenvironment}
   */
  ComputeEnvironment: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-computeenvironmentorder.html#cfn-batch-jobqueue-computeenvironmentorder-order}
   */
  Order: number;
};
