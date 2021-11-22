// CloudFormation Resource AWS::ApiGateway::GatewayResponse

import { CfnResource, Resolvable } from '../../base';

export type GatewayResponse_Type = 'AWS::ApiGateway::GatewayResponse';
export const GatewayResponse_Type = 'AWS::ApiGateway::GatewayResponse';

/**
 * Resource Type definition for AWS::ApiGateway::GatewayResponse {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html}
 */
export default function GatewayResponse(props: GatewayResponse_Properties) {
  return new CfnResource<GatewayResponse_Properties>(
    GatewayResponse_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGateway::GatewayResponse {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html}
 */
export type GatewayResponse_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-restapiid}
   */
  RestApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetype}
   */
  ResponseType: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-statuscode}
   */
  StatusCode?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responseparameters}
   */
  ResponseParameters?: {
    [k: string]: Resolvable<string>;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetemplates}
   */
  ResponseTemplates?: {
    [k: string]: Resolvable<string>;
  };
};
