// CloudFormation Resource AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption

import { CfnResource, Resolvable } from '../../base';

export type ApplicationCloudWatchLoggingOption_Type =
  'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption';
export const ApplicationCloudWatchLoggingOption_Type =
  'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption';

/**
 * Resource Type definition for
 * AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html}
 */
export default function ApplicationCloudWatchLoggingOption(
  props: ApplicationCloudWatchLoggingOption_Properties
) {
  return new CfnResource<ApplicationCloudWatchLoggingOption_Properties>(
    ApplicationCloudWatchLoggingOption_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html}
 */
export type ApplicationCloudWatchLoggingOption_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption}
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-applicationname}
   */
  ApplicationName: Resolvable<string>;
  Id?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html}
 */
export type CloudWatchLoggingOption = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption-logstreamarn}
   */
  LogStreamARN: Resolvable<string>;
};
