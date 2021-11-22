// CloudFormation Resource AWS::SNS::TopicPolicy

import { CfnResource, Resolvable } from '../../base';

export type TopicPolicy_Type = 'AWS::SNS::TopicPolicy';
export const TopicPolicy_Type = 'AWS::SNS::TopicPolicy';

/**
 * Resource Type definition for AWS::SNS::TopicPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html}
 */
export default function TopicPolicy(props: TopicPolicy_Properties) {
  return new CfnResource<TopicPolicy_Properties>(TopicPolicy_Type, props);
}

/**
 * Resource Type definition for AWS::SNS::TopicPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html}
 */
export type TopicPolicy_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html#cfn-sns-topicpolicy-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html#cfn-sns-topicpolicy-topics}
   */
  Topics: Resolvable<string>[];
};
