// CloudFormation Resource AWS::GuardDuty::Master

import { CFResource } from '../../base';

export type Master_Type = 'AWS::GuardDuty::Master';
export const Master_Type = 'AWS::GuardDuty::Master';

/**
 * Resource Type definition for AWS::GuardDuty::Master {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export default function Master(props: Master_Properties) {
  return new CFResource<Master_Type, Master_Properties>(Master_Type, props);
}

/**
 * Resource Type definition for AWS::GuardDuty::Master {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export type Master_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#cfn-guardduty-master-detectorid}
   */
  DetectorId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#cfn-guardduty-master-masterid}
   */
  MasterId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#cfn-guardduty-master-invitationid}
   */
  InvitationId?: string;
};
