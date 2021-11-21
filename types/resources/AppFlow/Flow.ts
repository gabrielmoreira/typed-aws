// CloudFormation Resource AWS::AppFlow::Flow

import { CfnResource } from '../../base';

export type Flow_Type = 'AWS::AppFlow::Flow';
export const Flow_Type = 'AWS::AppFlow::Flow';

/**
 * Resource schema for AWS::AppFlow::Flow. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html}
 */
export default function Flow(props: Flow_Properties) {
  return new CfnResource<Flow_Properties>(Flow_Type, props);
}

/**
 * Resource schema for AWS::AppFlow::Flow. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html}
 */
export type Flow_Properties = {
  FlowArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-flowname}
   */
  FlowName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-kmsarn}
   */
  KMSArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-triggerconfig}
   */
  TriggerConfig: TriggerConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig}
   */
  SourceFlowConfig: SourceFlowConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationflowconfiglist}
   */
  DestinationFlowConfigList: DestinationFlowConfig[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-tasks}
   */
  Tasks: Task[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-tags}
   */
  Tags?: Tag[];
};

/**
 * Trigger settings of the flow. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggerconfig.html}
 */
export type TriggerConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggerconfig.html#cfn-appflow-flow-triggerconfig-triggertype}
   */
  TriggerType: TriggerType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggerconfig.html#cfn-appflow-flow-triggerconfig-triggerproperties}
   */
  TriggerProperties?: ScheduledTriggerProperties;
};

/**
 * Configurations of Source connector of the flow. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html}
 */
export type SourceFlowConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html#cfn-appflow-flow-sourceflowconfig-connectortype}
   */
  ConnectorType: ConnectorType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html#cfn-appflow-flow-sourceflowconfig-connectorprofilename}
   */
  ConnectorProfileName?: ConnectorProfileName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html#cfn-appflow-flow-sourceflowconfig-sourceconnectorproperties}
   */
  SourceConnectorProperties: SourceConnectorProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html#cfn-appflow-flow-sourceflowconfig-incrementalpullconfig}
   */
  IncrementalPullConfig?: IncrementalPullConfig;
};

/**
 * Configurations of destination connector. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html}
 */
export type DestinationFlowConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html#cfn-appflow-flow-destinationflowconfig-connectortype}
   */
  ConnectorType: ConnectorType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html#cfn-appflow-flow-destinationflowconfig-connectorprofilename}
   */
  ConnectorProfileName?: ConnectorProfileName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html#cfn-appflow-flow-destinationflowconfig-destinationconnectorproperties}
   */
  DestinationConnectorProperties: DestinationConnectorProperties;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html}
 */
export type Task = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html#cfn-appflow-flow-task-sourcefields}
   */
  SourceFields: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html#cfn-appflow-flow-task-connectoroperator}
   */
  ConnectorOperator?: ConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html#cfn-appflow-flow-task-destinationfield}
   */
  DestinationField?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html#cfn-appflow-flow-task-tasktype}
   */
  TaskType: TaskType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html#cfn-appflow-flow-task-taskproperties}
   */
  TaskProperties?: TaskPropertiesObject[];
};

export type Tag = {
  Key: string;
  Value: string;
};

/**
 * Destination connector details {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html}
 */
export type DestinationConnectorProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-redshift}
   */
  Redshift?: RedshiftDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-s3}
   */
  S3?: S3DestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-salesforce}
   */
  Salesforce?: SalesforceDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-snowflake}
   */
  Snowflake?: SnowflakeDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-eventbridge}
   */
  EventBridge?: EventBridgeDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-upsolver}
   */
  Upsolver?: UpsolverDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-lookoutmetrics}
   */
  LookoutMetrics?: LookoutMetricsDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html#cfn-appflow-flow-destinationconnectorproperties-zendesk}
   */
  Zendesk?: ZendeskDestinationProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html}
   */
  [k: string]: unknown;
};

/**
 * Configuration for scheduled incremental data pull {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-incrementalpullconfig.html}
 */
export type IncrementalPullConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-incrementalpullconfig.html#cfn-appflow-flow-incrementalpullconfig-datetimetypefieldname}
   */
  DatetimeTypeFieldName?: DatetimeTypeFieldName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-incrementalpullconfig.html}
   */
  [k: string]: unknown;
};

/**
 * Source connector details required to query a connector {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html}
 */
