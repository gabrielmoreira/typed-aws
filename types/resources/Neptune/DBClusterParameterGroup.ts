// CloudFormation Resource AWS::Neptune::DBClusterParameterGroup

import { CFResource } from '../../base';

export type DBClusterParameterGroup_Type =
  'AWS::Neptune::DBClusterParameterGroup';
export const DBClusterParameterGroup_Type =
  'AWS::Neptune::DBClusterParameterGroup';

/**
 * Resource Type definition for AWS::Neptune::DBClusterParameterGroup
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export default function DBClusterParameterGroup(
  props: DBClusterParameterGroup_Properties
) {
  return new CFResource<
    DBClusterParameterGroup_Type,
    DBClusterParameterGroup_Properties
  >(DBClusterParameterGroup_Type, props);
}

/**
 * Resource Type definition for AWS::Neptune::DBClusterParameterGroup
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export type DBClusterParameterGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-family}
   */
  Family: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-parameters}
   */
  Parameters: {
    [k: string]: unknown;
  };
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-name}
   */
  Name?: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
