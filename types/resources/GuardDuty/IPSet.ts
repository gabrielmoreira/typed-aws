// CloudFormation Resource AWS::GuardDuty::IPSet

import { CFResource } from '../../base';

export type IPSet_Type = 'AWS::GuardDuty::IPSet';
export const IPSet_Type = 'AWS::GuardDuty::IPSet';

/**
 * Resource Type definition for AWS::GuardDuty::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html}
 */
export default function IPSet(props: IPSet_Properties) {
  return new CFResource<IPSet_Type, IPSet_Properties>(IPSet_Type, props);
}

/**
 * Resource Type definition for AWS::GuardDuty::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html}
 */
export type IPSet_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-format}
   */
  Format: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-activate}
   */
  Activate: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-detectorid}
   */
  DetectorId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-location}
   */
  Location: string;
};
