// CloudFormation Resource AWS::KMS::Key

import { CfnResource } from '../../base';

export type Key_Type = 'AWS::KMS::Key';
export const Key_Type = 'AWS::KMS::Key';

/**
 * The AWS::KMS::Key resource specifies a customer master key (CMK) in
 * AWS Key Management Service (AWS KMS). Authorized users can use the CMK
 * to encrypt and decrypt small amounts of data (up to 4096 bytes), but
 * they are more commonly used to generate data keys. You can also use
 * CMKs to encrypt data stored in AWS services that are integrated with
 * AWS KMS or within their applications. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html}
 */
export default function Key(props: Key_Properties) {
  return new CfnResource<Key_Properties>(Key_Type, props);
}

/**
 * The AWS::KMS::Key resource specifies a customer master key (CMK) in
 * AWS Key Management Service (AWS KMS). Authorized users can use the CMK
 * to encrypt and decrypt small amounts of data (up to 4096 bytes), but
 * they are more commonly used to generate data keys. You can also use
 * CMKs to encrypt data stored in AWS services that are integrated with
 * AWS KMS or within their applications. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html}
 */
export type Key_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-enabled}
   */
  Enabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-enablekeyrotation}
   */
  EnableKeyRotation?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-keypolicy}
   */
  KeyPolicy:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-keyusage}
   */
  KeyUsage?: 'ENCRYPT_DECRYPT' | 'SIGN_VERIFY';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-keyspec}
   */
  KeySpec?:
    | 'SYMMETRIC_DEFAULT'
    | 'RSA_2048'
    | 'RSA_3072'
    | 'RSA_4096'
    | 'ECC_NIST_P256'
    | 'ECC_NIST_P384'
    | 'ECC_NIST_P521'
    | 'ECC_SECG_P256K1';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-multiregion}
   */
  MultiRegion?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-pendingwindowindays}
   */
  PendingWindowInDays?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#cfn-kms-key-tags}
   */
  Tags?: Tag[];
  Arn?: string;
  KeyId?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
