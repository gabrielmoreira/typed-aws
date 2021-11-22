// CloudFormation Resource AWS::ApiGateway::RequestValidator

import { CfnResource, Resolvable } from '../../base';

export type RequestValidator_Type = 'AWS::ApiGateway::RequestValidator';
export const RequestValidator_Type = 'AWS::ApiGateway::RequestValidator';

/**
 * Resource Type definition for AWS::ApiGateway::RequestValidator {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html}
 */
export default function RequestValidator(props: RequestValidator_Properties) {
  return new CfnResource<RequestValidator_Properties>(
    RequestValidator_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGateway::RequestValidator {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html}
 */
export type RequestValidator_Properties = {
  RequestValidatorId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-restapiid}
   */
  RestApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-validaterequestbody}
   */
  ValidateRequestBody?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-validaterequestparameters}
   */
  ValidateRequestParameters?: Resolvable<boolean>;
};
