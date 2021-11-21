// CloudFormation Resource AWS::ServiceCatalog::LaunchRoleConstraint

import { CfnResource } from '../../base';

export type LaunchRoleConstraint_Type =
  'AWS::ServiceCatalog::LaunchRoleConstraint';
export const LaunchRoleConstraint_Type =
  'AWS::ServiceCatalog::LaunchRoleConstraint';

/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html}
 */
export default function LaunchRoleConstraint(
  props: LaunchRoleConstraint_Properties
) {
  return new CfnResource<LaunchRoleConstraint_Properties>(
    LaunchRoleConstraint_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html}
 */
export type LaunchRoleConstraint_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-localrolename}
   */
  LocalRoleName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-portfolioid}
   */
  PortfolioId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-productid}
   */
  ProductId: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-rolearn}
   */
  RoleArn?: string;
};
