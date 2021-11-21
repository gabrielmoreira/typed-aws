// CloudFormation Resource AWS::ServiceCatalogAppRegistry::Application

import { CfnResource } from '../../base';

export type Application_Type = 'AWS::ServiceCatalogAppRegistry::Application';
export const Application_Type = 'AWS::ServiceCatalogAppRegistry::Application';

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::Application {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html}
 */
export default function Application(props: Application_Properties) {
  return new CfnResource<Application_Properties>(Application_Type, props);
}

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::Application {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html}
 */
export type Application_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-tags}
   */
  Tags?: Tags;
};

export type Tags = {
  [k: string]: string;
};
