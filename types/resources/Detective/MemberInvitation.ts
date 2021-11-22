// CloudFormation Resource AWS::Detective::MemberInvitation

import { CfnResource, Resolvable } from '../../base';

export type MemberInvitation_Type = 'AWS::Detective::MemberInvitation';
export const MemberInvitation_Type = 'AWS::Detective::MemberInvitation';

/**
 * Resource schema for AWS::Detective::MemberInvitation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html}
 */
export default function MemberInvitation(props: MemberInvitation_Properties) {
  return new CfnResource<MemberInvitation_Properties>(
    MemberInvitation_Type,
    props
  );
}

/**
 * Resource schema for AWS::Detective::MemberInvitation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html}
 */
export type MemberInvitation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-grapharn}
   */
  GraphArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberid}
   */
  MemberId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberemailaddress}
   */
  MemberEmailAddress: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-disableemailnotification}
   */
  DisableEmailNotification?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-message}
   */
  Message?: Resolvable<string>;
};