export type SourceConnectorProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-amplitude}
   */
  Amplitude?: AmplitudeSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-datadog}
   */
  Datadog?: DatadogSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-dynatrace}
   */
  Dynatrace?: DynatraceSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-googleanalytics}
   */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-infornexus}
   */
  InforNexus?: InforNexusSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-marketo}
   */
  Marketo?: MarketoSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-s3}
   */
  S3?: S3SourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-sapodata}
   */
  SAPOData?: SAPODataSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-salesforce}
   */
  Salesforce?: SalesforceSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-servicenow}
   */
  ServiceNow?: ServiceNowSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-singular}
   */
  Singular?: SingularSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-slack}
   */
  Slack?: SlackSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-trendmicro}
   */
  Trendmicro?: TrendmicroSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-veeva}
   */
  Veeva?: VeevaSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html#cfn-appflow-flow-sourceconnectorproperties-zendesk}
   */
  Zendesk?: ZendeskSourceProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html}
   */
  [k: string]: unknown;
};

/**
 * Operation to be performed on provided source fields {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html}
 */
export type ConnectorOperator = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-amplitude}
   */
  Amplitude?: AmplitudeConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-datadog}
   */
  Datadog?: DatadogConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-dynatrace}
   */
  Dynatrace?: DynatraceConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-googleanalytics}
   */
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-infornexus}
   */
  InforNexus?: InforNexusConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-marketo}
   */
  Marketo?: MarketoConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-s3}
   */
  S3?: S3ConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-sapodata}
   */
  SAPOData?: SAPODataConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-salesforce}
   */
  Salesforce?: SalesforceConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-servicenow}
   */
  ServiceNow?: ServiceNowConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-singular}
   */
  Singular?: SingularConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-slack}
   */
  Slack?: SlackConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-trendmicro}
   */
  Trendmicro?: TrendmicroConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-veeva}
   */
  Veeva?: VeevaConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html#cfn-appflow-flow-connectoroperator-zendesk}
   */
  Zendesk?: ZendeskConnectorOperator;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html}
   */
  [k: string]: unknown;
};

/**
 * Details required for scheduled trigger type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html}
 */
export type ScheduledTriggerProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html#cfn-appflow-flow-scheduledtriggerproperties-scheduleexpression}
   */
  ScheduleExpression: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html#cfn-appflow-flow-scheduledtriggerproperties-datapullmode}
   */
  DataPullMode?: 'Incremental' | 'Complete';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html#cfn-appflow-flow-scheduledtriggerproperties-schedulestarttime}
   */
  ScheduleStartTime?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html#cfn-appflow-flow-scheduledtriggerproperties-scheduleendtime}
   */
  ScheduleEndTime?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html#cfn-appflow-flow-scheduledtriggerproperties-timezone}
   */
  TimeZone?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html#cfn-appflow-flow-scheduledtriggerproperties-scheduleoffset}
   */
  ScheduleOffset?: number;
};

export type TriggerType = 'Scheduled' | 'Event' | 'OnDemand';

export type Object = string;

export type EnableDynamicFieldUpdate = boolean;

export type IncludeDeletedRecords = boolean;

export type IncludeAllVersions = boolean;

export type IncludeRenditions = boolean;

export type IncludeSourceFiles = boolean;

export type DocumentType = string;

export type BucketName = string;

export type UpsolverBucketName = string;

export type BucketPrefix = string;

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3inputformatconfig.html}
 */
export type S3InputFormatConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3inputformatconfig.html#cfn-appflow-flow-s3inputformatconfig-s3inputfiletype}
   */
  S3InputFileType?: 'CSV' | 'JSON';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3inputformatconfig.html}
   */
  [k: string]: unknown;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html}
 */
export type ErrorHandlingConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html#cfn-appflow-flow-errorhandlingconfig-failonfirsterror}
   */
  FailOnFirstError?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html#cfn-appflow-flow-errorhandlingconfig-bucketprefix}
   */
  BucketPrefix?: BucketPrefix;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html#cfn-appflow-flow-errorhandlingconfig-bucketname}
   */
  BucketName?: BucketName;
};

export type Name = string;

export type WriteOperationType = 'INSERT' | 'UPSERT' | 'UPDATE';

export type FileType = 'CSV' | 'JSON' | 'PARQUET';

export type AggregationType = 'None' | 'SingleFile';

export type PrefixType = 'FILENAME' | 'PATH' | 'PATH_AND_FILENAME';

export type PrefixFormat = 'YEAR' | 'MONTH' | 'DAY' | 'HOUR' | 'MINUTE';

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixconfig.html}
 */
