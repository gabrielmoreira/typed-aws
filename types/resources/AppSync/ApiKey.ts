// CloudFormation Resource AWS::AppSync::ApiKey

import { CFResource } from '../../base';

export type ApiKey_Type = 'AWS::AppSync::ApiKey';
export const ApiKey_Type = 'AWS::AppSync::ApiKey';

/**
 * Resource Type definition for AWS::AppSync::ApiKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html}
 */
export default function ApiKey(props: ApiKey_Properties) {
  return new CFResource<ApiKey_Type, ApiKey_Properties>(ApiKey_Type, props);
}

/**
 * Resource Type definition for AWS::AppSync::ApiKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html}
 */
export type ApiKey_Properties = {
  ApiKey?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-apikeyid}
   */
  ApiKeyId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-expires}
   */
  Expires?: number;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-apiid}
   */
  ApiId: string;
};
