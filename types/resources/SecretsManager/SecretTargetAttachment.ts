// CloudFormation Resource AWS::SecretsManager::SecretTargetAttachment

import { CFResource } from '../../base';

export type SecretTargetAttachment_Type =
  'AWS::SecretsManager::SecretTargetAttachment';
export const SecretTargetAttachment_Type =
  'AWS::SecretsManager::SecretTargetAttachment';

/**
 * Resource Type definition for
 * AWS::SecretsManager::SecretTargetAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html}
 */
export default function SecretTargetAttachment(
  props: SecretTargetAttachment_Properties
) {
  return new CFResource<
    SecretTargetAttachment_Type,
    SecretTargetAttachment_Properties
  >(SecretTargetAttachment_Type, props);
}

/**
 * Resource Type definition for
 * AWS::SecretsManager::SecretTargetAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html}
 */
export type SecretTargetAttachment_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#cfn-secretsmanager-secrettargetattachment-secretid}
   */
  SecretId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#cfn-secretsmanager-secrettargetattachment-targettype}
   */
  TargetType: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#cfn-secretsmanager-secrettargetattachment-targetid}
   */
  TargetId: string;
};
