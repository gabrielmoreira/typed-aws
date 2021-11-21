// CloudFormation Resource AWS::Config::AggregationAuthorization

import { CFResource } from '../../base';

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
  return new CFResource<
    AggregationAuthorization_Type,
    AggregationAuthorization_Properties
  >(AggregationAuthorization_Type, props);
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
  AuthorizedAccountId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-authorizedawsregion}
   */
  AuthorizedAwsRegion: string;
  AggregationAuthorizationArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#cfn-config-aggregationauthorization-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
