// CloudFormation Resource AWS::Detective::MemberInvitation

import { CFResource } from '../../base';

export type MemberInvitation_Type = 'AWS::Detective::MemberInvitation';
export const MemberInvitation_Type = 'AWS::Detective::MemberInvitation';

/**
 * Resource schema for AWS::Detective::MemberInvitation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html}
 */
export default function MemberInvitation(props: MemberInvitation_Properties) {
  return new CFResource<MemberInvitation_Type, MemberInvitation_Properties>(
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
  GraphArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberid}
   */
  MemberId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberemailaddress}
   */
  MemberEmailAddress: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-disableemailnotification}
   */
  DisableEmailNotification?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-message}
   */
  Message?: string;
};
