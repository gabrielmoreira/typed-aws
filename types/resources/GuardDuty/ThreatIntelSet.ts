// CloudFormation Resource AWS::GuardDuty::ThreatIntelSet

import { CFResource } from '../../base';

export type ThreatIntelSet_Type = 'AWS::GuardDuty::ThreatIntelSet';
export const ThreatIntelSet_Type = 'AWS::GuardDuty::ThreatIntelSet';

/**
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html}
 */
export default function ThreatIntelSet(props: ThreatIntelSet_Properties) {
  return new CFResource<ThreatIntelSet_Type, ThreatIntelSet_Properties>(
    ThreatIntelSet_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html}
 */
export type ThreatIntelSet_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-format}
   */
  Format: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-activate}
   */
  Activate: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-detectorid}
   */
  DetectorId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#cfn-guardduty-threatintelset-location}
   */
  Location: string;
};
