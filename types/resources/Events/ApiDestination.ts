// CloudFormation Resource AWS::Events::ApiDestination

import { CfnResource, Resolvable } from '../../base';

export type ApiDestination_Type = 'AWS::Events::ApiDestination';
export const ApiDestination_Type = 'AWS::Events::ApiDestination';

/**
 * Resource Type definition for AWS::Events::ApiDestination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html}
 */
export default function ApiDestination(props: ApiDestination_Properties) {
  return new CfnResource<ApiDestination_Properties>(ApiDestination_Type, props);
}

/**
 * Resource Type definition for AWS::Events::ApiDestination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html}
 */
export type ApiDestination_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-connectionarn}
   */
  ConnectionArn: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationratelimitpersecond}
   */
  InvocationRateLimitPerSecond?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationendpoint}
   */
  InvocationEndpoint: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-httpmethod}
   */
  HttpMethod: Resolvable<
    'GET' | 'HEAD' | 'POST' | 'OPTIONS' | 'PUT' | 'DELETE' | 'PATCH'
  >;
};
