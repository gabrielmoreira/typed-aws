// CloudFormation Resource AWS::KMS::Alias

import { CfnResource, Resolvable } from '../../base';

export type Alias_Type = 'AWS::KMS::Alias';
export const Alias_Type = 'AWS::KMS::Alias';

/**
 * The AWS::KMS::Alias resource specifies a display name for a customer
 * master key (CMK) in AWS Key Management Service (AWS KMS). You can use
 * an alias to identify a CMK in cryptographic operations. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html}
 */
export default function Alias(props: Alias_Properties) {
  return new CfnResource<Alias_Properties>(Alias_Type, props);
}

/**
 * The AWS::KMS::Alias resource specifies a display name for a customer
 * master key (CMK) in AWS Key Management Service (AWS KMS). You can use
 * an alias to identify a CMK in cryptographic operations. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html}
 */
export type Alias_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html#cfn-kms-alias-aliasname}
   */
  AliasName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html#cfn-kms-alias-targetkeyid}
   */
  TargetKeyId: Resolvable<string>;
};
