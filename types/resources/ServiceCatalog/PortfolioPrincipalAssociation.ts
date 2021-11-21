// CloudFormation Resource AWS::ServiceCatalog::PortfolioPrincipalAssociation

import { CFResource } from '../../base';

export type PortfolioPrincipalAssociation_Type =
  'AWS::ServiceCatalog::PortfolioPrincipalAssociation';
export const PortfolioPrincipalAssociation_Type =
  'AWS::ServiceCatalog::PortfolioPrincipalAssociation';

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::PortfolioPrincipalAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html}
 */
export default function PortfolioPrincipalAssociation(
  props: PortfolioPrincipalAssociation_Properties
) {
  return new CFResource<
    PortfolioPrincipalAssociation_Type,
    PortfolioPrincipalAssociation_Properties
  >(PortfolioPrincipalAssociation_Type, props);
}

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::PortfolioPrincipalAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html}
 */
export type PortfolioPrincipalAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-principalarn}
   */
  PrincipalARN: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-portfolioid}
   */
  PortfolioId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-principaltype}
   */
  PrincipalType: string;
};
