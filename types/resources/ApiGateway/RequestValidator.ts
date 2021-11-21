// CloudFormation Resource AWS::ApiGateway::RequestValidator

import { CFResource } from '../../base';

export type RequestValidator_Type = 'AWS::ApiGateway::RequestValidator';
export const RequestValidator_Type = 'AWS::ApiGateway::RequestValidator';

/**
 * Resource Type definition for AWS::ApiGateway::RequestValidator {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html}
 */
export default function RequestValidator(props: RequestValidator_Properties) {
  return new CFResource<RequestValidator_Type, RequestValidator_Properties>(
    RequestValidator_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGateway::RequestValidator {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html}
 */
export type RequestValidator_Properties = {
  RequestValidatorId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-restapiid}
   */
  RestApiId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-validaterequestbody}
   */
  ValidateRequestBody?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-validaterequestparameters}
   */
  ValidateRequestParameters?: boolean;
};
