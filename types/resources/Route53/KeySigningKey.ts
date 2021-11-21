// CloudFormation Resource AWS::Route53::KeySigningKey

import { CfnResource } from '../../base';

export type KeySigningKey_Type = 'AWS::Route53::KeySigningKey';
export const KeySigningKey_Type = 'AWS::Route53::KeySigningKey';

/**
 * Represents a key signing key (KSK) associated with a hosted zone. You
 * can only have two KSKs per hosted zone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html}
 */
export default function KeySigningKey(props: KeySigningKey_Properties) {
  return new CfnResource<KeySigningKey_Properties>(KeySigningKey_Type, props);
}

/**
 * Represents a key signing key (KSK) associated with a hosted zone. You
 * can only have two KSKs per hosted zone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html}
 */
export type KeySigningKey_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-hostedzoneid}
   */
  HostedZoneId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-status}
   */
  Status: 'ACTIVE' | 'INACTIVE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-keymanagementservicearn}
   */
  KeyManagementServiceArn: string;
};
