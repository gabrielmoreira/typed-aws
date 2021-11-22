// CloudFormation Resource AWS::GameLift::Fleet

import { CfnResource, Resolvable } from '../../base';

export type Fleet_Type = 'AWS::GameLift::Fleet';
export const Fleet_Type = 'AWS::GameLift::Fleet';

export default function Fleet(props: Fleet_Properties) {
  return new CfnResource<Fleet_Properties>(Fleet_Type, props);
}

export type Fleet_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration}
   */
  CertificateConfiguration?: CertificateConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances}
   */
  DesiredEC2Instances?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions}
   */
  EC2InboundPermissions?: IpPermission[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype}
   */
  EC2InstanceType: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype}
   */
  FleetType?: Resolvable<'ON_DEMAND' | 'SPOT'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn}
   */
  InstanceRoleARN?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations}
   */
  Locations?: LocationConfiguration[];
  LogPaths?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize}
   */
  MaxSize?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups}
   */
  MetricGroups?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize}
   */
  MinSize?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy}
   */
  NewGameSessionProtectionPolicy?: Resolvable<
    'FullProtection' | 'NoProtection'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid}
   */
  PeerVpcAwsAccountId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid}
   */
  PeerVpcId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy}
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  FleetId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid}
   */
  BuildId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid}
   */
  ScriptId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration}
   */
  RuntimeConfiguration?: RuntimeConfiguration;
  ServerLaunchParameters?: Resolvable<string>;
  ServerLaunchPath?: Resolvable<string>;
} & (
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration}
       */
      CertificateConfiguration?: CertificateConfiguration;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description}
       */
      Description?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances}
       */
      DesiredEC2Instances?: Resolvable<number>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions}
       */
      EC2InboundPermissions?: IpPermission[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype}
       */
      EC2InstanceType?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype}
       */
      FleetType?: Resolvable<'ON_DEMAND' | 'SPOT'>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn}
       */
      InstanceRoleARN?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations}
       */
      Locations?: LocationConfiguration[];
      LogPaths?: Resolvable<string>[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize}
       */
      MaxSize?: Resolvable<number>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups}
       */
      MetricGroups?: Resolvable<string>[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize}
       */
      MinSize?: Resolvable<number>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name}
       */
      Name?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy}
       */
      NewGameSessionProtectionPolicy?: Resolvable<
        'FullProtection' | 'NoProtection'
      >;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid}
       */
      PeerVpcAwsAccountId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid}
       */
      PeerVpcId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy}
       */
      ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
      FleetId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid}
       */
      BuildId: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid}
       */
      ScriptId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration}
       */
      RuntimeConfiguration?: RuntimeConfiguration;
      ServerLaunchParameters?: Resolvable<string>;
      ServerLaunchPath?: Resolvable<string>;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration}
       */
      CertificateConfiguration?: CertificateConfiguration;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description}
       */
      Description?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances}
       */
      DesiredEC2Instances?: Resolvable<number>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions}
       */
      EC2InboundPermissions?: IpPermission[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype}
       */
      EC2InstanceType?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype}
       */
      FleetType?: Resolvable<'ON_DEMAND' | 'SPOT'>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn}
       */
      InstanceRoleARN?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations}
       */
      Locations?: LocationConfiguration[];
      LogPaths?: Resolvable<string>[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize}
       */
      MaxSize?: Resolvable<number>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups}
       */
      MetricGroups?: Resolvable<string>[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize}
       */
      MinSize?: Resolvable<number>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name}
       */
      Name?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy}
       */
      NewGameSessionProtectionPolicy?: Resolvable<
        'FullProtection' | 'NoProtection'
      >;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid}
       */
      PeerVpcAwsAccountId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid}
       */
      PeerVpcId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy}
       */
      ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
      FleetId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid}
       */
      BuildId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid}
       */
      ScriptId: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration}
       */
      RuntimeConfiguration?: RuntimeConfiguration;
      ServerLaunchParameters?: Resolvable<string>;
      ServerLaunchPath?: Resolvable<string>;
    }
) &
  (
    | {
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration}
         */
        CertificateConfiguration?: CertificateConfiguration;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description}
         */
        Description?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances}
         */
        DesiredEC2Instances?: Resolvable<number>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions}
         */
        EC2InboundPermissions?: IpPermission[];
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype}
         */
        EC2InstanceType?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype}
         */
        FleetType?: Resolvable<'ON_DEMAND' | 'SPOT'>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn}
         */
        InstanceRoleARN?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations}
         */
        Locations?: LocationConfiguration[];
        LogPaths?: Resolvable<string>[];
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize}
         */
        MaxSize?: Resolvable<number>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups}
         */
        MetricGroups?: Resolvable<string>[];
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize}
         */
        MinSize?: Resolvable<number>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name}
         */
        Name?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy}
         */
        NewGameSessionProtectionPolicy?: Resolvable<
          'FullProtection' | 'NoProtection'
        >;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid}
         */
        PeerVpcAwsAccountId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid}
         */
        PeerVpcId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy}
         */
        ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
        FleetId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid}
         */
        BuildId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid}
         */
        ScriptId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration}
         */
        RuntimeConfiguration: RuntimeConfiguration;
        ServerLaunchParameters?: Resolvable<string>;
        ServerLaunchPath?: Resolvable<string>;
      }
    | {
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration}
         */
        CertificateConfiguration?: CertificateConfiguration;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description}
         */
        Description?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances}
         */
        DesiredEC2Instances?: Resolvable<number>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions}
         */
        EC2InboundPermissions?: IpPermission[];
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype}
         */
        EC2InstanceType?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype}
         */
        FleetType?: Resolvable<'ON_DEMAND' | 'SPOT'>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn}
         */
        InstanceRoleARN?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations}
         */
        Locations?: LocationConfiguration[];
        LogPaths?: Resolvable<string>[];
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize}
         */
        MaxSize?: Resolvable<number>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups}
         */
        MetricGroups?: Resolvable<string>[];
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize}
         */
        MinSize?: Resolvable<number>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name}
         */
        Name?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy}
         */
        NewGameSessionProtectionPolicy?: Resolvable<
          'FullProtection' | 'NoProtection'
        >;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid}
         */
        PeerVpcAwsAccountId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid}
         */
        PeerVpcId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy}
         */
        ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
        FleetId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid}
         */
        BuildId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid}
         */
        ScriptId?: Resolvable<string>;
        /**
         * {@link
         * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration}
         */
        RuntimeConfiguration?: RuntimeConfiguration;
        ServerLaunchParameters: Resolvable<string>;
        ServerLaunchPath: Resolvable<string>;
      }
  );

