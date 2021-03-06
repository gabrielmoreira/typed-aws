// CloudFormation Resource AWS::RDS::DBClusterParameterGroup

import { CfnResource, Resolvable } from '../../base';

export type DBClusterParameterGroup_Type = 'AWS::RDS::DBClusterParameterGroup';
export const DBClusterParameterGroup_Type = 'AWS::RDS::DBClusterParameterGroup';

/**
 * Resource Type definition for AWS::RDS::DBClusterParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html}
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
 * Resource Type definition for AWS::RDS::DBClusterParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html}
 */
export type DBClusterParameterGroup_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-description}
   */
  Description: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-family}
   */
  Family: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-parameters}
   */
  Parameters: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
