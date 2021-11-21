// CloudFormation Resource AWS::Redshift::ClusterSecurityGroupIngress

import { CFResource } from '../../base';

export type ClusterSecurityGroupIngress_Type =
  'AWS::Redshift::ClusterSecurityGroupIngress';
export const ClusterSecurityGroupIngress_Type =
  'AWS::Redshift::ClusterSecurityGroupIngress';

/**
 * Resource Type definition for
 * AWS::Redshift::ClusterSecurityGroupIngress {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html}
 */
export default function ClusterSecurityGroupIngress(
  props: ClusterSecurityGroupIngress_Properties
) {
  return new CFResource<
    ClusterSecurityGroupIngress_Type,
    ClusterSecurityGroupIngress_Properties
  >(ClusterSecurityGroupIngress_Type, props);
}

/**
 * Resource Type definition for
 * AWS::Redshift::ClusterSecurityGroupIngress {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html}
 */
export type ClusterSecurityGroupIngress_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-cidrip}
   */
  CIDRIP?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-clustersecuritygroupname}
   */
  ClusterSecurityGroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-ec2securitygroupname}
   */
  EC2SecurityGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-ec2securitygroupownerid}
   */
  EC2SecurityGroupOwnerId?: string;
};
