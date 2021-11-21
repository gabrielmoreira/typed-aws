// CloudFormation Resource AWS::Redshift::ClusterSecurityGroup

import { CfnResource } from '../../base';

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
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
