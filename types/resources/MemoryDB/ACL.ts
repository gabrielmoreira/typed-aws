// CloudFormation Resource AWS::MemoryDB::ACL

import { CfnResource, Resolvable } from '../../base';

export type ACL_Type = 'AWS::MemoryDB::ACL';
export const ACL_Type = 'AWS::MemoryDB::ACL';

/**
 * Resource Type definition for AWS::MemoryDB::ACL {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html}
 */
export default function ACL(props: ACL_Properties) {
  return new CfnResource<ACL_Properties>(ACL_Type, props);
}

/**
 * Resource Type definition for AWS::MemoryDB::ACL {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html}
 */
export type ACL_Properties = {
  Status?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-aclname}
   */
  ACLName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-usernames}
   */
  UserNames?: Resolvable<string>[];
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
