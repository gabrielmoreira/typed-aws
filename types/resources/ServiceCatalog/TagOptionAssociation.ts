// CloudFormation Resource AWS::ServiceCatalog::TagOptionAssociation

import { CfnResource, Resolvable } from '../../base';

export type TagOptionAssociation_Type =
  'AWS::ServiceCatalog::TagOptionAssociation';
export const TagOptionAssociation_Type =
  'AWS::ServiceCatalog::TagOptionAssociation';

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html}
 */
export default function TagOptionAssociation(
  props: TagOptionAssociation_Properties
) {
  return new CfnResource<TagOptionAssociation_Properties>(
    TagOptionAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html}
 */
export type TagOptionAssociation_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#cfn-servicecatalog-tagoptionassociation-tagoptionid}
   */
  TagOptionId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#cfn-servicecatalog-tagoptionassociation-resourceid}
   */
  ResourceId: Resolvable<string>;
};
