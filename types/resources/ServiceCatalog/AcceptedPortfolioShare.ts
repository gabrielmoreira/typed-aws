// CloudFormation Resource AWS::ServiceCatalog::AcceptedPortfolioShare

import { CFResource } from '../../base';

export type AcceptedPortfolioShare_Type =
  'AWS::ServiceCatalog::AcceptedPortfolioShare';
export const AcceptedPortfolioShare_Type =
  'AWS::ServiceCatalog::AcceptedPortfolioShare';

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::AcceptedPortfolioShare {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html}
 */
export default function AcceptedPortfolioShare(
  props: AcceptedPortfolioShare_Properties
) {
  return new CFResource<
    AcceptedPortfolioShare_Type,
    AcceptedPortfolioShare_Properties
  >(AcceptedPortfolioShare_Type, props);
}

/**
 * Resource Type definition for
 * AWS::ServiceCatalog::AcceptedPortfolioShare {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html}
 */
export type AcceptedPortfolioShare_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html#cfn-servicecatalog-acceptedportfolioshare-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html#cfn-servicecatalog-acceptedportfolioshare-portfolioid}
   */
  PortfolioId: string;
};
