// CloudFormation Resource AWS::ServiceCatalog::ServiceActionAssociation

import { CFResource } from '../../base';

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
  return new CFResource<
    ServiceActionAssociation_Type,
    ServiceActionAssociation_Properties
  >(ServiceActionAssociation_Type, props);
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
  ProductId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-provisioningartifactid}
   */
  ProvisioningArtifactId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-serviceactionid}
   */
  ServiceActionId: string;
};
