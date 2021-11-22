// CloudFormation Resource AWS::ServiceCatalog::ResourceUpdateConstraint

import { CfnResource, Resolvable } from '../../base';

export type ResourceUpdateConstraint_Type =
  'AWS::ServiceCatalog::ResourceUpdateConstraint';
export const ResourceUpdateConstraint_Type =
  'AWS::ServiceCatalog::ResourceUpdateConstraint';

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::ResourceUpdateConstraint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html}
 */
export default function ResourceUpdateConstraint(
  props: ResourceUpdateConstraint_Properties
) {
  return new CfnResource<ResourceUpdateConstraint_Properties>(
    ResourceUpdateConstraint_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::ResourceUpdateConstraint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html}
 */
export type ResourceUpdateConstraint_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-acceptlanguage}
   */
  AcceptLanguage?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-tagupdateonprovisionedproduct}
   */
  TagUpdateOnProvisionedProduct: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-portfolioid}
   */
  PortfolioId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-productid}
   */
  ProductId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-description}
   */
  Description?: Resolvable<string>;
  Id?: Resolvable<string>;
};
