// CloudFormation Resource AWS::Inspector::AssessmentTarget

import { CfnResource, Resolvable } from '../../base';

export type AssessmentTarget_Type = 'AWS::Inspector::AssessmentTarget';
export const AssessmentTarget_Type = 'AWS::Inspector::AssessmentTarget';

/**
 * Resource Type definition for AWS::Inspector::AssessmentTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html}
 */
export default function AssessmentTarget(props: AssessmentTarget_Properties) {
  return new CfnResource<AssessmentTarget_Properties>(
    AssessmentTarget_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Inspector::AssessmentTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html}
 */
export type AssessmentTarget_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html#cfn-inspector-assessmenttarget-assessmenttargetname}
   */
  AssessmentTargetName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html#cfn-inspector-assessmenttarget-resourcegrouparn}
   */
  ResourceGroupArn?: Resolvable<string>;
};
