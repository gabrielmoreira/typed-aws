// CloudFormation Resource AWS::GuardDuty::ThreatIntelSet

import { CfnResource, Resolvable } from '../../base';

export type ThreatIntelSet_Type = 'AWS::GuardDuty::ThreatIntelSet';
export const ThreatIntelSet_Type = 'AWS::GuardDuty::ThreatIntelSet';

/**
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html}
 */
export default function ThreatIntelSet(props: ThreatIntelSet_Properties) {
  return new CfnResource<ThreatIntelSet_Properties>(ThreatIntelSet_Type, props);
}

/**
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html}
 */
export type ThreatIntelSet_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-format}
   */
  Format: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-activate}
   */
  Activate: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-detectorid}
   */
  DetectorId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-location}
   */
  Location: Resolvable<string>;
};
