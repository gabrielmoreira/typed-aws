// CloudFormation Resource AWS::WAFRegional::RegexPatternSet

import { CfnResource, Resolvable } from '../../base';

export type RegexPatternSet_Type = 'AWS::WAFRegional::RegexPatternSet';
export const RegexPatternSet_Type = 'AWS::WAFRegional::RegexPatternSet';

/**
 * Resource Type definition for AWS::WAFRegional::RegexPatternSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html}
 */
export default function RegexPatternSet(props: RegexPatternSet_Properties) {
  return new CfnResource<RegexPatternSet_Properties>(
    RegexPatternSet_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::WAFRegional::RegexPatternSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html}
 */
export type RegexPatternSet_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html#cfn-wafregional-regexpatternset-regexpatternstrings}
   */
  RegexPatternStrings: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html#cfn-wafregional-regexpatternset-name}
   */
  Name: Resolvable<string>;
};
