// CloudFormation Resource AWS::ApiGatewayV2::RouteResponse

import { CFResource } from '../../base';

export type RouteResponse_Type = 'AWS::ApiGatewayV2::RouteResponse';
export const RouteResponse_Type = 'AWS::ApiGatewayV2::RouteResponse';

/**
 * Resource Type definition for AWS::ApiGatewayV2::RouteResponse {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html}
 */
export default function RouteResponse(props: RouteResponse_Properties) {
  return new CFResource<RouteResponse_Type, RouteResponse_Properties>(
    RouteResponse_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::RouteResponse {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html}
 */
export type RouteResponse_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-routeresponsekey}
   */
  RouteResponseKey: string;
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
  RouteId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-modelselectionexpression}
   */
  ModelSelectionExpression?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-apiid}
   */
  ApiId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-responsemodels}
   */
  ResponseModels?: {
    [k: string]: unknown;
  };
};
