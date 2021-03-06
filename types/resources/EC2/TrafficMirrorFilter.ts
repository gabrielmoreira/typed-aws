// CloudFormation Resource AWS::EC2::TrafficMirrorFilter

import { CfnResource, Resolvable } from '../../base';

export type TrafficMirrorFilter_Type = 'AWS::EC2::TrafficMirrorFilter';
export const TrafficMirrorFilter_Type = 'AWS::EC2::TrafficMirrorFilter';

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilter {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html}
 */
export default function TrafficMirrorFilter(
  props: TrafficMirrorFilter_Properties
) {
  return new CfnResource<TrafficMirrorFilter_Properties>(
    TrafficMirrorFilter_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilter {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html}
 */
export type TrafficMirrorFilter_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-networkservices}
   */
  NetworkServices?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
