// CloudFormation Resource AWS::Redshift::EndpointAuthorization

import { CfnResource, Resolvable } from '../../base';

export type EndpointAuthorization_Type = 'AWS::Redshift::EndpointAuthorization';
export const EndpointAuthorization_Type =
  'AWS::Redshift::EndpointAuthorization';

/**
 * Describes an endpoint authorization for authorizing Redshift-managed
 * VPC endpoint access to a cluster across AWS accounts. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html}
 */
export default function EndpointAuthorization(
  props: EndpointAuthorization_Properties
) {
  return new CfnResource<EndpointAuthorization_Properties>(
    EndpointAuthorization_Type,
    props
  );
}

/**
 * Describes an endpoint authorization for authorizing Redshift-managed
 * VPC endpoint access to a cluster across AWS accounts. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html}
 */
export type EndpointAuthorization_Properties = {
  Grantor?: AwsAccount;
  Grantee?: AwsAccount;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-clusteridentifier}
   */
  ClusterIdentifier: Resolvable<string>;
  AuthorizeTime?: Resolvable<string>;
  ClusterStatus?: Resolvable<string>;
  Status?: Resolvable<string>;
  AllowedAllVPCs?: Resolvable<boolean>;
  AllowedVPCs?: VpcId[];
  EndpointCount?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-account}
   */
  Account: AwsAccount;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-vpcids}
   */
  VpcIds?: VpcId[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-force}
   */
  Force?: Resolvable<boolean>;
};

export type AwsAccount = Resolvable<string>;

export type VpcId = Resolvable<string>;
