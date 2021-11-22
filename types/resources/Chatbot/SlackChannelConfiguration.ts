// CloudFormation Resource AWS::Chatbot::SlackChannelConfiguration

import { CfnResource, Resolvable } from '../../base';

export type SlackChannelConfiguration_Type =
  'AWS::Chatbot::SlackChannelConfiguration';
export const SlackChannelConfiguration_Type =
  'AWS::Chatbot::SlackChannelConfiguration';

/**
 * Resource schema for AWS::Chatbot::SlackChannelConfiguration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html}
 */
export default function SlackChannelConfiguration(
  props: SlackChannelConfiguration_Properties
) {
  return new CfnResource<SlackChannelConfiguration_Properties>(
    SlackChannelConfiguration_Type,
    props
  );
}

/**
 * Resource schema for AWS::Chatbot::SlackChannelConfiguration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html}
 */
export type SlackChannelConfiguration_Properties = {
  UserRoleRequired?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-logginglevel}
   */
  LoggingLevel?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-snstopicarns}
   */
  SnsTopicArns?: Resolvable<string>[];
  GuardrailPolicies?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackworkspaceid}
   */
  SlackWorkspaceId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackchannelid}
   */
  SlackChannelId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-iamrolearn}
   */
  IamRoleArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-configurationname}
   */
  ConfigurationName: Resolvable<string>;
  Arn?: Resolvable<string>;
};
