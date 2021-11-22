// CloudFormation Resource AWS::GuardDuty::IPSet

import { CfnResource, Resolvable } from '../../base';

export type IPSet_Type = 'AWS::GuardDuty::IPSet';
export const IPSet_Type = 'AWS::GuardDuty::IPSet';

/**
 * Resource Type definition for AWS::GuardDuty::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html}
 */
export default function IPSet(props: IPSet_Properties) {
  return new CfnResource<IPSet_Properties>(IPSet_Type, props);
}

/**
 * Resource Type definition for AWS::GuardDuty::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html}
 */
export type IPSet_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-format}
   */
  Format: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-activate}
   */
  Activate: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-detectorid}
   */
  DetectorId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html#cfn-guardduty-ipset-location}
   */
  Location: Resolvable<string>;
};
