// CloudFormation Resource AWS::Athena::WorkGroup

import { CfnResource, Resolvable } from '../../base';

export type WorkGroup_Type = 'AWS::Athena::WorkGroup';
export const WorkGroup_Type = 'AWS::Athena::WorkGroup';

/**
 * Resource schema for AWS::Athena::WorkGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html}
 */
export default function WorkGroup(props: WorkGroup_Properties) {
  return new CfnResource<WorkGroup_Properties>(WorkGroup_Type, props);
}

/**
 * Resource schema for AWS::Athena::WorkGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html}
 */
export type WorkGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-tags}
   */
  Tags?: Tags;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-workgroupconfiguration}
   */
  WorkGroupConfiguration?: WorkGroupConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-workgroupconfigurationupdates}
   */
  WorkGroupConfigurationUpdates?: WorkGroupConfigurationUpdates;
  CreationTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-state}
   */
  State?: Resolvable<'ENABLED' | 'DISABLED'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-recursivedeleteoption}
   */
  RecursiveDeleteOption?: Resolvable<boolean>;
};

export type Tags = Tag[];

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};

export type SelectedEngineVersion = Resolvable<string>;

export type EffectiveEngineVersion = Resolvable<string>;

/**
 * The Athena engine version for running queries. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html}
 */
export type EngineVersion = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html#cfn-athena-workgroup-engineversion-selectedengineversion}
   */
  SelectedEngineVersion?: SelectedEngineVersion;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html#cfn-athena-workgroup-engineversion-effectiveengineversion}
   */
  EffectiveEngineVersion?: EffectiveEngineVersion;
};

export type BytesScannedCutoffPerQuery = Resolvable<number>;

export type EnforceWorkGroupConfiguration = Resolvable<boolean>;

export type PublishCloudWatchMetricsEnabled = Resolvable<boolean>;

export type RequesterPaysEnabled = Resolvable<boolean>;

export type OutputLocation = Resolvable<string>;

export type KmsKey = Resolvable<string>;

export type EncryptionOption = Resolvable<'SSE_S3' | 'SSE_KMS' | 'CSE_KMS'>;

export type RemoveBytesScannedCutoffPerQuery = Resolvable<boolean>;

/**
 * If query results are encrypted in Amazon S3, indicates the encryption
 * option used (for example, SSE-KMS or CSE-KMS) and key information.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html#cfn-athena-workgroup-encryptionconfiguration-encryptionoption}
   */
  EncryptionOption: EncryptionOption;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html#cfn-athena-workgroup-encryptionconfiguration-kmskey}
   */
  KmsKey?: KmsKey;
};

export type RemoveEncryptionConfiguration = Resolvable<boolean>;

export type RemoveOutputLocation = Resolvable<boolean>;

/**
 * The location in Amazon S3 where query results are stored and the
 * encryption option, if any, used for query results. These are known as
 * "client-side settings". If workgroup settings override client-side
 * settings, then the query uses the workgroup settings. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html}
 */
export type ResultConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html#cfn-athena-workgroup-resultconfiguration-encryptionconfiguration}
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html#cfn-athena-workgroup-resultconfiguration-outputlocation}
   */
  OutputLocation?: OutputLocation;
};

/**
 * The result configuration information about the queries in this
 * workgroup that will be updated. Includes the updated results location
 * and an updated option for encrypting query results. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html}
 */
export type ResultConfigurationUpdates = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-encryptionconfiguration}
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-outputlocation}
   */
  OutputLocation?: OutputLocation;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-removeencryptionconfiguration}
   */
  RemoveEncryptionConfiguration?: RemoveEncryptionConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html#cfn-athena-workgroup-resultconfigurationupdates-removeoutputlocation}
   */
  RemoveOutputLocation?: RemoveOutputLocation;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html}
 */
export type WorkGroupConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-bytesscannedcutoffperquery}
   */
  BytesScannedCutoffPerQuery?: BytesScannedCutoffPerQuery;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-enforceworkgroupconfiguration}
   */
  EnforceWorkGroupConfiguration?: EnforceWorkGroupConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-publishcloudwatchmetricsenabled}
   */
  PublishCloudWatchMetricsEnabled?: PublishCloudWatchMetricsEnabled;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-requesterpaysenabled}
   */
  RequesterPaysEnabled?: RequesterPaysEnabled;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-resultconfiguration}
   */
  ResultConfiguration?: ResultConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-engineversion}
   */
  EngineVersion?: EngineVersion;
};

/**
 * The configuration information that will be updated for this workgroup,
 * which includes the location in Amazon S3 where query results are
 * stored, the encryption option, if any, used for query results, whether
 * the Amazon CloudWatch Metrics are enabled for the workgroup, whether
 * the workgroup settings override the client-side settings, and the data
 * usage limit for the amount of bytes scanned per query, if it is
 * specified. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html}
 */
export type WorkGroupConfigurationUpdates = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-bytesscannedcutoffperquery}
   */
  BytesScannedCutoffPerQuery?: BytesScannedCutoffPerQuery;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-enforceworkgroupconfiguration}
   */
  EnforceWorkGroupConfiguration?: EnforceWorkGroupConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-publishcloudwatchmetricsenabled}
   */
  PublishCloudWatchMetricsEnabled?: PublishCloudWatchMetricsEnabled;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-requesterpaysenabled}
   */
  RequesterPaysEnabled?: RequesterPaysEnabled;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-resultconfigurationupdates}
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-removebytesscannedcutoffperquery}
   */
  RemoveBytesScannedCutoffPerQuery?: RemoveBytesScannedCutoffPerQuery;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html#cfn-athena-workgroup-workgroupconfigurationupdates-engineversion}
   */
  EngineVersion?: EngineVersion;
};
