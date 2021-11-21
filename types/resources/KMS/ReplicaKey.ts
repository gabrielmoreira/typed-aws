// CloudFormation Resource AWS::KMS::ReplicaKey

import { CFResource } from '../../base';

export type ReplicaKey_Type = 'AWS::KMS::ReplicaKey';
export const ReplicaKey_Type = 'AWS::KMS::ReplicaKey';

/**
 * The AWS::KMS::ReplicaKey resource specifies a multi-region replica
 * customer master key (CMK) in AWS Key Management Service (AWS KMS).
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html}
 */
export default function ReplicaKey(props: ReplicaKey_Properties) {
  return new CFResource<ReplicaKey_Type, ReplicaKey_Properties>(
    ReplicaKey_Type,
    props
  );
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
  PrimaryKeyArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-enabled}
   */
  Enabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-keypolicy}
   */
  KeyPolicy:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-pendingwindowindays}
   */
  PendingWindowInDays?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#cfn-kms-replicakey-tags}
   */
  Tags?: Tag[];
  Arn?: string;
  KeyId?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
