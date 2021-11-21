// CloudFormation Resource AWS::ServiceCatalog::Portfolio

import { CfnResource } from '../../base';

export type Portfolio_Type = 'AWS::ServiceCatalog::Portfolio';
export const Portfolio_Type = 'AWS::ServiceCatalog::Portfolio';

/**
 * Resource Type definition for AWS::ServiceCatalog::Portfolio {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html}
 */
export default function Portfolio(props: Portfolio_Properties) {
  return new CfnResource<Portfolio_Properties>(Portfolio_Type, props);
}

/**
 * Resource Type definition for AWS::ServiceCatalog::Portfolio {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html}
 */
export type Portfolio_Properties = {
  Id?: string;
  PortfolioName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-providername}
   */
  ProviderName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-displayname}
   */
  DisplayName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-acceptlanguage}
   */
  AcceptLanguage?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