export type PrefixConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixconfig.html#cfn-appflow-flow-prefixconfig-prefixtype}
   */
  PrefixType?: PrefixType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixconfig.html#cfn-appflow-flow-prefixconfig-prefixformat}
   */
  PrefixFormat?: PrefixFormat;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationconfig.html}
 */
export type AggregationConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationconfig.html#cfn-appflow-flow-aggregationconfig-aggregationtype}
   */
  AggregationType?: AggregationType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationconfig.html}
   */
  [k: string]: unknown;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html}
 */
export type S3OutputFormatConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html#cfn-appflow-flow-s3outputformatconfig-filetype}
   */
  FileType?: FileType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html#cfn-appflow-flow-s3outputformatconfig-prefixconfig}
   */
  PrefixConfig?: PrefixConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html#cfn-appflow-flow-s3outputformatconfig-aggregationconfig}
   */
  AggregationConfig?: AggregationConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html}
 */
export type UpsolverS3OutputFormatConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html#cfn-appflow-flow-upsolvers3outputformatconfig-filetype}
   */
  FileType?: FileType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html#cfn-appflow-flow-upsolvers3outputformatconfig-prefixconfig}
   */
  PrefixConfig: PrefixConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html#cfn-appflow-flow-upsolvers3outputformatconfig-aggregationconfig}
   */
  AggregationConfig?: AggregationConfig;
};

export type ConnectorType =
  | 'SAPOData'
  | 'Salesforce'
  | 'Singular'
  | 'Slack'
  | 'Redshift'
  | 'S3'
  | 'Marketo'
  | 'Googleanalytics'
  | 'Zendesk'
  | 'Servicenow'
  | 'Datadog'
  | 'Trendmicro'
  | 'Snowflake'
  | 'Dynatrace'
  | 'Infornexus'
  | 'Amplitude'
  | 'Veeva'
  | 'EventBridge'
  | 'Upsolver'
  | 'LookoutMetrics';

export type ConnectorProfileName = string;

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-amplitudesourceproperties.html}
 */
export type AmplitudeSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-amplitudesourceproperties.html#cfn-appflow-flow-amplitudesourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datadogsourceproperties.html}
 */
export type DatadogSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datadogsourceproperties.html#cfn-appflow-flow-datadogsourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-dynatracesourceproperties.html}
 */
export type DynatraceSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-dynatracesourceproperties.html#cfn-appflow-flow-dynatracesourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-googleanalyticssourceproperties.html}
 */
export type GoogleAnalyticsSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-googleanalyticssourceproperties.html#cfn-appflow-flow-googleanalyticssourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-infornexussourceproperties.html}
 */
export type InforNexusSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-infornexussourceproperties.html#cfn-appflow-flow-infornexussourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketosourceproperties.html}
 */
export type MarketoSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketosourceproperties.html#cfn-appflow-flow-marketosourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html}
 */
export type S3SourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html#cfn-appflow-flow-s3sourceproperties-bucketname}
   */
  BucketName: BucketName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html#cfn-appflow-flow-s3sourceproperties-bucketprefix}
   */
  BucketPrefix: BucketPrefix;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html#cfn-appflow-flow-s3sourceproperties-s3inputformatconfig}
   */
  S3InputFormatConfig?: S3InputFormatConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatasourceproperties.html}
 */
export type SAPODataSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatasourceproperties.html#cfn-appflow-flow-sapodatasourceproperties-objectpath}
   */
  ObjectPath: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html}
 */
export type SalesforceSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html#cfn-appflow-flow-salesforcesourceproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html#cfn-appflow-flow-salesforcesourceproperties-enabledynamicfieldupdate}
   */
  EnableDynamicFieldUpdate?: EnableDynamicFieldUpdate;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html#cfn-appflow-flow-salesforcesourceproperties-includedeletedrecords}
   */
  IncludeDeletedRecords?: IncludeDeletedRecords;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-servicenowsourceproperties.html}
 */
export type ServiceNowSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-servicenowsourceproperties.html#cfn-appflow-flow-servicenowsourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-singularsourceproperties.html}
 */
export type SingularSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-singularsourceproperties.html#cfn-appflow-flow-singularsourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-slacksourceproperties.html}
 */
export type SlackSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-slacksourceproperties.html#cfn-appflow-flow-slacksourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-trendmicrosourceproperties.html}
 */
export type TrendmicroSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-trendmicrosourceproperties.html#cfn-appflow-flow-trendmicrosourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html}
 */
