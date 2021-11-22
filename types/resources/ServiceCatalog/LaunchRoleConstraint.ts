// CloudFormation Resource AWS::ServiceCatalog::LaunchRoleConstraint

import { CfnResource, Resolvable } from '../../base';

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
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-localrolename}
   */
  LocalRoleName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-acceptlanguage}
   */
  AcceptLanguage?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-portfolioid}
   */
  PortfolioId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-productid}
   */
  ProductId: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-rolearn}
   */
  RoleArn?: Resolvable<string>;
};
