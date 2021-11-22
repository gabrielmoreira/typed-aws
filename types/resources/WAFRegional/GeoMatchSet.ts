// CloudFormation Resource AWS::WAFRegional::GeoMatchSet

import { CfnResource, Resolvable } from '../../base';

export type GeoMatchSet_Type = 'AWS::WAFRegional::GeoMatchSet';
export const GeoMatchSet_Type = 'AWS::WAFRegional::GeoMatchSet';

/**
 * Resource Type definition for AWS::WAFRegional::GeoMatchSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html}
 */
export default function GeoMatchSet(props: GeoMatchSet_Properties) {
  return new CfnResource<GeoMatchSet_Properties>(GeoMatchSet_Type, props);
}

/**
 * Resource Type definition for AWS::WAFRegional::GeoMatchSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html}
 */
export type GeoMatchSet_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html#cfn-wafregional-geomatchset-geomatchconstraints}
   */
  GeoMatchConstraints?: GeoMatchConstraint[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html#cfn-wafregional-geomatchset-name}
   */
  Name: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-geomatchset-geomatchconstraint.html}
 */
export type GeoMatchConstraint = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-geomatchset-geomatchconstraint.html#cfn-wafregional-geomatchset-geomatchconstraint-type}
   */
  Type: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-geomatchset-geomatchconstraint.html#cfn-wafregional-geomatchset-geomatchconstraint-value}
   */
  Value: Resolvable<string>;
};
