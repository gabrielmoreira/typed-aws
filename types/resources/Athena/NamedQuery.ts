// CloudFormation Resource AWS::Athena::NamedQuery

import { CfnResource, Resolvable } from '../../base';

export type NamedQuery_Type = 'AWS::Athena::NamedQuery';
export const NamedQuery_Type = 'AWS::Athena::NamedQuery';

/**
 * Resource schema for AWS::Athena::NamedQuery {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html}
 */
export default function NamedQuery(props: NamedQuery_Properties) {
  return new CfnResource<NamedQuery_Properties>(NamedQuery_Type, props);
}

/**
 * Resource schema for AWS::Athena::NamedQuery {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html}
 */
export type NamedQuery_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-database}
   */
  Database: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-querystring}
   */
  QueryString: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html#cfn-athena-namedquery-workgroup}
   */
  WorkGroup?: Resolvable<string>;
  NamedQueryId?: Resolvable<string>;
};
