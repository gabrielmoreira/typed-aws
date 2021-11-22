// CloudFormation Resource AWS::ApiGatewayV2::RouteResponse

import { CfnResource, Resolvable } from '../../base';

export type RouteResponse_Type = 'AWS::ApiGatewayV2::RouteResponse';
export const RouteResponse_Type = 'AWS::ApiGatewayV2::RouteResponse';

/**
 * Resource Type definition for AWS::ApiGatewayV2::RouteResponse {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html}
 */
export default function RouteResponse(props: RouteResponse_Properties) {
  return new CfnResource<RouteResponse_Properties>(RouteResponse_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::RouteResponse {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html}
 */
export type RouteResponse_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-routeresponsekey}
   */
  RouteResponseKey: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-responseparameters}
   */
  ResponseParameters?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-routeid}
   */
  RouteId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-modelselectionexpression}
   */
  ModelSelectionExpression?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-apiid}
   */
  ApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-responsemodels}
   */
  ResponseModels?: {
    [k: string]: unknown;
  };
};
