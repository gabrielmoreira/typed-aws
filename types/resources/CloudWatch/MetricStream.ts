// CloudFormation Resource AWS::CloudWatch::MetricStream

import { CfnResource } from '../../base';

export type MetricStream_Type = 'AWS::CloudWatch::MetricStream';
export const MetricStream_Type = 'AWS::CloudWatch::MetricStream';

export default function MetricStream(props: MetricStream_Properties) {
  return new CfnResource<MetricStream_Properties>(MetricStream_Type, props);
}

export type MetricStream_Properties =
  | {
      Arn?: string;
      CreationDate?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-excludefilters}
       */
      ExcludeFilters?: MetricStreamFilter[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-firehosearn}
       */
      FirehoseArn: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includefilters}
       */
      IncludeFilters?: MetricStreamFilter[];
      LastUpdateDate?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-name}
       */
      Name?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-rolearn}
       */
      RoleArn: string;
      State?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-outputformat}
       */
      OutputFormat: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tags}
       */
      Tags?: Tag[];
    }
  | {
      Arn?: string;
      CreationDate?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-excludefilters}
       */
      ExcludeFilters?: MetricStreamFilter[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-firehosearn}
       */
      FirehoseArn: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includefilters}
       */
      IncludeFilters?: MetricStreamFilter[];
      LastUpdateDate?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-name}
       */
      Name?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-rolearn}
       */
      RoleArn: string;
      State?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-outputformat}
       */
      OutputFormat: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tags}
       */
      Tags?: Tag[];
    }
  | (
      | {
          Arn?: string;
          CreationDate?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-excludefilters}
           */
          ExcludeFilters?: MetricStreamFilter[];
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-firehosearn}
           */
          FirehoseArn?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includefilters}
           */
          IncludeFilters: MetricStreamFilter[];
          LastUpdateDate?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-name}
           */
          Name?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-rolearn}
           */
          RoleArn?: string;
          State?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-outputformat}
           */
          OutputFormat?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tags}
           */
          Tags?: Tag[];
        }
      | {
          Arn?: string;
          CreationDate?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-excludefilters}
           */
          ExcludeFilters: MetricStreamFilter[];
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-firehosearn}
           */
          FirehoseArn?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includefilters}
           */
          IncludeFilters?: MetricStreamFilter[];
          LastUpdateDate?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-name}
           */
          Name?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-rolearn}
           */
          RoleArn?: string;
          State?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-outputformat}
           */
          OutputFormat?: string;
          /**
           * {@link
           * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tags}
           */
          Tags?: Tag[];
        }
    );

/**
 * This structure defines the metrics that will be streamed. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html}
 */
export type MetricStreamFilter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html#cfn-cloudwatch-metricstream-metricstreamfilter-namespace}
   */
  Namespace: string;
};

export type Tag = {
  Key: string;
  Value?: string;
};
