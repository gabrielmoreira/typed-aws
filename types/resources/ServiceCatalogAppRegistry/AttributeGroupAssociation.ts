// CloudFormation Resource AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation

import { CfnResource, Resolvable } from '../../base';

export type AttributeGroupAssociation_Type =
  'AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation';
export const AttributeGroupAssociation_Type =
  'AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation';

/**
 * Resource Schema for
 * AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html}
 */
export default function AttributeGroupAssociation(
  props: AttributeGroupAssociation_Properties
) {
  return new CfnResource<AttributeGroupAssociation_Properties>(
    AttributeGroupAssociation_Type,
    props
  );
}

/**
 * Resource Schema for
 * AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html}
 */
export type AttributeGroupAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html#cfn-servicecatalogappregistry-attributegroupassociation-application}
   */
  Application: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html#cfn-servicecatalogappregistry-attributegroupassociation-attributegroup}
   */
  AttributeGroup: Resolvable<string>;
  ApplicationArn?: Resolvable<string>;
  AttributeGroupArn?: Resolvable<string>;
  Id?: Resolvable<string>;
};
