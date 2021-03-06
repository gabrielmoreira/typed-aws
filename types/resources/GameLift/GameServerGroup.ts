// CloudFormation Resource AWS::GameLift::GameServerGroup

import { CfnResource, Resolvable } from '../../base';

export type GameServerGroup_Type = 'AWS::GameLift::GameServerGroup';
export const GameServerGroup_Type = 'AWS::GameLift::GameServerGroup';

/**
 * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift
 * (GameLift) GameServerGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html}
 */
export default function GameServerGroup(props: GameServerGroup_Properties) {
  return new CfnResource<GameServerGroup_Properties>(
    GameServerGroup_Type,
    props
  );
}

/**
 * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift
 * (GameLift) GameServerGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html}
 */
export type GameServerGroup_Properties = {
  AutoScalingGroupArn?: AutoScalingGroupArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-autoscalingpolicy}
   */
  AutoScalingPolicy?: AutoScalingPolicy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-balancingstrategy}
   */
  BalancingStrategy?: BalancingStrategy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-deleteoption}
   */
  DeleteOption?: DeleteOption;
  GameServerGroupArn?: GameServerGroupArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-gameservergroupname}
   */
  GameServerGroupName: GameServerGroupName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-gameserverprotectionpolicy}
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-instancedefinitions}
   */
  InstanceDefinitions: InstanceDefinitions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-launchtemplate}
   */
  LaunchTemplate: LaunchTemplate;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-maxsize}
   */
  MaxSize?: MaxSize;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-minsize}
   */
  MinSize?: MinSize;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-rolearn}
   */
  RoleArn: RoleArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-tags}
   */
  Tags?: Tags;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#cfn-gamelift-gameservergroup-vpcsubnets}
   */
  VpcSubnets?: VpcSubnets;
};

/**
 * Configuration settings to define a scaling policy for the Auto Scaling
 * group that is optimized for game hosting {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html}
 */
export type AutoScalingPolicy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html#cfn-gamelift-gameservergroup-autoscalingpolicy-estimatedinstancewarmup}
   */
  EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html#cfn-gamelift-gameservergroup-autoscalingpolicy-targettrackingconfiguration}
   */
  TargetTrackingConfiguration: TargetTrackingConfiguration;
};

export type EstimatedInstanceWarmup = Resolvable<number>;

/**
 * Settings for a target-based scaling policy applied to Auto Scaling
 * group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-targettrackingconfiguration.html}
 */
export type TargetTrackingConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-targettrackingconfiguration.html#cfn-gamelift-gameservergroup-targettrackingconfiguration-targetvalue}
   */
  TargetValue: TargetValue;
};

export type TargetValue = Resolvable<number>;

export type BalancingStrategy = Resolvable<
  'SPOT_ONLY' | 'SPOT_PREFERRED' | 'ON_DEMAND_ONLY'
>;

export type DeleteOption = Resolvable<
  'SAFE_DELETE' | 'FORCE_DELETE' | 'RETAIN'
>;

export type GameServerGroupName = Resolvable<string>;

export type GameServerProtectionPolicy = Resolvable<
  'NO_PROTECTION' | 'FULL_PROTECTION'
>;

export type GameServerGroupArn = Resolvable<string>;

export type InstanceDefinitions = InstanceDefinition[];

/**
 * An allowed instance type for your game server group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html}
 */
export type InstanceDefinition = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html#cfn-gamelift-gameservergroup-instancedefinition-instancetype}
   */
  InstanceType: InstanceType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html#cfn-gamelift-gameservergroup-instancedefinition-weightedcapacity}
   */
  WeightedCapacity?: WeightedCapacity;
};

export type InstanceType = Resolvable<string>;

export type WeightedCapacity = Resolvable<string>;

/**
 * The EC2 launch template that contains configuration settings and game
 * server code to be deployed to all instances in the game server group.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html}
 */
export type LaunchTemplate = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html#cfn-gamelift-gameservergroup-launchtemplate-launchtemplateid}
   */
  LaunchTemplateId?: LaunchTemplateId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html#cfn-gamelift-gameservergroup-launchtemplate-launchtemplatename}
   */
  LaunchTemplateName?: LaunchTemplateName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html#cfn-gamelift-gameservergroup-launchtemplate-version}
   */
  Version?: Version;
};

export type LaunchTemplateId = Resolvable<string>;

export type LaunchTemplateName = Resolvable<string>;

export type Version = Resolvable<string>;

export type MaxSize = Resolvable<number>;

export type MinSize = Resolvable<number>;

export type RoleArn = Resolvable<string>;

export type Tags = Tag[];

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};

export type VpcSubnets = Resolvable<string>[];

export type GameServerGroup = {
  AutoScalingGroupArn?: AutoScalingGroupArn;
  BalancingStrategy?: BalancingStrategy;
  CreationTime?: CreationTime;
  GameServerGroupArn?: GameServerGroupArn;
  GameServerGroupName?: GameServerGroupName;
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  InstanceDefinitions?: InstanceDefinitions;
  LastUpdatedTime?: LastUpdatedTime;
  RoleArn?: RoleArn;
  Status?: Status;
  StatusReason?: StatusReason;
  SuspendedActions?: SuspendedActions;
};

export type AutoScalingGroupArn = Resolvable<string>;

export type CreationTime = Resolvable<string>;

export type LastUpdatedTime = Resolvable<string>;

export type Status = Resolvable<
  | 'NEW'
  | 'ACTIVATING'
  | 'ACTIVE'
  | 'DELETE_SCHEDULED'
  | 'DELETING'
  | 'DELETED'
  | 'ERROR'
>;

export type StatusReason = Resolvable<string>;

export type SuspendedActions = Resolvable<'REPLACE_INSTANCE_TYPES'>[];
