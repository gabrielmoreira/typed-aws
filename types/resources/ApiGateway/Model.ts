// CloudFormation Resource AWS::ApiGateway::Model

import { CFResource } from '../../base';

export type Model_Type = 'AWS::ApiGateway::Model';
export const Model_Type = 'AWS::ApiGateway::Model';

/**
 * Resource Type definition for AWS::ApiGateway::Model {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html}
 */
export default function Model(props: Model_Properties) {
  return new CFResource<Model_Type, Model_Properties>(Model_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGateway::Model {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html}
 */
export type Model_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-contenttype}
   */
  ContentType?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-restapiid}
   */
  RestApiId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-schema}
   */
  Schema?:
    | {
        [k: string]: unknown;
      }
    | string;
};