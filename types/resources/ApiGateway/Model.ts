// CloudFormation Resource AWS::ApiGateway::Model

import { CfnResource, Resolvable } from '../../base';

export type Model_Type = 'AWS::ApiGateway::Model';
export const Model_Type = 'AWS::ApiGateway::Model';

/**
 * Resource Type definition for AWS::ApiGateway::Model {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html}
 */
export default function Model(props: Model_Properties) {
  return new CfnResource<Model_Properties>(Model_Type, props);
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
  ContentType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-restapiid}
   */
  RestApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-schema}
   */
  Schema?:
    | {
        [k: string]: unknown;
      }
    | Resolvable<string>;
};
