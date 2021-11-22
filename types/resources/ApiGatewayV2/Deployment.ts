// CloudFormation Resource AWS::ApiGatewayV2::Deployment

import { CfnResource, Resolvable } from '../../base';

export type Deployment_Type = 'AWS::ApiGatewayV2::Deployment';
export const Deployment_Type = 'AWS::ApiGatewayV2::Deployment';

/**
 * Resource Type definition for AWS::ApiGatewayV2::Deployment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html}
 */
export default function Deployment(props: Deployment_Properties) {
  return new CfnResource<Deployment_Properties>(Deployment_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::Deployment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html}
 */
export type Deployment_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#cfn-apigatewayv2-deployment-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#cfn-apigatewayv2-deployment-stagename}
   */
  StageName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#cfn-apigatewayv2-deployment-apiid}
   */
  ApiId: Resolvable<string>;
};
