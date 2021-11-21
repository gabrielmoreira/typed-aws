// CloudFormation Resource AWS::Glue::DataCatalogEncryptionSettings

import { CFResource } from '../../base';

export type DataCatalogEncryptionSettings_Type =
  'AWS::Glue::DataCatalogEncryptionSettings';
export const DataCatalogEncryptionSettings_Type =
  'AWS::Glue::DataCatalogEncryptionSettings';

/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export default function DataCatalogEncryptionSettings(
  props: DataCatalogEncryptionSettings_Properties
) {
  return new CFResource<
    DataCatalogEncryptionSettings_Type,
    DataCatalogEncryptionSettings_Properties
  >(DataCatalogEncryptionSettings_Type, props);
}

/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export type DataCatalogEncryptionSettings_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings}
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-catalogid}
   */
  CatalogId: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html}
 */
export type DataCatalogEncryptionSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-connectionpasswordencryption}
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-encryptionatrest}
   */
  EncryptionAtRest?: EncryptionAtRest;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html}
 */
export type EncryptionAtRest = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html#cfn-glue-datacatalogencryptionsettings-encryptionatrest-catalogencryptionmode}
   */
  CatalogEncryptionMode?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html#cfn-glue-datacatalogencryptionsettings-encryptionatrest-sseawskmskeyid}
   */
  SseAwsKmsKeyId?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html}
 */
export type ConnectionPasswordEncryption = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html#cfn-glue-datacatalogencryptionsettings-connectionpasswordencryption-returnconnectionpasswordencrypted}
   */
  ReturnConnectionPasswordEncrypted?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html#cfn-glue-datacatalogencryptionsettings-connectionpasswordencryption-kmskeyid}
   */
  KmsKeyId?: string;
};
