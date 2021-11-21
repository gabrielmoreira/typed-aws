// CloudFormation Resource AWS::AccessAnalyzer::Analyzer

import { CfnResource } from '../../base';

export type Analyzer_Type = 'AWS::AccessAnalyzer::Analyzer';
export const Analyzer_Type = 'AWS::AccessAnalyzer::Analyzer';

/**
 * The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the
 * user's account {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html}
 */
export default function Analyzer(props: Analyzer_Properties) {
  return new CfnResource<Analyzer_Properties>(Analyzer_Type, props);
}

/**
 * The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the
 * user's account {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html}
 */
export type Analyzer_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-analyzername}
   */
  AnalyzerName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-archiverules}
   */
  ArchiveRules?: ArchiveRule[];
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-type}
   */
  Type: string;
};

/**
 * An Access Analyzer archive rule. Archive rules automatically archive
 * new findings that meet the criteria you define when you create the
 * rule. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html}
 */
export type ArchiveRule = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html#cfn-accessanalyzer-analyzer-archiverule-filter}
   */
  Filter: Filter[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html#cfn-accessanalyzer-analyzer-archiverule-rulename}
   */
  RuleName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html}
   */
  [k: string]: unknown;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html}
 */
export type Filter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html#cfn-accessanalyzer-analyzer-filter-contains}
   */
  Contains?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html#cfn-accessanalyzer-analyzer-filter-eq}
   */
  Eq?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html#cfn-accessanalyzer-analyzer-filter-exists}
   */
  Exists?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html#cfn-accessanalyzer-analyzer-filter-property}
   */
  Property: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html#cfn-accessanalyzer-analyzer-filter-neq}
   */
  Neq?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html}
   */
  [k: string]: unknown;
};

export type Tag = {
  Key: string;
  Value: string;
  [k: string]: unknown;
};
