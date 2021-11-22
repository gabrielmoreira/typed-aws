// CloudFormation Resource AWS::Redshift::ClusterSecurityGroup

import { CfnResource, Resolvable } from '../../base';

export type ClusterSecurityGroup_Type = 'AWS::Redshift::ClusterSecurityGroup';
export const ClusterSecurityGroup_Type = 'AWS::Redshift::ClusterSecurityGroup';

/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroup
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html}
 */
export default function ClusterSecurityGroup(
  props: ClusterSecurityGroup_Properties
) {
  return new CfnResource<ClusterSecurityGroup_Properties>(
    ClusterSecurityGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroup
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html}
 */
export type ClusterSecurityGroup_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-description}
   */
  Description: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
