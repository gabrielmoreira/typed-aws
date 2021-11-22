// CloudFormation Resource AWS::EC2::TrafficMirrorTarget

import { CfnResource, Resolvable } from '../../base';

export type TrafficMirrorTarget_Type = 'AWS::EC2::TrafficMirrorTarget';
export const TrafficMirrorTarget_Type = 'AWS::EC2::TrafficMirrorTarget';

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html}
 */
export default function TrafficMirrorTarget(
  props: TrafficMirrorTarget_Properties
) {
  return new CfnResource<TrafficMirrorTarget_Properties>(
    TrafficMirrorTarget_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html}
 */
export type TrafficMirrorTarget_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-networkloadbalancerarn}
   */
  NetworkLoadBalancerArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-networkinterfaceid}
   */
  NetworkInterfaceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
