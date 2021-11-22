// CloudFormation Resource AWS::ServiceCatalog::PortfolioShare

import { CfnResource, Resolvable } from '../../base';

export type PortfolioShare_Type = 'AWS::ServiceCatalog::PortfolioShare';
export const PortfolioShare_Type = 'AWS::ServiceCatalog::PortfolioShare';

/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export default function PortfolioShare(props: PortfolioShare_Properties) {
  return new CfnResource<PortfolioShare_Properties>(PortfolioShare_Type, props);
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
  AcceptLanguage?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-portfolioid}
   */
  PortfolioId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-accountid}
   */
  AccountId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-sharetagoptions}
   */
  ShareTagOptions?: Resolvable<boolean>;
  Id?: Resolvable<string>;
};
