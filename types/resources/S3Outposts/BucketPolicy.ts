// CloudFormation Resource AWS::S3Outposts::BucketPolicy

import { CFResource } from '../../base';

export type BucketPolicy_Type = 'AWS::S3Outposts::BucketPolicy';
export const BucketPolicy_Type = 'AWS::S3Outposts::BucketPolicy';

/**
 * Resource Type Definition for AWS::S3Outposts::BucketPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html}
 */
export default function BucketPolicy(props: BucketPolicy_Properties) {
  return new CFResource<BucketPolicy_Type, BucketPolicy_Properties>(
    BucketPolicy_Type,
    props
  );
}

/**
 * Resource Type Definition for AWS::S3Outposts::BucketPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html}
 */
export type BucketPolicy_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html#cfn-s3outposts-bucketpolicy-bucket}
   */
  Bucket: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html#cfn-s3outposts-bucketpolicy-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
};
