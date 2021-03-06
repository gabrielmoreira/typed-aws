// CloudFormation Resource AWS::MediaConvert::Queue

import { CfnResource, Resolvable } from '../../base';

export type Queue_Type = 'AWS::MediaConvert::Queue';
export const Queue_Type = 'AWS::MediaConvert::Queue';

/**
 * Resource Type definition for AWS::MediaConvert::Queue {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html}
 */
export default function Queue(props: Queue_Properties) {
  return new CfnResource<Queue_Properties>(Queue_Type, props);
}

/**
 * Resource Type definition for AWS::MediaConvert::Queue {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html}
 */
export type Queue_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-status}
   */
  Status?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-pricingplan}
   */
  PricingPlan?: Resolvable<string>;
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-tags}
   */
  Tags?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-name}
   */
  Name?: Resolvable<string>;
};
