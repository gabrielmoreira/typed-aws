// CloudFormation Resource AWS::SageMaker::DataQualityJobDefinition

import { CFResource } from '../../base';

export type DataQualityJobDefinition_Type =
  'AWS::SageMaker::DataQualityJobDefinition';
export const DataQualityJobDefinition_Type =
  'AWS::SageMaker::DataQualityJobDefinition';

/**
 * Resource Type definition for AWS::SageMaker::DataQualityJobDefinition
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html}
 */
export default function DataQualityJobDefinition(
  props: DataQualityJobDefinition_Properties
) {
  return new CFResource<
    DataQualityJobDefinition_Type,
    DataQualityJobDefinition_Properties
  >(DataQualityJobDefinition_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::DataQualityJobDefinition
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html}
 */
export type DataQualityJobDefinition_Properties = {
  JobDefinitionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-jobdefinitionname}
   */
  JobDefinitionName?: JobDefinitionName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig}
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification}
   */
  DataQualityAppSpecification: DataQualityAppSpecification;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjobinput}
   */
  DataQualityJobInput: DataQualityJobInput;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjoboutputconfig}
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-jobresources}
   */
  JobResources: MonitoringResources;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig}
   */
  NetworkConfig?: NetworkConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-rolearn}
   */
  RoleArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-stoppingcondition}
   */
  StoppingCondition?: StoppingCondition;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-tags}
   */
  Tags?: Tag[];
  CreationTime?: string;
};

/**
 * Baseline configuration used to validate that the data conforms to the
 * specified constraints and statistics. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html}
 */
export type DataQualityBaselineConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-baseliningjobname}
   */
  BaseliningJobName?: ProcessingJobName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-constraintsresource}
   */
  ConstraintsResource?: ConstraintsResource;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-statisticsresource}
   */
  StatisticsResource?: StatisticsResource;
};

/**
 * The baseline constraints resource for a monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-constraintsresource.html}
 */
export type ConstraintsResource = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-constraintsresource.html#cfn-sagemaker-dataqualityjobdefinition-constraintsresource-s3uri}
   */
  S3Uri?: S3Uri;
};

/**
 * The baseline statistics resource for a monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-statisticsresource.html}
 */
export type StatisticsResource = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-statisticsresource.html#cfn-sagemaker-dataqualityjobdefinition-statisticsresource-s3uri}
   */
  S3Uri?: S3Uri;
};

export type S3Uri = string;

/**
 * Container image configuration object for the monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html}
 */
export type DataQualityAppSpecification = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-containerarguments}
   */
  ContainerArguments?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-containerentrypoint}
   */
  ContainerEntrypoint?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-imageuri}
   */
  ImageUri: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-postanalyticsprocessorsourceuri}
   */
  PostAnalyticsProcessorSourceUri?: S3Uri;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-recordpreprocessorsourceuri}
   */
  RecordPreprocessorSourceUri?: S3Uri;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-environment}
   */
  Environment?: {
    [k: string]: string;
  };
};

/**
 * The inputs for a monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityjobinput.html}
 */
export type DataQualityJobInput = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityjobinput.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjobinput-endpointinput}
   */
  EndpointInput: EndpointInput;
};

/**
 * The endpoint for a monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html}
 */
export type EndpointInput = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-endpointname}
   */
  EndpointName: EndpointName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-localpath}
   */
  LocalPath: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-s3datadistributiontype}
   */
  S3DataDistributionType?: 'FullyReplicated' | 'ShardedByS3Key';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-s3inputmode}
   */
  S3InputMode?: 'Pipe' | 'File';
};

/**
 * The output configuration for monitoring jobs. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html}
 */
export type MonitoringOutputConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-dataqualityjobdefinition-monitoringoutputconfig-kmskeyid}
   */
  KmsKeyId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-dataqualityjobdefinition-monitoringoutputconfig-monitoringoutputs}
   */
  MonitoringOutputs: MonitoringOutput[];
};

/**
 * The output object for a monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutput.html}
 */
export type MonitoringOutput = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutput.html#cfn-sagemaker-dataqualityjobdefinition-monitoringoutput-s3output}
   */
  S3Output: S3Output;
};

/**
 * Information about where and how to store the results of a monitoring
 * job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html}
 */
export type S3Output = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html#cfn-sagemaker-dataqualityjobdefinition-s3output-localpath}
   */
  LocalPath: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html#cfn-sagemaker-dataqualityjobdefinition-s3output-s3uploadmode}
   */
  S3UploadMode?: 'Continuous' | 'EndOfJob';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html#cfn-sagemaker-dataqualityjobdefinition-s3output-s3uri}
   */
  S3Uri: string;
};

/**
 * Identifies the resources to deploy for a monitoring job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringresources.html}
 */
export type MonitoringResources = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringresources.html#cfn-sagemaker-dataqualityjobdefinition-monitoringresources-clusterconfig}
   */
  ClusterConfig: ClusterConfig;
};

/**
 * Configuration for the cluster used to run model monitoring jobs.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html}
 */
export type ClusterConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-instancecount}
   */
  InstanceCount: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-instancetype}
   */
  InstanceType: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-volumekmskeyid}
   */
  VolumeKmsKeyId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-volumesizeingb}
   */
  VolumeSizeInGB: number;
};

/**
 * Networking options for a job, such as network traffic encryption
 * between containers, whether to allow inbound and outbound network
 * calls to and from containers, and the VPC subnets and security groups
 * to use for VPC-enabled jobs. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html}
 */
export type NetworkConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig-enableintercontainertrafficencryption}
   */
  EnableInterContainerTrafficEncryption?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig-enablenetworkisolation}
   */
  EnableNetworkIsolation?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig-vpcconfig}
   */
  VpcConfig?: VpcConfig;
};

/**
 * Specifies a VPC that your training jobs and hosted models have access
 * to. Control access to and from your training and model containers by
 * configuring the VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html#cfn-sagemaker-dataqualityjobdefinition-vpcconfig-securitygroupids}
   */
  SecurityGroupIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html#cfn-sagemaker-dataqualityjobdefinition-vpcconfig-subnets}
   */
  Subnets: string[];
};

/**
 * Specifies a time limit for how long the monitoring job is allowed to
 * run. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-stoppingcondition.html}
 */
export type StoppingCondition = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-stoppingcondition.html#cfn-sagemaker-dataqualityjobdefinition-stoppingcondition-maxruntimeinseconds}
   */
  MaxRuntimeInSeconds: number;
};

export type Tag = {
  Key: string;
  Value: string;
};

export type EndpointName = string;

export type JobDefinitionName = string;

export type ProcessingJobName = string;
