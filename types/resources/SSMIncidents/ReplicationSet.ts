// CloudFormation Resource AWS::SSMIncidents::ReplicationSet

import { CFResource } from '../../base';

export type ReplicationSet_Type = 'AWS::SSMIncidents::ReplicationSet';
export const ReplicationSet_Type = 'AWS::SSMIncidents::ReplicationSet';

/**
 * Resource type definition for AWS::SSMIncidents::ReplicationSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html}
 */
export default function ReplicationSet(props: ReplicationSet_Properties) {
  return new CFResource<ReplicationSet_Type, ReplicationSet_Properties>(
    ReplicationSet_Type,
    props
  );
}

/**
 * Resource type definition for AWS::SSMIncidents::ReplicationSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html}
 */
export type ReplicationSet_Properties = {
  Arn?: Arn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-regions}
   */
  Regions: RegionList;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-deletionprotected}
   */
  DeletionProtected?: DeletionProtected;
};

export type Arn = string;

export type RegionName = string;

/**
 * The ReplicationSet regional configuration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html}
 */
export type ReplicationRegion = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html#cfn-ssmincidents-replicationset-replicationregion-regionname}
   */
  RegionName?: RegionName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html#cfn-ssmincidents-replicationset-replicationregion-regionconfiguration}
   */
  RegionConfiguration?: RegionConfiguration;
};

/**
 * The ReplicationSet regional configuration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html}
 */
export type RegionConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html#cfn-ssmincidents-replicationset-regionconfiguration-ssekmskeyid}
   */
  SseKmsKeyId: Arn;
};

export type DeletionProtected = boolean;

export type RegionList = ReplicationRegion[];
