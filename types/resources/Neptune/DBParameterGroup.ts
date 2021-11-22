// CloudFormation Resource AWS::Neptune::DBParameterGroup

import { CfnResource, Resolvable } from '../../base';

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
  Family: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-description}
   */
  Description: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-parameters}
   */
  Parameters: {
    [k: string]: unknown;
  };
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-name}
   */
  Name?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
