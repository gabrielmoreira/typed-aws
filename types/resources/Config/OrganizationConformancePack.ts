// CloudFormation Resource AWS::Config::OrganizationConformancePack

import { CfnResource, Resolvable } from '../../base';

export type OrganizationConformancePack_Type =
  'AWS::Config::OrganizationConformancePack';
export const OrganizationConformancePack_Type =
  'AWS::Config::OrganizationConformancePack';

/**
 * Resource schema for AWS::Config::OrganizationConformancePack. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html}
 */
export default function OrganizationConformancePack(
  props: OrganizationConformancePack_Properties
) {
  return new CfnResource<OrganizationConformancePack_Properties>(
    OrganizationConformancePack_Type,
    props
  );
}

/**
 * Resource schema for AWS::Config::OrganizationConformancePack. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html}
 */
export type OrganizationConformancePack_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-organizationconformancepackname}
   */
  OrganizationConformancePackName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-templates3uri}
   */
  TemplateS3Uri?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-templatebody}
   */
  TemplateBody?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-deliverys3bucket}
   */
  DeliveryS3Bucket?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-deliverys3keyprefix}
   */
  DeliveryS3KeyPrefix?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-conformancepackinputparameters}
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html#cfn-config-organizationconformancepack-excludedaccounts}
   */
  ExcludedAccounts?: AccountId[];
};

/**
 * Input parameters in the form of key-value pairs for the conformance
 * pack. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html}
 */
export type ConformancePackInputParameter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html#cfn-config-organizationconformancepack-conformancepackinputparameter-parametername}
   */
  ParameterName: ParameterName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html#cfn-config-organizationconformancepack-conformancepackinputparameter-parametervalue}
   */
  ParameterValue: ParameterValue;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html}
   */
  [k: string]: unknown;
};

export type ParameterName = Resolvable<string>;

export type ParameterValue = Resolvable<string>;

export type AccountId = Resolvable<string>;
