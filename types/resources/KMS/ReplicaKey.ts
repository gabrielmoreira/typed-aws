// CloudFormation Resource AWS::KMS::ReplicaKey

import { CfnResource, Resolvable } from '../../base';

export type ReplicaKey_Type = 'AWS::KMS::ReplicaKey';
export const ReplicaKey_Type = 'AWS::KMS::ReplicaKey';

/**
 * The AWS::KMS::ReplicaKey resource specifies a multi-region replica
 * customer master key (CMK) in AWS Key Management Service (AWS KMS).
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html}
 */
export default function ReplicaKey(props: ReplicaKey_Properties) {
  return new CfnResource<ReplicaKey_Properties>(ReplicaKey_Type, props);
}

/**
 * The AWS::KMS::ReplicaKey resource specifies a multi-region replica
 * customer master key (CMK) in AWS Key Management Service (AWS KMS).
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html}
 */
export type ReplicaKey_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-primarykeyarn}
   */
  PrimaryKeyArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-enabled}
   */
  Enabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-keypolicy}
   */
  KeyPolicy:
    | {
        [k: string]: unknown;
      }
    | Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-pendingwindowindays}
   */
  PendingWindowInDays?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-tags}
   */
  Tags?: Tag[];
  Arn?: Resolvable<string>;
  KeyId?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
