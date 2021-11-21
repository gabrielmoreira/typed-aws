// CloudFormation Resource AWS::CloudWatch::InsightRule

import { CFResource } from '../../base';

export type InsightRule_Type = 'AWS::CloudWatch::InsightRule';
export const InsightRule_Type = 'AWS::CloudWatch::InsightRule';

/**
 * Resource Type definition for AWS::CloudWatch::InsightRule {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html}
 */
export default function InsightRule(props: InsightRule_Properties) {
  return new CFResource<InsightRule_Type, InsightRule_Properties>(
    InsightRule_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CloudWatch::InsightRule {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html}
 */
export type InsightRule_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-rulestate}
   */
  RuleState: string;
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-rulebody}
   */
  RuleBody: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-rulename}
   */
  RuleName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-tags}
   */
  Tags?: Tags;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-insightrule-tags.html}
 */
export type Tags = {};
