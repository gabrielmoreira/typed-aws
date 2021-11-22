// CloudFormation Resource AWS::ImageBuilder::DistributionConfiguration

import { CfnResource, Resolvable } from '../../base';

export type DistributionConfiguration_Type =
  'AWS::ImageBuilder::DistributionConfiguration';
export const DistributionConfiguration_Type =
  'AWS::ImageBuilder::DistributionConfiguration';

/**
 * Resource schema for AWS::ImageBuilder::DistributionConfiguration
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html}
 */
export default function DistributionConfiguration(
  props: DistributionConfiguration_Properties
) {
  return new CfnResource<DistributionConfiguration_Properties>(
    DistributionConfiguration_Type,
    props
  );
}

/**
 * Resource schema for AWS::ImageBuilder::DistributionConfiguration
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html}
 */
export type DistributionConfiguration_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-distributions}
   */
  Distributions: Distribution[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#cfn-imagebuilder-distributionconfiguration-tags}
   */
  Tags?: {
    [k: string]: Resolvable<string>;
  };
};

/**
 * The distributions of the distribution configuration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html}
 */
export type Distribution = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-region}
   */
  Region: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-amidistributionconfiguration}
   */
  AmiDistributionConfiguration?: {
    Name?: Resolvable<string>;
    KmsKeyId?: Resolvable<string>;
    Description?: Resolvable<string>;
    AmiTags?: {
      [k: string]: Resolvable<string>;
    };
    TargetAccountIds?: Resolvable<string>[];
    LaunchPermissionConfiguration?: {
      UserIds?: Resolvable<string>[];
      UserGroups?: Resolvable<string>[];
    };
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-containerdistributionconfiguration}
   */
  ContainerDistributionConfiguration?: {
    Description?: Resolvable<string>;
    ContainerTags?: Resolvable<string>[];
    TargetRepository?: TargetContainerRepository;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-licenseconfigurationarns}
   */
  LicenseConfigurationArns?: LicenseConfigurationArn[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html#cfn-imagebuilder-distributionconfiguration-distribution-launchtemplateconfigurations}
   */
  LaunchTemplateConfigurations?: LaunchTemplateConfiguration[];
};

/**
 * launchTemplateConfiguration settings that apply to image distribution.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html}
 */
export type LaunchTemplateConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-launchtemplateid}
   */
  LaunchTemplateId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-accountid}
   */
  AccountId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-setdefaultversion}
   */
  SetDefaultVersion?: Resolvable<boolean>;
};

export type LicenseConfigurationArn = Resolvable<string>;

export type TargetContainerRepository = {
  Service?: Resolvable<'ECR'>;
  RepositoryName?: Resolvable<string>;
};
