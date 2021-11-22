// CloudFormation Resource AWS::SageMaker::Image

import { CfnResource, Resolvable } from '../../base';

export type Image_Type = 'AWS::SageMaker::Image';
export const Image_Type = 'AWS::SageMaker::Image';

/**
 * Resource Type definition for AWS::SageMaker::Image {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html}
 */
export default function Image(props: Image_Properties) {
  return new CfnResource<Image_Properties>(Image_Type, props);
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

export type ImageName = Resolvable<string>;

export type ImageArn = Resolvable<string>;

export type ImageRoleArn = Resolvable<string>;

export type ImageDisplayName = Resolvable<string>;

export type ImageDescription = Resolvable<string>;

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
