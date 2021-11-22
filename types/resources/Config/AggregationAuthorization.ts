// CloudFormation Resource AWS::Config::AggregationAuthorization

import { CfnResource, Resolvable } from '../../base';

export type AggregationAuthorization_Type =
  'AWS::Config::AggregationAuthorization';
export const AggregationAuthorization_Type =
  'AWS::Config::AggregationAuthorization';

/**
 * Resource Type definition for AWS::Config::AggregationAuthorization
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html}
 */
export default function AggregationAuthorization(
  props: AggregationAuthorization_Properties
) {
  return new CfnResource<AggregationAuthorization_Properties>(
    AggregationAuthorization_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Config::AggregationAuthorization
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html}
 */
export type AggregationAuthorization_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-authorizedaccountid}
   */
  AuthorizedAccountId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-authorizedawsregion}
   */
  AuthorizedAwsRegion: Resolvable<string>;
  AggregationAuthorizationArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
