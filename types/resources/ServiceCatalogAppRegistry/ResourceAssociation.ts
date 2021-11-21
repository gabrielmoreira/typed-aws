// CloudFormation Resource AWS::ServiceCatalogAppRegistry::ResourceAssociation

import { CfnResource } from '../../base';

export type ResourceAssociation_Type =
  'AWS::ServiceCatalogAppRegistry::ResourceAssociation';
export const ResourceAssociation_Type =
  'AWS::ServiceCatalogAppRegistry::ResourceAssociation';

/**
 * Resource Schema for
 * AWS::ServiceCatalogAppRegistry::ResourceAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html}
 */
export default function ResourceAssociation(
  props: ResourceAssociation_Properties
) {
  return new CfnResource<ResourceAssociation_Properties>(
    ResourceAssociation_Type,
    props
  );
}

/**
 * Resource Schema for
 * AWS::ServiceCatalogAppRegistry::ResourceAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html}
 */
export type ResourceAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-application}
   */
  Application: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-resource}
   */
  Resource: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-resourcetype}
   */
  ResourceType: 'CFN_STACK';
  ApplicationArn?: string;
  ResourceArn?: string;
  Id?: string;
};
