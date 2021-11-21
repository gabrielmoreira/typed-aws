// CloudFormation Resource AWS::Redshift::EventSubscription

import { CfnResource } from '../../base';

export type EventSubscription_Type = 'AWS::Redshift::EventSubscription';
export const EventSubscription_Type = 'AWS::Redshift::EventSubscription';

/**
 * The `AWS::Redshift::EventSubscription` resource creates an Amazon
 * Redshift Event Subscription. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html}
 */
export default function EventSubscription(props: EventSubscription_Properties) {
  return new CfnResource<EventSubscription_Properties>(
    EventSubscription_Type,
    props
  );
}

/**
 * The `AWS::Redshift::EventSubscription` resource creates an Amazon
 * Redshift Event Subscription. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html}
 */
export type EventSubscription_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-subscriptionname}
   */
  SubscriptionName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-snstopicarn}
   */
  SnsTopicArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-sourcetype}
   */
  SourceType?:
    | 'cluster'
    | 'cluster-parameter-group'
    | 'cluster-security-group'
    | 'cluster-snapshot'
    | 'scheduled-action';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-sourceids}
   */
  SourceIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-eventcategories}
   */
  EventCategories?: (
    | 'configuration'
    | 'management'
    | 'monitoring'
    | 'security'
    | 'pending'
  )[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-severity}
   */
  Severity?: 'ERROR' | 'INFO';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-enabled}
   */
  Enabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-tags}
   */
  Tags?: Tag[];
  CustomerAwsId?: string;
  CustSubscriptionId?: string;
  Status?: 'active' | 'no-permission' | 'topic-not-exist';
  SubscriptionCreationTime?: string;
  SourceIdsList?: string[];
  EventCategoriesList?: string[];
};

export type Tag = {
  Key: string;
  Value: string;
};
