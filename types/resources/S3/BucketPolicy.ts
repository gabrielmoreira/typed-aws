// CloudFormation Resource AWS::S3::BucketPolicy

import { CfnResource } from '../../base';

export type BucketPolicy_Type = 'AWS::S3::BucketPolicy';
export const BucketPolicy_Type = 'AWS::S3::BucketPolicy';

/**
 * Resource Type definition for AWS::S3::BucketPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html}
 */
export default function BucketPolicy(props: BucketPolicy_Properties) {
  return new CfnResource<BucketPolicy_Properties>(BucketPolicy_Type, props);
}

/**
 * Resource Type definition for AWS::S3::BucketPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html}
 */
export type BucketPolicy_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html#aws-properties-s3-policy-bucket}
   */
  Bucket: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html#aws-properties-s3-policy-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
};
