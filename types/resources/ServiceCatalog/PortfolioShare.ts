// CloudFormation Resource AWS::ServiceCatalog::PortfolioShare

import { CFResource } from '../../base';

export type PortfolioShare_Type = 'AWS::ServiceCatalog::PortfolioShare';
export const PortfolioShare_Type = 'AWS::ServiceCatalog::PortfolioShare';

/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export default function PortfolioShare(props: PortfolioShare_Properties) {
  return new CFResource<PortfolioShare_Type, PortfolioShare_Properties>(
    PortfolioShare_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export type PortfolioShare_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-portfolioid}
   */
  PortfolioId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-accountid}
   */
  AccountId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-sharetagoptions}
   */
  ShareTagOptions?: boolean;
  Id?: string;
};
