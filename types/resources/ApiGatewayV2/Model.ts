// CloudFormation Resource AWS::ApiGatewayV2::Model

import { CfnResource, Resolvable } from '../../base';

export type Model_Type = 'AWS::ApiGatewayV2::Model';
export const Model_Type = 'AWS::ApiGatewayV2::Model';

/**
 * Resource Type definition for AWS::ApiGatewayV2::Model {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html}
 */
export default function Model(props: Model_Properties) {
  return new CfnResource<Model_Properties>(Model_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::Model {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html}
 */
export type Model_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-contenttype}
   */
  ContentType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-schema}
   */
  Schema: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-apiid}
   */
  ApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-name}
   */
  Name: Resolvable<string>;
};
