// CloudFormation Resource AWS::SageMaker::FeatureGroup

import { CfnResource } from '../../base';

export type FeatureGroup_Type = 'AWS::SageMaker::FeatureGroup';
export const FeatureGroup_Type = 'AWS::SageMaker::FeatureGroup';

/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html}
 */
export default function FeatureGroup(props: FeatureGroup_Properties) {
  return new CfnResource<FeatureGroup_Properties>(FeatureGroup_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html}
 */
export type FeatureGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuregroupname}
   */
  FeatureGroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-recordidentifierfeaturename}
   */
  RecordIdentifierFeatureName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-eventtimefeaturename}
   */
  EventTimeFeatureName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuredefinitions}
   */
  FeatureDefinitions: FeatureDefinition[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig}
   */
  OnlineStoreConfig?: {
    SecurityConfig?: OnlineStoreSecurityConfig;
    EnableOnlineStore?: boolean;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig}
   */
  OfflineStoreConfig?: {
    S3StorageConfig: S3StorageConfig;
    DisableGlueTableCreation?: boolean;
    DataCatalogConfig?: DataCatalogConfig;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-rolearn}
   */
  RoleArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-tags}
   */
  Tags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html}
 */
export type FeatureDefinition = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html#cfn-sagemaker-featuregroup-featuredefinition-featurename}
   */
  FeatureName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html#cfn-sagemaker-featuregroup-featuredefinition-featuretype}
   */
  FeatureType: 'Integral' | 'Fractional' | 'String';
};

export type KmsKeyId = string;

export type OnlineStoreSecurityConfig = {
  KmsKeyId?: KmsKeyId;
};

export type S3StorageConfig = {
  S3Uri: string;
  KmsKeyId?: KmsKeyId;
};

export type DataCatalogConfig = {
  TableName: string;
  Catalog: string;
  Database: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
