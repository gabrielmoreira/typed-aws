// CloudFormation Resource AWS::ApiGatewayV2::IntegrationResponse

import { CfnResource, Resolvable } from '../../base';

export type IntegrationResponse_Type = 'AWS::ApiGatewayV2::IntegrationResponse';
export const IntegrationResponse_Type =
  'AWS::ApiGatewayV2::IntegrationResponse';

/**
 * Resource Type definition for AWS::ApiGatewayV2::IntegrationResponse
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html}
 */
export default function IntegrationResponse(
  props: IntegrationResponse_Properties
) {
  return new CfnResource<IntegrationResponse_Properties>(
    IntegrationResponse_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::IntegrationResponse
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html}
 */
export type IntegrationResponse_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-responsetemplates}
   */
  ResponseTemplates?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-templateselectionexpression}
   */
  TemplateSelectionExpression?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-responseparameters}
   */
  ResponseParameters?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-contenthandlingstrategy}
   */
  ContentHandlingStrategy?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-integrationid}
   */
  IntegrationId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-integrationresponsekey}
   */
  IntegrationResponseKey: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-apiid}
   */
  ApiId: Resolvable<string>;
};
