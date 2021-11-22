// CloudFormation Resource AWS::SageMaker::ImageVersion

import { CfnResource, Resolvable } from '../../base';

export type ImageVersion_Type = 'AWS::SageMaker::ImageVersion';
export const ImageVersion_Type = 'AWS::SageMaker::ImageVersion';

/**
 * Resource Type definition for AWS::SageMaker::ImageVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html}
 */
export default function ImageVersion(props: ImageVersion_Properties) {
  return new CfnResource<ImageVersion_Properties>(ImageVersion_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::ImageVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html}
 */
export type ImageVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-imagename}
   */
  ImageName: ImageName;
  ImageArn?: ImageArn;
  ImageVersionArn?: ImageVersionArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-baseimage}
   */
  BaseImage: BaseImage;
  ContainerImage?: ContainerImage;
  Version?: Version;
};

export type ImageName = Resolvable<string>;

export type ImageArn = Resolvable<string>;

export type ImageVersionArn = Resolvable<string>;

export type BaseImage = Resolvable<string>;

export type ContainerImage = Resolvable<string>;

export type Version = Resolvable<number>;
