// CloudFormation Resource AWS::SQS::QueuePolicy

import { CfnResource, Resolvable } from '../../base';

export type QueuePolicy_Type = 'AWS::SQS::QueuePolicy';
export const QueuePolicy_Type = 'AWS::SQS::QueuePolicy';

/**
 * Resource Type definition for AWS::SQS::QueuePolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html}
 */
export default function QueuePolicy(props: QueuePolicy_Properties) {
  return new CfnResource<QueuePolicy_Properties>(QueuePolicy_Type, props);
}

/**
 * Resource Type definition for AWS::SQS::QueuePolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html}
 */
export type QueuePolicy_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html#cfn-sqs-queuepolicy-policydocument}
   */
  PolicyDocument:
    | {
        [k: string]: unknown;
      }
    | Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html#cfn-sqs-queuepolicy-queues}
   */
  Queues: Resolvable<string>[];
};
