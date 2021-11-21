// CloudFormation Resource AWS::CloudFormation::StackSet

import { CFResource } from '../../base';

export type StackSet_Type = 'AWS::CloudFormation::StackSet';
export const StackSet_Type = 'AWS::CloudFormation::StackSet';

export default function StackSet(props: StackSet_Properties) {
  return new CFResource<StackSet_Type, StackSet_Properties>(
    StackSet_Type,
    props
  );
}

export type StackSet_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stacksetname}
       */
      StackSetName?: string;
      StackSetId?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-administrationrolearn}
       */
      AdministrationRoleARN?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-autodeployment}
       */
      AutoDeployment?: AutoDeployment;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-capabilities}
       */
      Capabilities?: Capability[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-description}
       */
      Description?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-executionrolename}
       */
      ExecutionRoleName?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences}
       */
      OperationPreferences?: OperationPreferences;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstancesgroup}
       */
      StackInstancesGroup?: StackInstances[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-parameters}
       */
      Parameters?: Parameter[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-permissionmodel}
       */
      PermissionModel?: 'SERVICE_MANAGED' | 'SELF_MANAGED';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-tags}
       */
      Tags?: Tag[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templatebody}
       */
      TemplateBody?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templateurl}
       */
      TemplateURL: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-callas}
       */
      CallAs?: 'SELF' | 'DELEGATED_ADMIN';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-managedexecution}
       */
      ManagedExecution?: {
        Active?: Active;
      };
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stacksetname}
       */
      StackSetName?: string;
      StackSetId?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-administrationrolearn}
       */
      AdministrationRoleARN?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-autodeployment}
       */
      AutoDeployment?: AutoDeployment;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-capabilities}
       */
      Capabilities?: Capability[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-description}
       */
      Description?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-executionrolename}
       */
      ExecutionRoleName?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences}
       */
      OperationPreferences?: OperationPreferences;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstancesgroup}
       */
      StackInstancesGroup?: StackInstances[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-parameters}
       */
      Parameters?: Parameter[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-permissionmodel}
       */
      PermissionModel?: 'SERVICE_MANAGED' | 'SELF_MANAGED';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-tags}
       */
      Tags?: Tag[];
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templatebody}
       */
      TemplateBody: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templateurl}
       */
      TemplateURL?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-callas}
       */
      CallAs?: 'SELF' | 'DELEGATED_ADMIN';
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-managedexecution}
       */
      ManagedExecution?: {
        Active?: Active;
      };
    };

export type Tag = {
  Key: string;
  Value: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html}
 */
export type AutoDeployment = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html#cfn-cloudformation-stackset-autodeployment-enabled}
   */
  Enabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html#cfn-cloudformation-stackset-autodeployment-retainstacksonaccountremoval}
   */
  RetainStacksOnAccountRemoval?: boolean;
};

export type Account = string;

export type Region = string;

export type OrganizationalUnitId = string;

export type Capability =
  | 'CAPABILITY_IAM'
  | 'CAPABILITY_NAMED_IAM'
  | 'CAPABILITY_AUTO_EXPAND';

export type RegionConcurrencyType = 'SEQUENTIAL' | 'PARALLEL';

export type Active = boolean;

/**
 * The user-specified preferences for how AWS CloudFormation performs a
 * stack set operation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html}
 */
export type OperationPreferences = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-failuretolerancecount}
   */
  FailureToleranceCount?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-failuretolerancepercentage}
   */
  FailureTolerancePercentage?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-maxconcurrentcount}
   */
  MaxConcurrentCount?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-maxconcurrentpercentage}
   */
  MaxConcurrentPercentage?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-regionorder}
   */
  RegionOrder?: Region[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-regionconcurrencytype}
   */
  RegionConcurrencyType?: RegionConcurrencyType;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html}
 */
export type Parameter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html#cfn-cloudformation-stackset-parameter-parameterkey}
   */
  ParameterKey: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html#cfn-cloudformation-stackset-parameter-parametervalue}
   */
  ParameterValue: string;
};

/**
 * The AWS OrganizationalUnitIds or Accounts for which to create stack
 * instances in the specified Regions. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html}
 */
export type DeploymentTargets = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html#cfn-cloudformation-stackset-deploymenttargets-accounts}
   */
  Accounts?: Account[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html#cfn-cloudformation-stackset-deploymenttargets-organizationalunitids}
   */
  OrganizationalUnitIds?: OrganizationalUnitId[];
};

/**
 * Stack instances in some specific accounts and Regions. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html}
 */
export type StackInstances = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html#cfn-cloudformation-stackset-stackinstances-deploymenttargets}
   */
  DeploymentTargets: DeploymentTargets;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html#cfn-cloudformation-stackset-stackinstances-regions}
   */
  Regions: Region[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html#cfn-cloudformation-stackset-stackinstances-parameteroverrides}
   */
  ParameterOverrides?: Parameter[];
};
