// CloudFormation Resource AWS::ServiceCatalog::LaunchNotificationConstraint

import { CFResource } from '../../base';

export type LaunchNotificationConstraint_Type =
  'AWS::ServiceCatalog::LaunchNotificationConstraint';
export const LaunchNotificationConstraint_Type =
  'AWS::ServiceCatalog::LaunchNotificationConstraint';

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::LaunchNotificationConstraint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html}
 */
export default function LaunchNotificationConstraint(
  props: LaunchNotificationConstraint_Properties
) {
  return new CFResource<
    LaunchNotificationConstraint_Type,
    LaunchNotificationConstraint_Properties
  >(LaunchNotificationConstraint_Type, props);
}

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::LaunchNotificationConstraint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html}
 */
export type LaunchNotificationConstraint_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-notificationarns}
   */
  NotificationArns: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-portfolioid}
   */
  PortfolioId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-productid}
   */
  ProductId: string;
};
