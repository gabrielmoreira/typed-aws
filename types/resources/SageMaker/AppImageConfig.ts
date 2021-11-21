// CloudFormation Resource AWS::SageMaker::AppImageConfig

import { CFResource } from '../../base';

export type AppImageConfig_Type = 'AWS::SageMaker::AppImageConfig';
export const AppImageConfig_Type = 'AWS::SageMaker::AppImageConfig';

/**
 * Resource Type definition for AWS::SageMaker::AppImageConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html}
 */
export default function AppImageConfig(props: AppImageConfig_Properties) {
  return new CFResource<AppImageConfig_Type, AppImageConfig_Properties>(
    AppImageConfig_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::SageMaker::AppImageConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html}
 */
export type AppImageConfig_Properties = {
  AppImageConfigArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-appimageconfigname}
   */
  AppImageConfigName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig}
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-tags}
   */
  Tags?: Tag[];
};

/**
 * The configuration for the file system and kernels in a SageMaker image
 * running as a KernelGateway app. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html}
 */
export type KernelGatewayImageConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-filesystemconfig}
   */
  FileSystemConfig?: FileSystemConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-kernelspecs}
   */
  KernelSpecs: KernelSpec[];
};

/**
 * The Amazon Elastic File System (EFS) storage configuration for a
 * SageMaker image. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html}
 */
export type FileSystemConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html#cfn-sagemaker-appimageconfig-filesystemconfig-defaultgid}
   */
  DefaultGid?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html#cfn-sagemaker-appimageconfig-filesystemconfig-defaultuid}
   */
  DefaultUid?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html#cfn-sagemaker-appimageconfig-filesystemconfig-mountpath}
   */
  MountPath?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html}
 */
export type KernelSpec = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html#cfn-sagemaker-appimageconfig-kernelspec-displayname}
   */
  DisplayName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html#cfn-sagemaker-appimageconfig-kernelspec-name}
   */
  Name: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
