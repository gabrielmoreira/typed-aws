// CloudFormation Resource AWS::ServiceCatalogAppRegistry::AttributeGroup

import { CfnResource, Resolvable } from '../../base';

export type AttributeGroup_Type =
  'AWS::ServiceCatalogAppRegistry::AttributeGroup';
export const AttributeGroup_Type =
  'AWS::ServiceCatalogAppRegistry::AttributeGroup';

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html}
 */
export default function AttributeGroup(props: AttributeGroup_Properties) {
  return new CfnResource<AttributeGroup_Properties>(AttributeGroup_Type, props);
}

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html}
 */
export type AttributeGroup_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-attributes}
   */
  Attributes: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-tags}
   */
  Tags?: Tags;
};

export type Tags = {
  [k: string]: Resolvable<string>;
};
