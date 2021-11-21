// CloudFormation Resource AWS::CE::CostCategory

import { CFResource } from '../../base';

export type CostCategory_Type = 'AWS::CE::CostCategory';
export const CostCategory_Type = 'AWS::CE::CostCategory';

/**
 * Cost Category enables you to map your cost and usage into meaningful
 * categories. You can use Cost Category to organize your costs using a
 * rule-based engine. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html}
 */
export default function CostCategory(props: CostCategory_Properties) {
  return new CFResource<CostCategory_Type, CostCategory_Properties>(
    CostCategory_Type,
    props
  );
}

/**
 * Cost Category enables you to map your cost and usage into meaningful
 * categories. You can use Cost Category to organize your costs using a
 * rule-based engine. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html}
 */
export type CostCategory_Properties = {
  Arn?: string;
  EffectiveStart?: ZonedDateTime;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-ruleversion}
   */
  RuleVersion: 'CostCategoryExpression.v1';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-rules}
   */
  Rules: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-splitchargerules}
   */
  SplitChargeRules?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-defaultvalue}
   */
  DefaultValue?: string;
};

export type ZonedDateTime = string;
