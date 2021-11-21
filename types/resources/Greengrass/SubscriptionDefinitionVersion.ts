// CloudFormation Resource AWS::Greengrass::SubscriptionDefinitionVersion

import { CfnResource } from '../../base';

export type SubscriptionDefinitionVersion_Type =
  'AWS::Greengrass::SubscriptionDefinitionVersion';
export const SubscriptionDefinitionVersion_Type =
  'AWS::Greengrass::SubscriptionDefinitionVersion';

/**
 * Resource Type definition for
 * AWS::Greengrass::SubscriptionDefinitionVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html}
 */
export default function SubscriptionDefinitionVersion(
  props: SubscriptionDefinitionVersion_Properties
) {
  return new CfnResource<SubscriptionDefinitionVersion_Properties>(
    SubscriptionDefinitionVersion_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::Greengrass::SubscriptionDefinitionVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html}
 */
export type SubscriptionDefinitionVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html#cfn-greengrass-subscriptiondefinitionversion-subscriptiondefinitionid}
   */
  SubscriptionDefinitionId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html#cfn-greengrass-subscriptiondefinitionversion-subscriptions}
   */
  Subscriptions: Subscription[];
  Id?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html}
 */
export type Subscription = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-target}
   */
  Target: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-id}
   */
  Id: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-source}
   */
  Source: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html#cfn-greengrass-subscriptiondefinitionversion-subscription-subject}
   */
  Subject: string;
};
