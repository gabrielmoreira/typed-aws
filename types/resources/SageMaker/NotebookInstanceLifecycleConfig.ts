// CloudFormation Resource AWS::SageMaker::NotebookInstanceLifecycleConfig

import { CFResource } from '../../base';

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
  return new CFResource<
    NotebookInstanceLifecycleConfig_Type,
    NotebookInstanceLifecycleConfig_Properties
  >(NotebookInstanceLifecycleConfig_Type, props);
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
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecycleconfigname}
   */
  NotebookInstanceLifecycleConfigName?: string;
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
  Content?: string;
};
