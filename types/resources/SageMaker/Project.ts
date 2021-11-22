// CloudFormation Resource AWS::SageMaker::Project

import { CfnResource, Resolvable } from '../../base';

export type Project_Type = 'AWS::SageMaker::Project';
export const Project_Type = 'AWS::SageMaker::Project';

/**
 * Resource Type definition for AWS::SageMaker::Project {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export default function Project(props: Project_Properties) {
  return new CfnResource<Project_Properties>(Project_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::Project {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export type Project_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-tags}
   */
  Tags?: Tag[];
  ProjectArn?: ProjectArn;
  ProjectId?: ProjectId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-projectname}
   */
  ProjectName: ProjectName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-projectdescription}
   */
  ProjectDescription?: ProjectDescription;
  CreationTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-servicecatalogprovisioningdetails}
   */
  ServiceCatalogProvisioningDetails: {
    ProductId: ProductId;
    ProvisioningArtifactId?: ProvisioningArtifactId;
    PathId?: PathId;
    ProvisioningParameters?: ProvisioningParameter[];
  };
  ServiceCatalogProvisionedProductDetails?: {
    ProvisionedProductId?: ProvisioningArtifactId;
    ProvisionedProductStatusMessage?: ProvisionedProductStatusMessage;
  };
  ProjectStatus?: Resolvable<
    | 'Pending'
    | 'CreateInProgress'
    | 'CreateCompleted'
    | 'CreateFailed'
    | 'DeleteInProgress'
    | 'DeleteFailed'
    | 'DeleteCompleted'
  >;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};

export type ProjectDescription = Resolvable<string>;

export type ProjectId = Resolvable<string>;

export type ProvisionedProductStatusMessage = Resolvable<string>;

export type ProjectName = Resolvable<string>;

export type ProjectArn = Resolvable<string>;

export type ProductId = Resolvable<string>;

export type ProvisioningArtifactId = Resolvable<string>;

export type PathId = Resolvable<string>;

export type ProvisioningParameter = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
