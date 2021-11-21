// CloudFormation Resource AWS::ServiceCatalogAppRegistry::AttributeGroup

import { CFResource } from '../../base';

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
  return new CFResource<AttributeGroup_Type, AttributeGroup_Properties>(
    AttributeGroup_Type,
    props
  );
}

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html}
 */
export type AttributeGroup_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-description}
   */
  Description?: string;
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
  [k: string]: string;
};
