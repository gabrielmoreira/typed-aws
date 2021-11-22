// CloudFormation Resource AWS::ApiGateway::Resource

import { CfnResource, Resolvable } from '../../base';

export type Resource_Type = 'AWS::ApiGateway::Resource';
export const Resource_Type = 'AWS::ApiGateway::Resource';

/**
 * Resource Type definition for AWS::ApiGateway::Resource {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html}
 */
export default function Resource(props: Resource_Properties) {
  return new CfnResource<Resource_Properties>(Resource_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGateway::Resource {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html}
 */
export type Resource_Properties = {
  ResourceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#cfn-apigateway-resource-restapiid}
   */
  RestApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#cfn-apigateway-resource-parentid}
   */
  ParentId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#cfn-apigateway-resource-pathpart}
   */
  PathPart: Resolvable<string>;
};