/**
 * Current resource capacity settings in a specified fleet or location.
 * The location value might refer to a fleet's remote location or its
 * home Region. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html}
 */
export type LocationCapacity = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html#cfn-gamelift-fleet-locationcapacity-desiredec2instances}
   */
  DesiredEC2Instances: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html#cfn-gamelift-fleet-locationcapacity-minsize}
   */
  MinSize: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html#cfn-gamelift-fleet-locationcapacity-maxsize}
   */
  MaxSize: Resolvable<number>;
};

/**
 * Information about the use of a TLS/SSL certificate for a fleet. TLS
 * certificate generation is enabled at the fleet level, with one
 * certificate generated for the fleet. When this feature is enabled, the
 * certificate can be retrieved using the GameLift Server SDK call
 * GetInstanceCertificate. All instances in a fleet share the same
 * certificate. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html}
 */
export type CertificateConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html#cfn-gamelift-fleet-certificateconfiguration-certificatetype}
   */
  CertificateType: Resolvable<'DISABLED' | 'GENERATED'>;
};

/**
 * A range of IP addresses and port settings that allow inbound traffic
 * to connect to server processes on an Amazon GameLift hosting resource.
 * New game sessions that are started on the fleet are assigned an IP
 * address/port number combination, which must fall into the fleet's
 * allowed ranges. For fleets created with a custom game server, the
 * ranges reflect the server's game session assignments. For Realtime
 * Servers fleets, Amazon GameLift automatically opens two port ranges,
 * one for TCP messaging and one for UDP, for use by the Realtime
 * servers. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html}
 */
