// CloudFormation Resource AWS::ServiceCatalog::PortfolioProductAssociation

import { CFResource } from '../../base';

export type PortfolioProductAssociation_Type =
  'AWS::ServiceCatalog::PortfolioProductAssociation';
export const PortfolioProductAssociation_Type =
  'AWS::ServiceCatalog::PortfolioProductAssociation';

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::PortfolioProductAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html}
 */
export default function PortfolioProductAssociation(
  props: PortfolioProductAssociation_Properties
) {
  return new CFResource<
    PortfolioProductAssociation_Type,
    PortfolioProductAssociation_Properties
  >(PortfolioProductAssociation_Type, props);
}

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::PortfolioProductAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html}
 */
export type PortfolioProductAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-sourceportfolioid}
   */
  SourcePortfolioId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-portfolioid}
   */
  PortfolioId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-productid}
   */
  ProductId: string;
};
