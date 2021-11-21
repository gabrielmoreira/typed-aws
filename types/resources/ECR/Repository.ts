// CloudFormation Resource AWS::ECR::Repository

import { CfnResource } from '../../base';

export type Repository_Type = 'AWS::ECR::Repository';
export const Repository_Type = 'AWS::ECR::Repository';

/**
 * The AWS::ECR::Repository resource specifies an Amazon Elastic
 * Container Registry (Amazon ECR) repository, where users can push and
 * pull Docker images. For more information, see
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html}
 */
export default function Repository(props: Repository_Properties) {
  return new CfnResource<Repository_Properties>(Repository_Type, props);
}

/**
 * The AWS::ECR::Repository resource specifies an Amazon Elastic
 * Container Registry (Amazon ECR) repository, where users can push and
 * pull Docker images. For more information, see
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html}
 */
export type Repository_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-lifecyclepolicy}
   */
  LifecyclePolicy?: LifecyclePolicy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-repositoryname}
   */
  RepositoryName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-repositorypolicytext}
   */
  RepositoryPolicyText?:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-tags}
   */
  Tags?: Tag[];
  Arn?: string;
  RepositoryUri?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-imagetagmutability}
   */
  ImageTagMutability?: 'MUTABLE' | 'IMMUTABLE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-imagescanningconfiguration}
   */
  ImageScanningConfiguration?: ImageScanningConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-encryptionconfiguration}
   */
  EncryptionConfiguration?: EncryptionConfiguration;
};

/**
 * The LifecyclePolicy property type specifies a lifecycle policy. For
 * information about lifecycle policy syntax, see
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html}
 */
export type LifecyclePolicy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html#cfn-ecr-repository-lifecyclepolicy-lifecyclepolicytext}
   */
  LifecyclePolicyText?: LifecyclePolicyText;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html#cfn-ecr-repository-lifecyclepolicy-registryid}
   */
  RegistryId?: RegistryId;
};

export type LifecyclePolicyText = string;

export type RegistryId = string;

export type Tag = {
  Key: string;
  Value: string;
};

/**
 * The image scanning configuration for the repository. This setting
 * determines whether images are scanned for known vulnerabilities after
 * being pushed to the repository. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html}
 */
export type ImageScanningConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html#cfn-ecr-repository-imagescanningconfiguration-scanonpush}
   */
  ScanOnPush?: ScanOnPush;
};

export type ScanOnPush = boolean;

/**
 * The encryption configuration for the repository. This determines how
 * the contents of your repository are encrypted at rest. By default,
 * when no encryption configuration is set or the AES256 encryption type
 * is used, Amazon ECR uses server-side encryption with Amazon S3-managed
 * encryption keys which encrypts your data at rest using an AES-256
 * encryption algorithm. This does not require any action on your part.
 * For more information, see
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html#cfn-ecr-repository-encryptionconfiguration-encryptiontype}
   */
  EncryptionType: EncryptionType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html#cfn-ecr-repository-encryptionconfiguration-kmskey}
   */
  KmsKey?: KmsKey;
};

export type EncryptionType = 'AES256' | 'KMS';

export type KmsKey = string;
