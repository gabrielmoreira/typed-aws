// CloudFormation Resource AWS::ServiceCatalog::ServiceActionAssociation

import { CfnResource, Resolvable } from '../../base';

export type ServiceActionAssociation_Type =
  'AWS::ServiceCatalog::ServiceActionAssociation';
export const ServiceActionAssociation_Type =
  'AWS::ServiceCatalog::ServiceActionAssociation';

/**
 * Resource Schema for AWS::ServiceCatalog::ServiceActionAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html}
 */
export default function ServiceActionAssociation(
  props: ServiceActionAssociation_Properties
) {
  return new CfnResource<ServiceActionAssociation_Properties>(
    ServiceActionAssociation_Type,
    props
  );
}

/**
 * Resource Schema for AWS::ServiceCatalog::ServiceActionAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html}
 */
export type ServiceActionAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-productid}
   */
  ProductId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-provisioningartifactid}
   */
  ProvisioningArtifactId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-serviceactionid}
   */
  ServiceActionId: Resolvable<string>;
};
