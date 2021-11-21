// CloudFormation Resource AWS::ElastiCache::UserGroup

import { CFResource } from '../../base';

export type UserGroup_Type = 'AWS::ElastiCache::UserGroup';
export const UserGroup_Type = 'AWS::ElastiCache::UserGroup';

/**
 * Resource Type definition for AWS::ElastiCache::UserGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html}
 */
export default function UserGroup(props: UserGroup_Properties) {
  return new CFResource<UserGroup_Type, UserGroup_Properties>(
    UserGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ElastiCache::UserGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html}
 */
export type UserGroup_Properties = {
  Status?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-usergroupid}
   */
  UserGroupId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-engine}
   */
  Engine: 'redis';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-userids}
   */
  UserIds?: string[];
  Arn?: string;
};
