// CloudFormation Resource AWS::LakeFormation::DataLakeSettings

import { CFResource } from '../../base';

export type DataLakeSettings_Type = 'AWS::LakeFormation::DataLakeSettings';
export const DataLakeSettings_Type = 'AWS::LakeFormation::DataLakeSettings';

/**
 * Resource Type definition for AWS::LakeFormation::DataLakeSettings
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html}
 */
export default function DataLakeSettings(props: DataLakeSettings_Properties) {
  return new CFResource<DataLakeSettings_Type, DataLakeSettings_Properties>(
    DataLakeSettings_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::LakeFormation::DataLakeSettings
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html}
 */
export type DataLakeSettings_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-admins}
   */
  Admins?: Admins;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-trustedresourceowners}
   */
  TrustedResourceOwners?: string[];
  Id?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-admins.html}
 */
export type Admins = {};
