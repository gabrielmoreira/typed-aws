// CloudFormation Resource AWS::S3Outposts::Bucket

import { CfnResource } from '../../base';

export type Bucket_Type = 'AWS::S3Outposts::Bucket';
export const Bucket_Type = 'AWS::S3Outposts::Bucket';

/**
 * Resource Type Definition for AWS::S3Outposts::Bucket {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html}
 */
export default function Bucket(props: Bucket_Properties) {
  return new CfnResource<Bucket_Properties>(Bucket_Type, props);
}

/**
 * Resource Type Definition for AWS::S3Outposts::Bucket {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html}
 */
export type Bucket_Properties = {
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-bucketname}
   */
  BucketName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-outpostid}
   */
  OutpostId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-lifecycleconfiguration}
   */
  LifecycleConfiguration?: LifecycleConfiguration;
};

export type Tag = {
  Key: string;
  Value: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html}
 */
export type LifecycleConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html#cfn-s3outposts-bucket-lifecycleconfiguration-rules}
   */
  Rules: Rule[];
};

export type Rule =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-status}
       */
      Status: 'Enabled' | 'Disabled';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-id}
       */
      Id?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-abortincompletemultipartupload}
       */
      AbortIncompleteMultipartUpload: AbortIncompleteMultipartUpload;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationdate}
       */
      ExpirationDate?: iso8601UTC;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationindays}
       */
      ExpirationInDays?: number;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-filter}
       */
      Filter?:
        | {
            Prefix: FilterPrefix;
            Tag?: FilterTag;
            AndOperator?: FilterAndOperator;
          }
        | {
            Prefix?: FilterPrefix;
            Tag: FilterTag;
            AndOperator?: FilterAndOperator;
          }
        | {
            Prefix?: FilterPrefix;
            Tag?: FilterTag;
            AndOperator: FilterAndOperator;
          };
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-status}
       */
      Status: 'Enabled' | 'Disabled';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-id}
       */
      Id?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-abortincompletemultipartupload}
       */
      AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationdate}
       */
      ExpirationDate: iso8601UTC;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationindays}
       */
      ExpirationInDays?: number;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-filter}
       */
      Filter?:
        | {
            Prefix: FilterPrefix;
            Tag?: FilterTag;
            AndOperator?: FilterAndOperator;
          }
        | {
            Prefix?: FilterPrefix;
            Tag: FilterTag;
            AndOperator?: FilterAndOperator;
          }
        | {
            Prefix?: FilterPrefix;
            Tag?: FilterTag;
            AndOperator: FilterAndOperator;
          };
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-status}
       */
      Status: 'Enabled' | 'Disabled';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-id}
       */
      Id?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-abortincompletemultipartupload}
       */
      AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationdate}
       */
      ExpirationDate?: iso8601UTC;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationindays}
       */
      ExpirationInDays: number;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-filter}
       */
      Filter?:
        | {
            Prefix: FilterPrefix;
            Tag?: FilterTag;
            AndOperator?: FilterAndOperator;
          }
        | {
            Prefix?: FilterPrefix;
            Tag: FilterTag;
            AndOperator?: FilterAndOperator;
          }
        | {
            Prefix?: FilterPrefix;
            Tag?: FilterTag;
            AndOperator: FilterAndOperator;
          };
    };

export type iso8601UTC = string;

/**
 * Specifies the days since the initiation of an incomplete multipart
 * upload that Amazon S3Outposts will wait before permanently removing
 * all parts of the upload. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html}
 */
export type AbortIncompleteMultipartUpload = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html#cfn-s3outposts-bucket-abortincompletemultipartupload-daysafterinitiation}
   */
  DaysAfterInitiation: number;
};

export type FilterPrefix = string;

export type FilterTag = {
  Key: string;
  Value: string;
};

export type FilterAndOperator = {
  Prefix?: FilterPrefix;
  Tags: FilterTag[];
};
