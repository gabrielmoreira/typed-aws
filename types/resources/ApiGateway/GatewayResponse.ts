// CloudFormation Resource AWS::ApiGateway::GatewayResponse

import { CfnResource } from '../../base';

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
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-restapiid}
   */
  RestApiId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetype}
   */
  ResponseType: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-statuscode}
   */
  StatusCode?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responseparameters}
   */
  ResponseParameters?: {
    [k: string]: string;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetemplates}
   */
  ResponseTemplates?: {
    [k: string]: string;
  };
};
