// CloudFormation Resource AWS::ServiceCatalogAppRegistry::Application

import { CfnResource, Resolvable } from '../../base';

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
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html#cfn-servicecatalogappregistry-application-tags}
   */
  Tags?: Tags;
};

export type Tags = {
  [k: string]: Resolvable<string>;
};
