// CloudFormation Resource AWS::IAM::AccessKey

import { CfnResource, Resolvable } from '../../base';

export type AccessKey_Type = 'AWS::IAM::AccessKey';
export const AccessKey_Type = 'AWS::IAM::AccessKey';

/**
 * Resource Type definition for AWS::IAM::AccessKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html}
 */
export default function AccessKey(props: AccessKey_Properties) {
  return new CfnResource<AccessKey_Properties>(AccessKey_Type, props);
}

/**
 * Resource Type definition for AWS::IAM::AccessKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html}
 */
export type AccessKey_Properties = {
  Id?: Resolvable<string>;
  SecretAccessKey?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html#cfn-iam-accesskey-serial}
   */
  Serial?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html#cfn-iam-accesskey-status}
   */
  Status?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html#cfn-iam-accesskey-username}
   */
  UserName: Resolvable<string>;
};
