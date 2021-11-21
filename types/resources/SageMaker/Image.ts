// CloudFormation Resource AWS::SageMaker::Image

import { CFResource } from '../../base';

export type Image_Type = 'AWS::SageMaker::Image';
export const Image_Type = 'AWS::SageMaker::Image';

/**
 * Resource Type definition for AWS::SageMaker::Image {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html}
 */
export default function Image(props: Image_Properties) {
  return new CFResource<Image_Type, Image_Properties>(Image_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::Image {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html}
 */
export type Image_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagename}
   */
  ImageName: ImageName;
  ImageArn?: ImageArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagerolearn}
   */
  ImageRoleArn: ImageRoleArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagedisplayname}
   */
  ImageDisplayName?: ImageDisplayName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagedescription}
   */
  ImageDescription?: ImageDescription;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-tags}
   */
  Tags?: Tag[];
};

export type ImageName = string;

export type ImageArn = string;

export type ImageRoleArn = string;

export type ImageDisplayName = string;

export type ImageDescription = string;

export type Tag = {
  Key: string;
  Value: string;
};