export type VeevaSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html#cfn-appflow-flow-veevasourceproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html#cfn-appflow-flow-veevasourceproperties-documenttype}
   */
  DocumentType?: DocumentType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html#cfn-appflow-flow-veevasourceproperties-includesourcefiles}
   */
  IncludeSourceFiles?: IncludeSourceFiles;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html#cfn-appflow-flow-veevasourceproperties-includerenditions}
   */
  IncludeRenditions?: IncludeRenditions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html#cfn-appflow-flow-veevasourceproperties-includeallversions}
   */
  IncludeAllVersions?: IncludeAllVersions;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendesksourceproperties.html}
 */
export type ZendeskSourceProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendesksourceproperties.html#cfn-appflow-flow-zendesksourceproperties-object}
   */
  Object: Object;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html}
 */
export type ZendeskDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html#cfn-appflow-flow-zendeskdestinationproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html#cfn-appflow-flow-zendeskdestinationproperties-errorhandlingconfig}
   */
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html#cfn-appflow-flow-zendeskdestinationproperties-idfieldnames}
   */
  IdFieldNames?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html#cfn-appflow-flow-zendeskdestinationproperties-writeoperationtype}
   */
  WriteOperationType?: WriteOperationType;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html}
 */
export type RedshiftDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html#cfn-appflow-flow-redshiftdestinationproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html#cfn-appflow-flow-redshiftdestinationproperties-intermediatebucketname}
   */
  IntermediateBucketName: BucketName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html#cfn-appflow-flow-redshiftdestinationproperties-bucketprefix}
   */
  BucketPrefix?: BucketPrefix;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html#cfn-appflow-flow-redshiftdestinationproperties-errorhandlingconfig}
   */
  ErrorHandlingConfig?: ErrorHandlingConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html}
 */
export type S3DestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html#cfn-appflow-flow-s3destinationproperties-bucketname}
   */
  BucketName: BucketName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html#cfn-appflow-flow-s3destinationproperties-bucketprefix}
   */
  BucketPrefix?: BucketPrefix;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html#cfn-appflow-flow-s3destinationproperties-s3outputformatconfig}
   */
  S3OutputFormatConfig?: S3OutputFormatConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html}
 */
export type SalesforceDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html#cfn-appflow-flow-salesforcedestinationproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html#cfn-appflow-flow-salesforcedestinationproperties-errorhandlingconfig}
   */
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html#cfn-appflow-flow-salesforcedestinationproperties-idfieldnames}
   */
  IdFieldNames?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html#cfn-appflow-flow-salesforcedestinationproperties-writeoperationtype}
   */
  WriteOperationType?: WriteOperationType;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html}
 */
export type SnowflakeDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html#cfn-appflow-flow-snowflakedestinationproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html#cfn-appflow-flow-snowflakedestinationproperties-intermediatebucketname}
   */
  IntermediateBucketName: BucketName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html#cfn-appflow-flow-snowflakedestinationproperties-bucketprefix}
   */
  BucketPrefix?: BucketPrefix;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html#cfn-appflow-flow-snowflakedestinationproperties-errorhandlingconfig}
   */
  ErrorHandlingConfig?: ErrorHandlingConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-eventbridgedestinationproperties.html}
 */
export type EventBridgeDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-eventbridgedestinationproperties.html#cfn-appflow-flow-eventbridgedestinationproperties-object}
   */
  Object: Object;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-eventbridgedestinationproperties.html#cfn-appflow-flow-eventbridgedestinationproperties-errorhandlingconfig}
   */
  ErrorHandlingConfig?: ErrorHandlingConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html}
 */
export type UpsolverDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html#cfn-appflow-flow-upsolverdestinationproperties-bucketname}
   */
  BucketName: UpsolverBucketName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html#cfn-appflow-flow-upsolverdestinationproperties-bucketprefix}
   */
  BucketPrefix?: BucketPrefix;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html#cfn-appflow-flow-upsolverdestinationproperties-s3outputformatconfig}
   */
  S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-lookoutmetricsdestinationproperties.html}
 */
export type LookoutMetricsDestinationProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-lookoutmetricsdestinationproperties.html#cfn-appflow-flow-lookoutmetricsdestinationproperties-object}
   */
  Object?: Object;
};

export type DatetimeTypeFieldName = string;

export type TaskType =
  | 'Arithmetic'
  | 'Filter'
  | 'Map'
  | 'Map_all'
  | 'Mask'
  | 'Merge'
  | 'Truncate'
  | 'Validate';

