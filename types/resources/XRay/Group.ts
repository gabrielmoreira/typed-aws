// CloudFormation Resource AWS::XRay::Group

import { CfnResource, Resolvable } from '../../base';

export type Group_Type = 'AWS::XRay::Group';
export const Group_Type = 'AWS::XRay::Group';

/**
 * This schema provides construct and validation rules for AWS-XRay Group
 * resource parameters. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html}
 */
export default function Group(props: Group_Properties) {
  return new CfnResource<Group_Properties>(Group_Type, props);
}

/**
 * This schema provides construct and validation rules for AWS-XRay Group
 * resource parameters. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html}
 */
export type Group_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-filterexpression}
   */
  FilterExpression?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-groupname}
   */
  GroupName?: Resolvable<string>;
  GroupARN?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-insightsconfiguration}
   */
  InsightsConfiguration?: InsightsConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-tags}
   */
  Tags?: Tags;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html}
 */
export type InsightsConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html#cfn-xray-group-insightsconfiguration-insightsenabled}
   */
  InsightsEnabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html#cfn-xray-group-insightsconfiguration-notificationsenabled}
   */
  NotificationsEnabled?: Resolvable<boolean>;
};

export type Tags = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
}[];
