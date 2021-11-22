// CloudFormation Resource AWS::ECS::ClusterCapacityProviderAssociations

import { CfnResource, Resolvable } from '../../base';

export type ClusterCapacityProviderAssociations_Type =
  'AWS::ECS::ClusterCapacityProviderAssociations';
export const ClusterCapacityProviderAssociations_Type =
  'AWS::ECS::ClusterCapacityProviderAssociations';

/**
 * Associate a set of ECS Capacity Providers with a specified ECS Cluster
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html}
 */
export default function ClusterCapacityProviderAssociations(
  props: ClusterCapacityProviderAssociations_Properties
) {
  return new CfnResource<ClusterCapacityProviderAssociations_Properties>(
    ClusterCapacityProviderAssociations_Type,
    props
  );
}

/**
 * Associate a set of ECS Capacity Providers with a specified ECS Cluster
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html}
 */
export type ClusterCapacityProviderAssociations_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html#cfn-ecs-clustercapacityproviderassociations-capacityproviders}
   */
  CapacityProviders: CapacityProviders;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html#cfn-ecs-clustercapacityproviderassociations-cluster}
   */
  Cluster: Cluster;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html#cfn-ecs-clustercapacityproviderassociations-defaultcapacityproviderstrategy}
   */
  DefaultCapacityProviderStrategy: DefaultCapacityProviderStrategy;
};

export type CapacityProviders = CapacityProvider[];

export type CapacityProvider =
  | Resolvable<'FARGATE' | 'FARGATE_SPOT'>
  | Resolvable<string>;

export type Cluster = Resolvable<string>;

export type DefaultCapacityProviderStrategy = CapacityProviderStrategy[];

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html}
 */
export type CapacityProviderStrategy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html#cfn-ecs-clustercapacityproviderassociations-capacityproviderstrategy-base}
   */
  Base?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html#cfn-ecs-clustercapacityproviderassociations-capacityproviderstrategy-weight}
   */
  Weight?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html#cfn-ecs-clustercapacityproviderassociations-capacityproviderstrategy-capacityprovider}
   */
  CapacityProvider: CapacityProvider;
};
