// CloudFormation Resource AWS::ApiGateway::Account

import { CfnResource } from '../../base';

export type Account_Type = 'AWS::ApiGateway::Account';
export const Account_Type = 'AWS::ApiGateway::Account';

/**
 * Resource Type definition for AWS::ApiGateway::Account {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html}
 */
export default function Account(props: Account_Properties) {
  return new CfnResource<Account_Properties>(Account_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGateway::Account {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html}
 */
export type Account_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html#cfn-apigateway-account-cloudwatchrolearn}
   */
  CloudWatchRoleArn?: string;
};
