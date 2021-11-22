// CloudFormation Resource AWS::CE::CostCategory

import { CfnResource, Resolvable } from '../../base';

export type CostCategory_Type = 'AWS::CE::CostCategory';
export const CostCategory_Type = 'AWS::CE::CostCategory';

/**
 * Cost Category enables you to map your cost and usage into meaningful
 * categories. You can use Cost Category to organize your costs using a
 * rule-based engine. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html}
 */
export default function CostCategory(props: CostCategory_Properties) {
  return new CfnResource<CostCategory_Properties>(CostCategory_Type, props);
}

/**
 * Cost Category enables you to map your cost and usage into meaningful
 * categories. You can use Cost Category to organize your costs using a
 * rule-based engine. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html}
 */
export type CostCategory_Properties = {
  Arn?: Resolvable<string>;
  EffectiveStart?: ZonedDateTime;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-ruleversion}
   */
  RuleVersion: Resolvable<'CostCategoryExpression.v1'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-rules}
   */
  Rules: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-splitchargerules}
   */
  SplitChargeRules?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-defaultvalue}
   */
  DefaultValue?: Resolvable<string>;
};

export type ZonedDateTime = Resolvable<string>;
