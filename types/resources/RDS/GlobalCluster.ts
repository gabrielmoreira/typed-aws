// CloudFormation Resource AWS::RDS::GlobalCluster

import { CFResource } from '../../base';

export type GlobalCluster_Type = 'AWS::RDS::GlobalCluster';
export const GlobalCluster_Type = 'AWS::RDS::GlobalCluster';

export default function GlobalCluster(props: GlobalCluster_Properties) {
  return new CFResource<GlobalCluster_Type, GlobalCluster_Properties>(
    GlobalCluster_Type,
    props
  );
}

export type GlobalCluster_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engine}
       */
      Engine?: 'aurora' | 'aurora-mysql' | 'aurora-postgresql';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engineversion}
       */
      EngineVersion?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-deletionprotection}
       */
      DeletionProtection?: boolean;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-globalclusteridentifier}
       */
      GlobalClusterIdentifier?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-sourcedbclusteridentifier}
       */
      SourceDBClusterIdentifier: string | string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-storageencrypted}
       */
      StorageEncrypted?: boolean;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engine}
       */
      Engine: 'aurora' | 'aurora-mysql' | 'aurora-postgresql';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engineversion}
       */
      EngineVersion?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-deletionprotection}
       */
      DeletionProtection?: boolean;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-globalclusteridentifier}
       */
      GlobalClusterIdentifier?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-sourcedbclusteridentifier}
       */
      SourceDBClusterIdentifier?: string | string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-storageencrypted}
       */
      StorageEncrypted?: boolean;
    };
