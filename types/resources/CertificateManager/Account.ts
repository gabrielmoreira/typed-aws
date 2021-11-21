// CloudFormation Resource AWS::CertificateManager::Account

import { CfnResource } from '../../base';

export type Account_Type = 'AWS::CertificateManager::Account';
export const Account_Type = 'AWS::CertificateManager::Account';

/**
 * Resource schema for AWS::CertificateManager::Account. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html}
 */
export default function Account(props: Account_Properties) {
  return new CfnResource<Account_Properties>(Account_Type, props);
}

/**
 * Resource schema for AWS::CertificateManager::Account. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html}
 */
export type Account_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html#cfn-certificatemanager-account-expiryeventsconfiguration}
   */
  ExpiryEventsConfiguration: ExpiryEventsConfiguration;
  AccountId?: AccountId;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-account-expiryeventsconfiguration.html}
 */
export type ExpiryEventsConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-account-expiryeventsconfiguration.html#cfn-certificatemanager-account-expiryeventsconfiguration-daysbeforeexpiry}
   */
  DaysBeforeExpiry?: number;
};

export type AccountId = string;
