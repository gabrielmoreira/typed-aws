// CloudFormation Resource AWS::ECR::RegistryPolicy

import { CfnResource, Resolvable } from '../../base';

export type RegistryPolicy_Type = 'AWS::ECR::RegistryPolicy';
export const RegistryPolicy_Type = 'AWS::ECR::RegistryPolicy';

/**
 * The AWS::ECR::RegistryPolicy is used to specify permissions for
 * another AWS account and is used when configuring cross-account
 * replication. For more information, see Registry permissions in the
 * Amazon Elastic Container Registry User Guide:
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html}
 */
export default function RegistryPolicy(props: RegistryPolicy_Properties) {
  return new CfnResource<RegistryPolicy_Properties>(RegistryPolicy_Type, props);
}

/**
 * The AWS::ECR::RegistryPolicy is used to specify permissions for
 * another AWS account and is used when configuring cross-account
 * replication. For more information, see Registry permissions in the
 * Amazon Elastic Container Registry User Guide:
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html}
 */
export type RegistryPolicy_Properties = {
  RegistryId?: RegistryId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html#cfn-ecr-registrypolicy-policytext}
   */
  PolicyText: {
    [k: string]: unknown;
  };
};

export type RegistryId = Resolvable<string>;
