// CloudFormation Resource AWS::Lambda::Permission

import { CfnResource } from '../../base';

export type Permission_Type = 'AWS::Lambda::Permission';
export const Permission_Type = 'AWS::Lambda::Permission';

/**
 * Resource Type definition for AWS::Lambda::Permission {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 */
export default function Permission(props: Permission_Properties) {
  return new CfnResource<Permission_Properties>(Permission_Type, props);
}

/**
 * Resource Type definition for AWS::Lambda::Permission {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 */
export type Permission_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-action}
   */
  Action: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-eventsourcetoken}
   */
  EventSourceToken?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-functionname}
   */
  FunctionName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-principal}
   */
  Principal: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-sourceaccount}
   */
  SourceAccount?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-sourcearn}
   */
  SourceArn?: string;
};
