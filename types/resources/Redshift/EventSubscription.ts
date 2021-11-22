// CloudFormation Resource AWS::Redshift::EventSubscription

import { CfnResource, Resolvable } from '../../base';

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
  SubscriptionName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-snstopicarn}
   */
  SnsTopicArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-sourcetype}
   */
  SourceType?: Resolvable<
    | 'cluster'
    | 'cluster-parameter-group'
    | 'cluster-security-group'
    | 'cluster-snapshot'
    | 'scheduled-action'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-sourceids}
   */
  SourceIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-eventcategories}
   */
  EventCategories?: Resolvable<
    'configuration' | 'management' | 'monitoring' | 'security' | 'pending'
  >[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-severity}
   */
  Severity?: Resolvable<'ERROR' | 'INFO'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-enabled}
   */
  Enabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-tags}
   */
  Tags?: Tag[];
  CustomerAwsId?: Resolvable<string>;
  CustSubscriptionId?: Resolvable<string>;
  Status?: Resolvable<'active' | 'no-permission' | 'topic-not-exist'>;
  SubscriptionCreationTime?: Resolvable<string>;
  SourceIdsList?: Resolvable<string>[];
  EventCategoriesList?: Resolvable<string>[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
