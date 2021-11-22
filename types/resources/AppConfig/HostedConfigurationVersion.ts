// CloudFormation Resource AWS::AppConfig::HostedConfigurationVersion

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<HostedConfigurationVersion_Properties>(
    HostedConfigurationVersion_Type,
    props
  );
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
  ConfigurationProfileId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-contenttype}
   */
  ContentType: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-latestversionnumber}
   */
  LatestVersionNumber?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-content}
   */
  Content: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-applicationid}
   */
  ApplicationId: Resolvable<string>;
};
