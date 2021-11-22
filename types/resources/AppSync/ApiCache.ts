// CloudFormation Resource AWS::AppSync::ApiCache

import { CfnResource, Resolvable } from '../../base';

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
  Type: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-transitencryptionenabled}
   */
  TransitEncryptionEnabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-atrestencryptionenabled}
   */
  AtRestEncryptionEnabled?: Resolvable<boolean>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-apiid}
   */
  ApiId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-apicachingbehavior}
   */
  ApiCachingBehavior: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-ttl}
   */
  Ttl: Resolvable<number>;
};
