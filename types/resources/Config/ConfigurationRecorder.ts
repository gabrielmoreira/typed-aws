// CloudFormation Resource AWS::Config::ConfigurationRecorder

import { CfnResource, Resolvable } from '../../base';

export type ConfigurationRecorder_Type = 'AWS::Config::ConfigurationRecorder';
export const ConfigurationRecorder_Type = 'AWS::Config::ConfigurationRecorder';

/**
 * Resource Type definition for AWS::Config::ConfigurationRecorder {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 */
export default function ConfigurationRecorder(
  props: ConfigurationRecorder_Properties
) {
  return new CfnResource<ConfigurationRecorder_Properties>(
    ConfigurationRecorder_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Config::ConfigurationRecorder {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 */
export type ConfigurationRecorder_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup}
   */
  RecordingGroup?: RecordingGroup;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-rolearn}
   */
  RoleARN: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-name}
   */
  Name?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html}
 */
export type RecordingGroup = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-includeglobalresourcetypes}
   */
  IncludeGlobalResourceTypes?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-resourcetypes}
   */
  ResourceTypes?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html#cfn-config-configurationrecorder-recordinggroup-allsupported}
   */
  AllSupported?: Resolvable<boolean>;
};
