// CloudFormation Resource AWS::MemoryDB::ACL

import { CFResource } from '../../base';

export type ACL_Type = 'AWS::MemoryDB::ACL';
export const ACL_Type = 'AWS::MemoryDB::ACL';

/**
 * Resource Type definition for AWS::MemoryDB::ACL {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html}
 */
export default function ACL(props: ACL_Properties) {
  return new CFResource<ACL_Type, ACL_Properties>(ACL_Type, props);
}

/**
 * Resource Type definition for AWS::MemoryDB::ACL {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html}
 */
export type ACL_Properties = {
  Status?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-aclname}
   */
  ACLName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-usernames}
   */
  UserNames?: string[];
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
