// CloudFormation Resource AWS::Redshift::ClusterSubnetGroup

import { CFResource } from '../../base';

export type ClusterSubnetGroup_Type = 'AWS::Redshift::ClusterSubnetGroup';
export const ClusterSubnetGroup_Type = 'AWS::Redshift::ClusterSubnetGroup';

/**
 * Resource Type definition for AWS::Redshift::ClusterSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html}
 */
export default function ClusterSubnetGroup(
  props: ClusterSubnetGroup_Properties
) {
  return new CFResource<ClusterSubnetGroup_Type, ClusterSubnetGroup_Properties>(
    ClusterSubnetGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Redshift::ClusterSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html}
 */
export type ClusterSubnetGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#cfn-redshift-clustersubnetgroup-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#cfn-redshift-clustersubnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#cfn-redshift-clustersubnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
