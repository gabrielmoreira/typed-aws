// CloudFormation Resource AWS::IoT::TopicRuleDestination

import { CfnResource, Resolvable } from '../../base';

export type TopicRuleDestination_Type = 'AWS::IoT::TopicRuleDestination';
export const TopicRuleDestination_Type = 'AWS::IoT::TopicRuleDestination';

/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export default function TopicRuleDestination(
  props: TopicRuleDestination_Properties
) {
  return new CfnResource<TopicRuleDestination_Properties>(
    TopicRuleDestination_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export type TopicRuleDestination_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-status}
   */
  Status?: TopicRuleDestinationStatus;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-httpurlproperties}
   */
  HttpUrlProperties?: HttpUrlDestinationSummary;
  StatusReason?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcproperties}
   */
  VpcProperties?: VpcDestinationProperties;
};

export type TopicRuleDestinationStatus = Resolvable<
  'ENABLED' | 'IN_PROGRESS' | 'DISABLED'
>;

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html}
 */
export type HttpUrlDestinationSummary = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html#cfn-iot-topicruledestination-httpurldestinationsummary-confirmationurl}
   */
  ConfirmationUrl?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html}
 */
export type VpcDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-subnetids}
   */
  SubnetIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-securitygroups}
   */
  SecurityGroups?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-vpcid}
   */
  VpcId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-rolearn}
   */
  RoleArn?: Resolvable<string>;
};
