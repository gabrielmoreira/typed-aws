// CloudFormation Resource AWS::CodeDeploy::DeploymentConfig

import { CFResource } from '../../base';

export type DeploymentConfig_Type = 'AWS::CodeDeploy::DeploymentConfig';
export const DeploymentConfig_Type = 'AWS::CodeDeploy::DeploymentConfig';

/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html}
 */
export default function DeploymentConfig(props: DeploymentConfig_Properties) {
  return new CFResource<DeploymentConfig_Type, DeploymentConfig_Properties>(
    DeploymentConfig_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html}
 */
export type DeploymentConfig_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-deploymentconfigname}
   */
  DeploymentConfigName?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig}
   */
  TrafficRoutingConfig?: TrafficRoutingConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-computeplatform}
   */
  ComputePlatform?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts}
   */
  MinimumHealthyHosts?: MinimumHealthyHosts;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html}
 */
export type TimeBasedLinear = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-timebasedlinear-linearinterval}
   */
  LinearInterval: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-timebasedlinear-linearpercentage}
   */
  LinearPercentage: number;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html}
 */
export type TimeBasedCanary = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-timebasedcanary-canarypercentage}
   */
  CanaryPercentage: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-timebasedcanary-canaryinterval}
   */
  CanaryInterval: number;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html}
 */
export type TrafficRoutingConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-type}
   */
  Type: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-timebasedlinear}
   */
  TimeBasedLinear?: TimeBasedLinear;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html#cfn-properties-codedeploy-deploymentconfig-trafficroutingconfig-timebasedcanary}
   */
  TimeBasedCanary?: TimeBasedCanary;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html}
 */
export type MinimumHealthyHosts = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts-value}
   */
  Value: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts-type}
   */
  Type: string;
};
