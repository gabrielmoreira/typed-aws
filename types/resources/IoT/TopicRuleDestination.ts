// CloudFormation Resource AWS::IoT::TopicRuleDestination

import { CFResource } from '../../base';

export type TopicRuleDestination_Type = 'AWS::IoT::TopicRuleDestination';
export const TopicRuleDestination_Type = 'AWS::IoT::TopicRuleDestination';

/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export default function TopicRuleDestination(
  props: TopicRuleDestination_Properties
) {
  return new CFResource<
    TopicRuleDestination_Type,
    TopicRuleDestination_Properties
  >(TopicRuleDestination_Type, props);
}

/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export type TopicRuleDestination_Properties = {
  Arn?: string;
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
  StatusReason?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcproperties}
   */
  VpcProperties?: VpcDestinationProperties;
};

export type TopicRuleDestinationStatus = 'ENABLED' | 'IN_PROGRESS' | 'DISABLED';

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html}
 */
export type HttpUrlDestinationSummary = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html#cfn-iot-topicruledestination-httpurldestinationsummary-confirmationurl}
   */
  ConfirmationUrl?: string;
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
  SubnetIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-securitygroups}
   */
  SecurityGroups?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-vpcid}
   */
  VpcId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-rolearn}
   */
  RoleArn?: string;
};
