// CloudFormation Resource AWS::Macie::FindingsFilter

import { CfnResource, Resolvable } from '../../base';

export type FindingsFilter_Type = 'AWS::Macie::FindingsFilter';
export const FindingsFilter_Type = 'AWS::Macie::FindingsFilter';

/**
 * Macie FindingsFilter resource schema. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html}
 */
export default function FindingsFilter(props: FindingsFilter_Properties) {
  return new CfnResource<FindingsFilter_Properties>(FindingsFilter_Type, props);
}

/**
 * Macie FindingsFilter resource schema. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html}
 */
export type FindingsFilter_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-findingcriteria}
   */
  FindingCriteria: FindingCriteria;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-action}
   */
  Action?: FindingFilterAction;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-position}
   */
  Position?: Resolvable<number>;
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  FindingsFilterListItems?: FindingsFilterListItem[];
};

export type CriterionAdditionalProperties = {
  gt?: Resolvable<number>;
  gte?: Resolvable<number>;
  lt?: Resolvable<number>;
  lte?: Resolvable<number>;
  eq?: Resolvable<string>[];
  neq?: Resolvable<string>[];
  [k: string]: unknown;
};

/**
 * Map of filter criteria. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-criterion.html}
 */
export type Criterion = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-criterion.html}
   */
  [k: string]: unknown;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingcriteria.html}
 */
export type FindingCriteria = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingcriteria.html#cfn-macie-findingsfilter-findingcriteria-criterion}
   */
  Criterion?: Criterion;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingcriteria.html}
   */
  [k: string]: unknown;
};

export type FindingFilterAction = Resolvable<'ARCHIVE' | 'NOOP'>;

/**
 * Returned by ListHandler representing filter name and ID. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html}
 */
export type FindingsFilterListItem = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html#cfn-macie-findingsfilter-findingsfilterlistitem-id}
   */
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html#cfn-macie-findingsfilter-findingsfilterlistitem-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html}
   */
  [k: string]: unknown;
};
