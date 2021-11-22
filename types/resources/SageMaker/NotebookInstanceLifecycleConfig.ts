// CloudFormation Resource AWS::SageMaker::NotebookInstanceLifecycleConfig

import { CfnResource, Resolvable } from '../../base';

export type NotebookInstanceLifecycleConfig_Type =
  'AWS::SageMaker::NotebookInstanceLifecycleConfig';
export const NotebookInstanceLifecycleConfig_Type =
  'AWS::SageMaker::NotebookInstanceLifecycleConfig';

/**
 * Resource Type definition for
 * AWS::SageMaker::NotebookInstanceLifecycleConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html}
 */
export default function NotebookInstanceLifecycleConfig(
  props: NotebookInstanceLifecycleConfig_Properties
) {
  return new CfnResource<NotebookInstanceLifecycleConfig_Properties>(
    NotebookInstanceLifecycleConfig_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::SageMaker::NotebookInstanceLifecycleConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html}
 */
export type NotebookInstanceLifecycleConfig_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-onstart}
   */
  OnStart?: NotebookInstanceLifecycleHook[];
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecycleconfigname}
   */
  NotebookInstanceLifecycleConfigName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-oncreate}
   */
  OnCreate?: NotebookInstanceLifecycleHook[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html}
 */
export type NotebookInstanceLifecycleHook = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-content}
   */
  Content?: Resolvable<string>;
};
