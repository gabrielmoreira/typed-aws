// CloudFormation Resource AWS::Inspector::AssessmentTemplate

import { CfnResource, Resolvable } from '../../base';

export type AssessmentTemplate_Type = 'AWS::Inspector::AssessmentTemplate';
export const AssessmentTemplate_Type = 'AWS::Inspector::AssessmentTemplate';

/**
 * Resource Type definition for AWS::Inspector::AssessmentTemplate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html}
 */
export default function AssessmentTemplate(
  props: AssessmentTemplate_Properties
) {
  return new CfnResource<AssessmentTemplate_Properties>(
    AssessmentTemplate_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Inspector::AssessmentTemplate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html}
 */
export type AssessmentTemplate_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-assessmenttargetarn}
   */
  AssessmentTargetArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-durationinseconds}
   */
  DurationInSeconds: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-assessmenttemplatename}
   */
  AssessmentTemplateName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-rulespackagearns}
   */
  RulesPackageArns: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-userattributesforfindings}
   */
  UserAttributesForFindings?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