export type IpPermission = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-fromport}
   */
  FromPort: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-iprange}
   */
  IpRange: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-protocol}
   */
  Protocol: Resolvable<'TCP' | 'UDP'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html#cfn-gamelift-fleet-ippermission-toport}
   */
  ToPort: Resolvable<number>;
};

export type Location = Resolvable<string>;

/**
 * A remote location where a multi-location fleet can deploy EC2
 * instances for game hosting. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html}
 */
export type LocationConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html#cfn-gamelift-fleet-locationconfiguration-location}
   */
  Location: Location;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html#cfn-gamelift-fleet-locationconfiguration-locationcapacity}
   */
  LocationCapacity?: LocationCapacity;
};

/**
 * A policy that limits the number of game sessions a player can create
 * on the same fleet. This optional policy gives game owners control over
 * how players can consume available game server resources. A resource
 * creation policy makes the following statement: "An individual player
 * can create a maximum number of new game sessions within a specified
 * time period". The policy is evaluated when a player tries to create a
 * new game session. For example, assume you have a policy of 10 new game
 * sessions and a time period of 60 minutes. On receiving a
 * CreateGameSession request, Amazon GameLift checks that the player
 * (identified by CreatorId) has created fewer than 10 game sessions in
 * the past 60 minutes. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html}
 */
export type ResourceCreationLimitPolicy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html#cfn-gamelift-fleet-resourcecreationlimitpolicy-newgamesessionspercreator}
   */
  NewGameSessionsPerCreator?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html#cfn-gamelift-fleet-resourcecreationlimitpolicy-policyperiodinminutes}
   */
  PolicyPeriodInMinutes?: Resolvable<number>;
};

/**
 * A collection of server process configurations that describe the
 * processes to run on each instance in a fleet. All fleets must have a
 * runtime configuration. Each instance in the fleet maintains server
 * processes as specified in the runtime configuration, launching new
 * ones as existing processes end. Each instance regularly checks for an
 * updated runtime configuration makes adjustments as called for. The
 * runtime configuration enables the instances in a fleet to run multiple
 * processes simultaneously. Potential scenarios are as follows: (1) Run
 * multiple processes of a single game server executable to maximize
 * usage of your hosting resources. (2) Run one or more processes of
 * different executables, such as your game server and a metrics tracking
 * program. (3) Run multiple processes of a single game server but with
 * different launch parameters, for example to run one process on each
 * instance in debug mode. An Amazon GameLift instance is limited to 50
 * processes running simultaneously. A runtime configuration must specify
 * fewer than this limit. To calculate the total number of processes
 * specified in a runtime configuration, add the values of the
 * ConcurrentExecutions parameter for each ServerProcess object in the
 * runtime configuration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html}
 */
export type RuntimeConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html#cfn-gamelift-fleet-runtimeconfiguration-gamesessionactivationtimeoutseconds}
   */
  GameSessionActivationTimeoutSeconds?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html#cfn-gamelift-fleet-runtimeconfiguration-maxconcurrentgamesessionactivations}
   */
  MaxConcurrentGameSessionActivations?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html#cfn-gamelift-fleet-runtimeconfiguration-serverprocesses}
   */
  ServerProcesses?: ServerProcess[];
};

/**
 * A set of instructions for launching server processes on each instance
 * in a fleet. Each instruction set identifies the location of the server
 * executable, optional launch parameters, and the number of server
 * processes with this configuration to maintain concurrently on the
 * instance. Server process configurations make up a fleet's
 * RuntimeConfiguration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html}
 */
export type ServerProcess = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html#cfn-gamelift-fleet-serverprocess-concurrentexecutions}
   */
  ConcurrentExecutions: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html#cfn-gamelift-fleet-serverprocess-launchpath}
   */
  LaunchPath: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html#cfn-gamelift-fleet-serverprocess-parameters}
   */
  Parameters?: Resolvable<string>;
};
