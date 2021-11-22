// CloudFormation Resource AWS::EC2::Host

import { CfnResource, Resolvable } from '../../base';

export type Host_Type = 'AWS::EC2::Host';
export const Host_Type = 'AWS::EC2::Host';

/**
 * Resource Type definition for AWS::EC2::Host {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html}
 */
export default function Host(props: Host_Properties) {
  return new CfnResource<Host_Properties>(Host_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::Host {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html}
 */
export type Host_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html#cfn-ec2-host-autoplacement}
   */
  AutoPlacement?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html#cfn-ec2-host-availabilityzone}
   */
  AvailabilityZone: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html#cfn-ec2-host-hostrecovery}
   */
  HostRecovery?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html#cfn-ec2-host-instancetype}
   */
  InstanceType: Resolvable<string>;
};
