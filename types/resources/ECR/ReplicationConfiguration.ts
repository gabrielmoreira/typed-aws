// CloudFormation Resource AWS::ECR::ReplicationConfiguration

import { CfnResource } from '../../base';

export type ReplicationConfiguration_Type =
  'AWS::ECR::ReplicationConfiguration';
export const ReplicationConfiguration_Type =
  'AWS::ECR::ReplicationConfiguration';

/**
 * The AWS::ECR::ReplicationConfiguration resource configures the
 * replication destinations for an Amazon Elastic Container Registry
 * (Amazon Private ECR). For more information, see
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html}
 */
export default function ReplicationConfiguration(
  props: ReplicationConfiguration_Properties
) {
  return new CfnResource<ReplicationConfiguration_Properties>(
    ReplicationConfiguration_Type,
    props
  );
}

/**
 * The AWS::ECR::ReplicationConfiguration resource configures the
 * replication destinations for an Amazon Elastic Container Registry
 * (Amazon Private ECR). For more information, see
 * https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html}
 */
export type ReplicationConfiguration_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationconfiguration}
   */
  ReplicationConfiguration: ReplicationConfiguration;
  RegistryId?: string;
};

/**
 * An object representing the replication configuration for a registry.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html}
 */
export type ReplicationConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationconfiguration-rules}
   */
  Rules: ReplicationRule[];
};

/**
 * An array of objects representing the details of a replication
 * destination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html}
 */
export type ReplicationRule = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html#cfn-ecr-replicationconfiguration-replicationrule-repositoryfilters}
   */
  RepositoryFilters?: RepositoryFilter[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html#cfn-ecr-replicationconfiguration-replicationrule-destinations}
   */
  Destinations: ReplicationDestination[];
};

/**
 * An array of objects representing the details of a repository filter.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html}
 */
export type RepositoryFilter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html#cfn-ecr-replicationconfiguration-repositoryfilter-filter}
   */
  Filter: Filter;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html#cfn-ecr-replicationconfiguration-repositoryfilter-filtertype}
   */
  FilterType: FilterType;
};

export type Filter = string;

export type FilterType = 'PREFIX_MATCH';

/**
 * An array of objects representing the details of a replication
 * destination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html}
 */
export type ReplicationDestination = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html#cfn-ecr-replicationconfiguration-replicationdestination-region}
   */
  Region: Region;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html#cfn-ecr-replicationconfiguration-replicationdestination-registryid}
   */
  RegistryId: RegistryId;
};

export type RegistryId = string;

export type Region = string;
