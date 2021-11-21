// CloudFormation Resource AWS::Redshift::ClusterParameterGroup

import { CfnResource } from '../../base';

export type ClusterParameterGroup_Type = 'AWS::Redshift::ClusterParameterGroup';
export const ClusterParameterGroup_Type =
  'AWS::Redshift::ClusterParameterGroup';

/**
 * Resource Type definition for AWS::Redshift::ClusterParameterGroup
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html}
 */
export default function ClusterParameterGroup(
  props: ClusterParameterGroup_Properties
) {
  return new CfnResource<ClusterParameterGroup_Properties>(
    ClusterParameterGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Redshift::ClusterParameterGroup
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html}
 */
export type ClusterParameterGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parametergroupfamily}
   */
  ParameterGroupFamily: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parameters}
   */
  Parameters?: Parameter[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-tags}
   */
  Tags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-property-redshift-clusterparametergroup-parameter.html}
 */
export type Parameter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-property-redshift-clusterparametergroup-parameter.html#cfn-redshift-clusterparametergroup-parameter-parametername}
   */
  ParameterName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-property-redshift-clusterparametergroup-parameter.html#cfn-redshift-clusterparametergroup-parameter-parametervalue}
   */
  ParameterValue: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
