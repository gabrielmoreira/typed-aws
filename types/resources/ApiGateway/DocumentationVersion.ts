// CloudFormation Resource AWS::ApiGateway::DocumentationVersion

import { CFResource } from '../../base';

export type DocumentationVersion_Type = 'AWS::ApiGateway::DocumentationVersion';
export const DocumentationVersion_Type =
  'AWS::ApiGateway::DocumentationVersion';

/**
 * A snapshot of the documentation of an API. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html}
 */
export default function DocumentationVersion(
  props: DocumentationVersion_Properties
) {
  return new CFResource<
    DocumentationVersion_Type,
    DocumentationVersion_Properties
  >(DocumentationVersion_Type, props);
}

/**
 * A snapshot of the documentation of an API. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html}
 */
export type DocumentationVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html#cfn-apigateway-documentationversion-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html#cfn-apigateway-documentationversion-documentationversion}
   */
  DocumentationVersion: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html#cfn-apigateway-documentationversion-restapiid}
   */
  RestApiId: string;
};