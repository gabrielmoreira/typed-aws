// CloudFormation Resource AWS::WAFv2::RegexPatternSet

import { CfnResource, Resolvable } from '../../base';

export type RegexPatternSet_Type = 'AWS::WAFv2::RegexPatternSet';
export const RegexPatternSet_Type = 'AWS::WAFv2::RegexPatternSet';

/**
 * Contains a list of Regular expressions based on the provided inputs.
 * RegexPatternSet can be used with other WAF entities with
 * RegexPatternSetReferenceStatement to perform other actions . {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html}
 */
export default function RegexPatternSet(props: RegexPatternSet_Properties) {
  return new CfnResource<RegexPatternSet_Properties>(
    RegexPatternSet_Type,
    props
  );
}

/**
 * Contains a list of Regular expressions based on the provided inputs.
 * RegexPatternSet can be used with other WAF entities with
 * RegexPatternSetReferenceStatement to perform other actions . {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html}
 */
export type RegexPatternSet_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-name}
   */
  Name?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-regularexpressionlist}
   */
  RegularExpressionList: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-scope}
   */
  Scope: Resolvable<'CLOUDFRONT' | 'REGIONAL'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};
