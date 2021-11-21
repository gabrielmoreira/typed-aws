// CloudFormation Resource AWS::RDS::DBParameterGroup

import { CfnResource } from '../../base';

export type DBParameterGroup_Type = 'AWS::RDS::DBParameterGroup';
export const DBParameterGroup_Type = 'AWS::RDS::DBParameterGroup';

/**
 * Resource Type definition for AWS::RDS::DBParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html}
 */
export default function DBParameterGroup(props: DBParameterGroup_Properties) {
  return new CfnResource<DBParameterGroup_Properties>(
    DBParameterGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::RDS::DBParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html}
 */
export type DBParameterGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html#cfn-rds-dbparametergroup-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html#cfn-rds-dbparametergroup-family}
   */
  Family: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html#cfn-rds-dbparametergroup-parameters}
   */
  Parameters?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html#cfn-rds-dbparametergroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
