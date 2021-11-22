// CloudFormation Resource AWS::RDS::EventSubscription

import { CfnResource, Resolvable } from '../../base';

export type EventSubscription_Type = 'AWS::RDS::EventSubscription';
export const EventSubscription_Type = 'AWS::RDS::EventSubscription';

/**
 * Resource Type definition for AWS::RDS::EventSubscription {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html}
 */
export default function EventSubscription(props: EventSubscription_Properties) {
  return new CfnResource<EventSubscription_Properties>(
    EventSubscription_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::RDS::EventSubscription {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html}
 */
export type EventSubscription_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-enabled}
   */
  Enabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-eventcategories}
   */
  EventCategories?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-snstopicarn}
   */
  SnsTopicArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-sourceids}
   */
  SourceIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-sourcetype}
   */
  SourceType?: Resolvable<string>;
};
