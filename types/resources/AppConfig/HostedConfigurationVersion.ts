// CloudFormation Resource AWS::AppConfig::HostedConfigurationVersion

import { CFResource } from '../../base';

export type HostedConfigurationVersion_Type =
  'AWS::AppConfig::HostedConfigurationVersion';
export const HostedConfigurationVersion_Type =
  'AWS::AppConfig::HostedConfigurationVersion';

/**
 * Resource Type definition for
 * AWS::AppConfig::HostedConfigurationVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html}
 */
export default function HostedConfigurationVersion(
  props: HostedConfigurationVersion_Properties
) {
  return new CFResource<
    HostedConfigurationVersion_Type,
    HostedConfigurationVersion_Properties
  >(HostedConfigurationVersion_Type, props);
}

/**
 * Resource Type definition for
 * AWS::AppConfig::HostedConfigurationVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html}
 */
export type HostedConfigurationVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-configurationprofileid}
   */
  ConfigurationProfileId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-contenttype}
   */
  ContentType: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-latestversionnumber}
   */
  LatestVersionNumber?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-content}
   */
  Content: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-applicationid}
   */
  ApplicationId: string;
};
