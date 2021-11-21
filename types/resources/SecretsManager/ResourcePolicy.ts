// CloudFormation Resource AWS::SecretsManager::ResourcePolicy

import { CFResource } from '../../base';

export type ResourcePolicy_Type = 'AWS::SecretsManager::ResourcePolicy';
export const ResourcePolicy_Type = 'AWS::SecretsManager::ResourcePolicy';

/**
 * Resource Type definition for AWS::SecretsManager::ResourcePolicy
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html}
 */
export default function ResourcePolicy(props: ResourcePolicy_Properties) {
  return new CFResource<ResourcePolicy_Type, ResourcePolicy_Properties>(
    ResourcePolicy_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::SecretsManager::ResourcePolicy
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html}
 */
export type ResourcePolicy_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-resourcepolicy}
   */
  ResourcePolicy: {
    [k: string]: unknown;
  };
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-blockpublicpolicy}
   */
  BlockPublicPolicy?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-secretid}
   */
  SecretId: string;
};
