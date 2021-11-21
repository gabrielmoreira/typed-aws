// CloudFormation Resource AWS::AppStream::StackUserAssociation

import { CfnResource } from '../../base';

export type StackUserAssociation_Type = 'AWS::AppStream::StackUserAssociation';
export const StackUserAssociation_Type = 'AWS::AppStream::StackUserAssociation';

/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export default function StackUserAssociation(
  props: StackUserAssociation_Properties
) {
  return new CfnResource<StackUserAssociation_Properties>(
    StackUserAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export type StackUserAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-sendemailnotification}
   */
  SendEmailNotification?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-username}
   */
  UserName: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-stackname}
   */
  StackName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-authenticationtype}
   */
  AuthenticationType: string;
};
