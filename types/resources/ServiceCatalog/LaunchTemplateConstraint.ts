// CloudFormation Resource AWS::ServiceCatalog::LaunchTemplateConstraint

import { CfnResource, Resolvable } from '../../base';

export type LaunchTemplateConstraint_Type =
  'AWS::ServiceCatalog::LaunchTemplateConstraint';
export const LaunchTemplateConstraint_Type =
  'AWS::ServiceCatalog::LaunchTemplateConstraint';

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::LaunchTemplateConstraint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html}
 */
export default function LaunchTemplateConstraint(
  props: LaunchTemplateConstraint_Properties
) {
  return new CfnResource<LaunchTemplateConstraint_Properties>(
    LaunchTemplateConstraint_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::LaunchTemplateConstraint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html}
 */
export type LaunchTemplateConstraint_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-acceptlanguage}
   */
  AcceptLanguage?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-portfolioid}
   */
  PortfolioId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-productid}
   */
  ProductId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-rules}
   */
  Rules: Resolvable<string>;
};
