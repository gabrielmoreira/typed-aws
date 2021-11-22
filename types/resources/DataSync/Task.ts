// CloudFormation Resource AWS::DataSync::Task

import { CfnResource, Resolvable } from '../../base';

export type Task_Type = 'AWS::DataSync::Task';
export const Task_Type = 'AWS::DataSync::Task';

/**
 * Resource schema for AWS::DataSync::Task. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html}
 */
export default function Task(props: Task_Properties) {
  return new CfnResource<Task_Properties>(Task_Type, props);
}

/**
 * Resource schema for AWS::DataSync::Task. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html}
 */
export type Task_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-excludes}
   */
  Excludes?: FilterRule[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-includes}
   */
  Includes?: FilterRule[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-cloudwatchloggrouparn}
   */
  CloudWatchLogGroupArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-destinationlocationarn}
   */
  DestinationLocationArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options}
   */
  Options?: Options;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-schedule}
   */
  Schedule?: TaskSchedule;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-sourcelocationarn}
   */
  SourceLocationArn: Resolvable<string>;
  TaskArn?: Resolvable<string>;
  ErrorCode?: Resolvable<string>;
  ErrorDetail?: Resolvable<string>;
  Status?: Resolvable<
    'AVAILABLE' | 'CREATING' | 'QUEUED' | 'RUNNING' | 'UNAVAILABLE'
  >;
  SourceNetworkInterfaceArns?: SourceNetworkInterfaceArns;
  DestinationNetworkInterfaceArns?: DestinationNetworkInterfaceArns;
};

/**
 * Specifies which files folders and objects to include or exclude when
 * transferring files from source to destination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html}
 */
export type FilterRule = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html#cfn-datasync-task-filterrule-filtertype}
   */
  FilterType?: Resolvable<'SIMPLE_PATTERN'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html#cfn-datasync-task-filterrule-value}
   */
  Value?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};

/**
 * Specifies the schedule you want your task to use for repeated
 * executions. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html}
 */
export type TaskSchedule = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html#cfn-datasync-task-taskschedule-scheduleexpression}
   */
  ScheduleExpression: Resolvable<string>;
};

/**
 * Represents the options that are available to control the behavior of a
 * StartTaskExecution operation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html}
 */
export type Options = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-atime}
   */
  Atime?: Resolvable<'NONE' | 'BEST_EFFORT'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-bytespersecond}
   */
  BytesPerSecond?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-gid}
   */
  Gid?: Resolvable<'NONE' | 'INT_VALUE' | 'NAME' | 'BOTH'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-loglevel}
   */
  LogLevel?: Resolvable<'OFF' | 'BASIC' | 'TRANSFER'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-mtime}
   */
  Mtime?: Resolvable<'NONE' | 'PRESERVE'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-overwritemode}
   */
  OverwriteMode?: Resolvable<'ALWAYS' | 'NEVER'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-posixpermissions}
   */
  PosixPermissions?: Resolvable<'NONE' | 'PRESERVE'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-preservedeletedfiles}
   */
  PreserveDeletedFiles?: Resolvable<'PRESERVE' | 'REMOVE'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-preservedevices}
   */
  PreserveDevices?: Resolvable<'NONE' | 'PRESERVE'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-securitydescriptorcopyflags}
   */
  SecurityDescriptorCopyFlags?: Resolvable<
    'NONE' | 'OWNER_DACL' | 'OWNER_DACL_SACL'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-taskqueueing}
   */
  TaskQueueing?: Resolvable<'ENABLED' | 'DISABLED'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-transfermode}
   */
  TransferMode?: Resolvable<'CHANGED' | 'ALL'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-uid}
   */
  Uid?: Resolvable<'NONE' | 'INT_VALUE' | 'NAME' | 'BOTH'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html#cfn-datasync-task-options-verifymode}
   */
  VerifyMode?: Resolvable<
    'POINT_IN_TIME_CONSISTENT' | 'ONLY_FILES_TRANSFERRED' | 'NONE'
  >;
};

export type SourceNetworkInterfaceArns = Resolvable<string>[];

export type DestinationNetworkInterfaceArns = Resolvable<string>[];
