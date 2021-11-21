// CloudFormation Resource AWS::Events::ApiDestination

import { CFResource } from '../../base';

export type ApiDestination_Type = 'AWS::Events::ApiDestination';
export const ApiDestination_Type = 'AWS::Events::ApiDestination';

/**
 * Resource Type definition for AWS::Events::ApiDestination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html}
 */
export default function ApiDestination(props: ApiDestination_Properties) {
  return new CFResource<ApiDestination_Type, ApiDestination_Properties>(
    ApiDestination_Type,
    props
  );
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
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-connectionarn}
   */
  ConnectionArn: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationratelimitpersecond}
   */
  InvocationRateLimitPerSecond?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationendpoint}
   */
  InvocationEndpoint: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-httpmethod}
   */
  HttpMethod: 'GET' | 'HEAD' | 'POST' | 'OPTIONS' | 'PUT' | 'DELETE' | 'PATCH';
};
