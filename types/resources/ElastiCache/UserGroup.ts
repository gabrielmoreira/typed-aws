// CloudFormation Resource AWS::ElastiCache::UserGroup

import { CfnResource, Resolvable } from '../../base';

export type UserGroup_Type = 'AWS::ElastiCache::UserGroup';
export const UserGroup_Type = 'AWS::ElastiCache::UserGroup';

/**
 * Resource Type definition for AWS::ElastiCache::UserGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html}
 */
export default function UserGroup(props: UserGroup_Properties) {
  return new CfnResource<UserGroup_Properties>(UserGroup_Type, props);
}

/**
 * Resource Type definition for AWS::ElastiCache::UserGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html}
 */
export type UserGroup_Properties = {
  Status?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-usergroupid}
   */
  UserGroupId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-engine}
   */
  Engine: Resolvable<'redis'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-userids}
   */
  UserIds?: Resolvable<string>[];
  Arn?: Resolvable<string>;
};
