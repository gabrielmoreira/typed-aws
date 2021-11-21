// CloudFormation Resource AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption

import { CFResource } from '../../base';

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
  return new CFResource<
    ApplicationCloudWatchLoggingOption_Type,
    ApplicationCloudWatchLoggingOption_Properties
  >(ApplicationCloudWatchLoggingOption_Type, props);
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
  ApplicationName: string;
  Id?: string;
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
  LogStreamARN: string;
};
