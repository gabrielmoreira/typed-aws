// CloudFormation Resource AWS::ElastiCache::User

import { CFResource } from '../../base';

export type User_Type = 'AWS::ElastiCache::User';
export const User_Type = 'AWS::ElastiCache::User';

/**
 * Resource Type definition for AWS::ElastiCache::User {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html}
 */
export default function User(props: User_Properties) {
  return new CFResource<User_Type, User_Properties>(User_Type, props);
}

/**
 * Resource Type definition for AWS::ElastiCache::User {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html}
 */
export type User_Properties = {
  Status?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-userid}
   */
  UserId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-username}
   */
  UserName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-engine}
   */
  Engine: 'redis';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-accessstring}
   */
  AccessString?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-nopasswordrequired}
   */
  NoPasswordRequired?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-passwords}
   */
  Passwords?: string[];
  Arn?: string;
};
