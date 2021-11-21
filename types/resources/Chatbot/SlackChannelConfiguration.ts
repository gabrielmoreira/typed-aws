// CloudFormation Resource AWS::Chatbot::SlackChannelConfiguration

import { CFResource } from '../../base';

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
  return new CFResource<
    SlackChannelConfiguration_Type,
    SlackChannelConfiguration_Properties
  >(SlackChannelConfiguration_Type, props);
}

/**
 * Resource schema for AWS::Chatbot::SlackChannelConfiguration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html}
 */
export type SlackChannelConfiguration_Properties = {
  UserRoleRequired?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-logginglevel}
   */
  LoggingLevel?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-snstopicarns}
   */
  SnsTopicArns?: string[];
  GuardrailPolicies?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackworkspaceid}
   */
  SlackWorkspaceId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackchannelid}
   */
  SlackChannelId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-iamrolearn}
   */
  IamRoleArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-configurationname}
   */
  ConfigurationName: string;
  Arn?: string;
};
