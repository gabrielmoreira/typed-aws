// CloudFormation Resource AWS::Neptune::DBClusterParameterGroup

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<DBClusterParameterGroup_Properties>(
    DBClusterParameterGroup_Type,
    props
  );
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
  Family: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-description}
   */
  Description: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-parameters}
   */
  Parameters: {
    [k: string]: unknown;
  };
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-name}
   */
  Name?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
