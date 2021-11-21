// CloudFormation Resource AWS::GuardDuty::Member

import { CfnResource } from '../../base';

export type Member_Type = 'AWS::GuardDuty::Member';
export const Member_Type = 'AWS::GuardDuty::Member';

/**
 * Resource Type definition for AWS::GuardDuty::Member {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html}
 */
export default function Member(props: Member_Properties) {
  return new CfnResource<Member_Properties>(Member_Type, props);
}

/**
 * Resource Type definition for AWS::GuardDuty::Member {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html}
 */
export type Member_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-status}
   */
  Status?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-memberid}
   */
  MemberId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-email}
   */
  Email: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-message}
   */
  Message?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-disableemailnotification}
   */
  DisableEmailNotification?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-detectorid}
   */
  DetectorId: string;
};
