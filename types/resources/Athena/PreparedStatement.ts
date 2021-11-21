// CloudFormation Resource AWS::Athena::PreparedStatement

import { CfnResource } from '../../base';

export type PreparedStatement_Type = 'AWS::Athena::PreparedStatement';
export const PreparedStatement_Type = 'AWS::Athena::PreparedStatement';

/**
 * Resource schema for AWS::Athena::PreparedStatement {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html}
 */
export default function PreparedStatement(props: PreparedStatement_Properties) {
  return new CfnResource<PreparedStatement_Properties>(
    PreparedStatement_Type,
    props
  );
}

/**
 * Resource schema for AWS::Athena::PreparedStatement {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html}
 */
export type PreparedStatement_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-statementname}
   */
  StatementName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-workgroup}
   */
  WorkGroup: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html#cfn-athena-preparedstatement-querystatement}
   */
  QueryStatement: string;
};