export type OperatorPropertiesKeys =
  | 'VALUE'
  | 'VALUES'
  | 'DATA_TYPE'
  | 'UPPER_BOUND'
  | 'LOWER_BOUND'
  | 'SOURCE_DATA_TYPE'
  | 'DESTINATION_DATA_TYPE'
  | 'VALIDATION_ACTION'
  | 'MASK_VALUE'
  | 'MASK_LENGTH'
  | 'TRUNCATE_LENGTH'
  | 'MATH_OPERATION_FIELDS_ORDER'
  | 'CONCAT_FORMAT'
  | 'SUBFIELD_CATEGORY_MAP'
  | 'EXCLUDE_SOURCE_FIELDS_LIST';

/**
 * An object used to store task related info {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-taskpropertiesobject.html}
 */
export type TaskPropertiesObject = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-taskpropertiesobject.html#cfn-appflow-flow-taskpropertiesobject-key}
   */
  Key: OperatorPropertiesKeys;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-taskpropertiesobject.html#cfn-appflow-flow-taskpropertiesobject-value}
   */
  Value: string;
};

export type AmplitudeConnectorOperator = 'BETWEEN';

export type DatadogConnectorOperator =
  | 'PROJECTION'
  | 'BETWEEN'
  | 'EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type DynatraceConnectorOperator =
  | 'PROJECTION'
  | 'BETWEEN'
  | 'EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type GoogleAnalyticsConnectorOperator = 'PROJECTION' | 'BETWEEN';

export type InforNexusConnectorOperator =
  | 'PROJECTION'
  | 'BETWEEN'
  | 'EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type MarketoConnectorOperator =
  | 'PROJECTION'
  | 'LESS_THAN'
  | 'GREATER_THAN'
  | 'BETWEEN'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type S3ConnectorOperator =
  | 'PROJECTION'
  | 'LESS_THAN'
  | 'GREATER_THAN'
  | 'BETWEEN'
  | 'LESS_THAN_OR_EQUAL_TO'
  | 'GREATER_THAN_OR_EQUAL_TO'
  | 'EQUAL_TO'
  | 'NOT_EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type SAPODataConnectorOperator =
  | 'PROJECTION'
  | 'LESS_THAN'
  | 'CONTAINS'
  | 'GREATER_THAN'
  | 'BETWEEN'
  | 'LESS_THAN_OR_EQUAL_TO'
  | 'GREATER_THAN_OR_EQUAL_TO'
  | 'EQUAL_TO'
  | 'NOT_EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type SalesforceConnectorOperator =
  | 'PROJECTION'
  | 'LESS_THAN'
  | 'CONTAINS'
  | 'GREATER_THAN'
  | 'BETWEEN'
  | 'LESS_THAN_OR_EQUAL_TO'
  | 'GREATER_THAN_OR_EQUAL_TO'
  | 'EQUAL_TO'
  | 'NOT_EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type ServiceNowConnectorOperator =
  | 'PROJECTION'
  | 'LESS_THAN'
  | 'CONTAINS'
  | 'GREATER_THAN'
  | 'BETWEEN'
  | 'LESS_THAN_OR_EQUAL_TO'
  | 'GREATER_THAN_OR_EQUAL_TO'
  | 'EQUAL_TO'
  | 'NOT_EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type SingularConnectorOperator =
  | 'PROJECTION'
  | 'EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type SlackConnectorOperator =
  | 'PROJECTION'
  | 'BETWEEN'
  | 'EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type TrendmicroConnectorOperator =
  | 'PROJECTION'
  | 'EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type VeevaConnectorOperator =
  | 'PROJECTION'
  | 'LESS_THAN'
  | 'GREATER_THAN'
  | 'BETWEEN'
  | 'LESS_THAN_OR_EQUAL_TO'
  | 'GREATER_THAN_OR_EQUAL_TO'
  | 'EQUAL_TO'
  | 'NOT_EQUAL_TO'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type ZendeskConnectorOperator =
  | 'PROJECTION'
  | 'GREATER_THAN'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'
  | 'SUBTRACTION'
  | 'MASK_ALL'
  | 'MASK_FIRST_N'
  | 'MASK_LAST_N'
  | 'VALIDATE_NON_NULL'
  | 'VALIDATE_NON_ZERO'
  | 'VALIDATE_NON_NEGATIVE'
  | 'VALIDATE_NUMERIC'
  | 'NO_OP';

export type Status = 'Active' | 'Draft' | 'Errored' | 'Suspended';
