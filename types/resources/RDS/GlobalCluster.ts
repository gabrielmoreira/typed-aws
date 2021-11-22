// CloudFormation Resource AWS::RDS::GlobalCluster

import { CfnResource, Resolvable } from '../../base';

export type GlobalCluster_Type = 'AWS::RDS::GlobalCluster';
export const GlobalCluster_Type = 'AWS::RDS::GlobalCluster';

export default function GlobalCluster(props: GlobalCluster_Properties) {
  return new CfnResource<GlobalCluster_Properties>(GlobalCluster_Type, props);
}

export type GlobalCluster_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engine}
       */
      Engine?: Resolvable<'aurora' | 'aurora-mysql' | 'aurora-postgresql'>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engineversion}
       */
      EngineVersion?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-deletionprotection}
       */
      DeletionProtection?: Resolvable<boolean>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-globalclusteridentifier}
       */
      GlobalClusterIdentifier?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-sourcedbclusteridentifier}
       */
      SourceDBClusterIdentifier: Resolvable<string> | Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-storageencrypted}
       */
      StorageEncrypted?: Resolvable<boolean>;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engine}
       */
      Engine: Resolvable<'aurora' | 'aurora-mysql' | 'aurora-postgresql'>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engineversion}
       */
      EngineVersion?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-deletionprotection}
       */
      DeletionProtection?: Resolvable<boolean>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-globalclusteridentifier}
       */
      GlobalClusterIdentifier?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-sourcedbclusteridentifier}
       */
      SourceDBClusterIdentifier?: Resolvable<string> | Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-storageencrypted}
       */
      StorageEncrypted?: Resolvable<boolean>;
    };
