// CloudFormation Resource AWS::Config::ConformancePack

import { CfnResource, Resolvable } from '../../base';

export type ConformancePack_Type = 'AWS::Config::ConformancePack';
export const ConformancePack_Type = 'AWS::Config::ConformancePack';

/**
 * A conformance pack is a collection of AWS Config rules and remediation
 * actions that can be easily deployed as a single entity in an account
 * and a region or across an entire AWS Organization. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html}
 */
export default function ConformancePack(props: ConformancePack_Properties) {
  return new CfnResource<ConformancePack_Properties>(
    ConformancePack_Type,
    props
  );
}

/**
 * A conformance pack is a collection of AWS Config rules and remediation
 * actions that can be easily deployed as a single entity in an account
 * and a region or across an entire AWS Organization. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html}
 */
export type ConformancePack_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-conformancepackname}
   */
  ConformancePackName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-deliverys3bucket}
   */
  DeliveryS3Bucket?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-deliverys3keyprefix}
   */
  DeliveryS3KeyPrefix?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-templatebody}
   */
  TemplateBody?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-templates3uri}
   */
  TemplateS3Uri?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html#cfn-config-conformancepack-conformancepackinputparameters}
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];
};

export type ParameterName = Resolvable<string>;

export type ParameterValue = Resolvable<string>;

/**
 * Input parameters in the form of key-value pairs for the conformance
 * pack. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html}
 */
export type ConformancePackInputParameter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html#cfn-config-conformancepack-conformancepackinputparameter-parametername}
   */
  ParameterName: ParameterName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html#cfn-config-conformancepack-conformancepackinputparameter-parametervalue}
   */
  ParameterValue: ParameterValue;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html}
   */
  [k: string]: unknown;
};
