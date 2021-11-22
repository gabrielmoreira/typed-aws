// CloudFormation Resource AWS::ApiGatewayV2::ApiMapping

import { CfnResource, Resolvable } from '../../base';

export type ApiMapping_Type = 'AWS::ApiGatewayV2::ApiMapping';
export const ApiMapping_Type = 'AWS::ApiGatewayV2::ApiMapping';

/**
 * Resource Type definition for AWS::ApiGatewayV2::ApiMapping {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html}
 */
export default function ApiMapping(props: ApiMapping_Properties) {
  return new CfnResource<ApiMapping_Properties>(ApiMapping_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::ApiMapping {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html}
 */
export type ApiMapping_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-domainname}
   */
  DomainName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-stage}
   */
  Stage: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-apimappingkey}
   */
  ApiMappingKey?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-apiid}
   */
  ApiId: Resolvable<string>;
};
