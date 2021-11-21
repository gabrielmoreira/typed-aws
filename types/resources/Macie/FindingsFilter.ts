// CloudFormation Resource AWS::Macie::FindingsFilter

import { CFResource } from '../../base';

export type FindingsFilter_Type = 'AWS::Macie::FindingsFilter';
export const FindingsFilter_Type = 'AWS::Macie::FindingsFilter';

/**
 * Macie FindingsFilter resource schema. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html}
 */
export default function FindingsFilter(props: FindingsFilter_Properties) {
  return new CFResource<FindingsFilter_Type, FindingsFilter_Properties>(
    FindingsFilter_Type,
    props
  );
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
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-description}
   */
  Description?: string;
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
  Position?: number;
  Id?: string;
  Arn?: string;
  FindingsFilterListItems?: FindingsFilterListItem[];
};

export type CriterionAdditionalProperties = {
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  eq?: string[];
  neq?: string[];
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

export type FindingFilterAction = 'ARCHIVE' | 'NOOP';

/**
 * Returned by ListHandler representing filter name and ID. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html}
 */
export type FindingsFilterListItem = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html#cfn-macie-findingsfilter-findingsfilterlistitem-id}
   */
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html#cfn-macie-findingsfilter-findingsfilterlistitem-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingsfilterlistitem.html}
   */
  [k: string]: unknown;
};
