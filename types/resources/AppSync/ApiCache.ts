// CloudFormation Resource AWS::AppSync::ApiCache

import { CfnResource } from '../../base';

export type ApiCache_Type = 'AWS::AppSync::ApiCache';
export const ApiCache_Type = 'AWS::AppSync::ApiCache';

/**
 * Resource Type definition for AWS::AppSync::ApiCache {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html}
 */
export default function ApiCache(props: ApiCache_Properties) {
  return new CfnResource<ApiCache_Properties>(ApiCache_Type, props);
}

/**
 * Resource Type definition for AWS::AppSync::ApiCache {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html}
 */
export type ApiCache_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-type}
   */
  Type: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-transitencryptionenabled}
   */
  TransitEncryptionEnabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-atrestencryptionenabled}
   */
  AtRestEncryptionEnabled?: boolean;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-apiid}
   */
  ApiId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-apicachingbehavior}
   */
  ApiCachingBehavior: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-ttl}
   */
  Ttl: number;
};
