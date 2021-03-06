// CloudFormation Resource AWS::S3ObjectLambda::AccessPoint

import { CfnResource, Resolvable } from '../../base';

export type AccessPoint_Type = 'AWS::S3ObjectLambda::AccessPoint';
export const AccessPoint_Type = 'AWS::S3ObjectLambda::AccessPoint';

/**
 * The AWS::S3ObjectLambda::AccessPoint resource is an Amazon
 * S3ObjectLambda resource type that you can use to add computation to S3
 * actions {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html}
 */
export default function AccessPoint(props: AccessPoint_Properties) {
  return new CfnResource<AccessPoint_Properties>(AccessPoint_Type, props);
}

/**
 * The AWS::S3ObjectLambda::AccessPoint resource is an Amazon
 * S3ObjectLambda resource type that you can use to add computation to S3
 * actions {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html}
 */
export type AccessPoint_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-name}
   */
  Name?: Resolvable<string>;
  Arn?: Resolvable<string>;
  CreationDate?: Resolvable<string>;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  PolicyStatus?: {
    IsPublic?: Resolvable<boolean>;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration}
   */
  ObjectLambdaConfiguration: ObjectLambdaConfiguration;
};

export type PublicAccessBlockConfiguration = {
  BlockPublicAcls?: Resolvable<boolean>;
  IgnorePublicAcls?: Resolvable<boolean>;
  BlockPublicPolicy?: Resolvable<boolean>;
  RestrictPublicBuckets?: Resolvable<boolean>;
};

/**
 * Configuration to be applied to this Object lambda Access Point. It
 * specifies Supporting Access Point, Transformation Configurations.
 * Customers can also set if they like to enable Cloudwatch metrics for
 * accesses to this Object lambda Access Point. Default setting for
 * Cloudwatch metrics is disable. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html}
 */
export type ObjectLambdaConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-supportingaccesspoint}
   */
  SupportingAccessPoint: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-allowedfeatures}
   */
  AllowedFeatures?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-cloudwatchmetricsenabled}
   */
  CloudWatchMetricsEnabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-transformationconfigurations}
   */
  TransformationConfigurations: TransformationConfiguration[];
};

/**
 * Configuration to define what content transformation will be applied on
 * which S3 Action. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html}
 */
export type TransformationConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html#cfn-s3objectlambda-accesspoint-transformationconfiguration-actions}
   */
  Actions: Action[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html#cfn-s3objectlambda-accesspoint-transformationconfiguration-contenttransformation}
   */
  ContentTransformation: {
    AwsLambda: AwsLambda;
  };
};

export type AwsLambda = {
  FunctionArn: Resolvable<string>;
  FunctionPayload?: Resolvable<string>;
};

export type Action = Resolvable<string>;
