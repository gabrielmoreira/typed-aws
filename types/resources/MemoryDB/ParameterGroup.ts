// CloudFormation Resource AWS::MemoryDB::ParameterGroup

import { CfnResource, Resolvable } from '../../base';

export type ParameterGroup_Type = 'AWS::MemoryDB::ParameterGroup';
export const ParameterGroup_Type = 'AWS::MemoryDB::ParameterGroup';

/**
 * The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB
 * ParameterGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html}
 */
export default function ParameterGroup(props: ParameterGroup_Properties) {
  return new CfnResource<ParameterGroup_Properties>(ParameterGroup_Type, props);
}

/**
 * The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB
 * ParameterGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html}
 */
export type ParameterGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-parametergroupname}
   */
  ParameterGroupName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-family}
   */
  Family: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-parameters}
   */
  Parameters?: {
    [k: string]: unknown;
  };
  ARN?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
