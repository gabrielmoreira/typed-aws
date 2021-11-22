// CloudFormation Resource AWS::AppSync::ApiKey

import { CfnResource, Resolvable } from '../../base';

export type ApiKey_Type = 'AWS::AppSync::ApiKey';
export const ApiKey_Type = 'AWS::AppSync::ApiKey';

/**
 * Resource Type definition for AWS::AppSync::ApiKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html}
 */
export default function ApiKey(props: ApiKey_Properties) {
  return new CfnResource<ApiKey_Properties>(ApiKey_Type, props);
}

/**
 * Resource Type definition for AWS::AppSync::ApiKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html}
 */
export type ApiKey_Properties = {
  ApiKey?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-apikeyid}
   */
  ApiKeyId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-expires}
   */
  Expires?: Resolvable<number>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-apiid}
   */
  ApiId: Resolvable<string>;
};
