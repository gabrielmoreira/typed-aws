// CloudFormation Resource AWS::Neptune::DBParameterGroup

import { CfnResource } from '../../base';

export type DBParameterGroup_Type = 'AWS::Neptune::DBParameterGroup';
export const DBParameterGroup_Type = 'AWS::Neptune::DBParameterGroup';

/**
 * Resource Type definition for AWS::Neptune::DBParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export default function DBParameterGroup(props: DBParameterGroup_Properties) {
  return new CfnResource<DBParameterGroup_Properties>(
    DBParameterGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Neptune::DBParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export type DBParameterGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-family}
   */
  Family: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-parameters}
   */
  Parameters: {
    [k: string]: unknown;
  };
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-name}
   */
  Name?: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
