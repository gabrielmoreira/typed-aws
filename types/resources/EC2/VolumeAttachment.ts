// CloudFormation Resource AWS::EC2::VolumeAttachment

import { CfnResource } from '../../base';

export type VolumeAttachment_Type = 'AWS::EC2::VolumeAttachment';
export const VolumeAttachment_Type = 'AWS::EC2::VolumeAttachment';

/**
 * Resource Type definition for AWS::EC2::VolumeAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html}
 */
export default function VolumeAttachment(props: VolumeAttachment_Properties) {
  return new CfnResource<VolumeAttachment_Properties>(
    VolumeAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VolumeAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html}
 */
export type VolumeAttachment_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html#cfn-ec2-ebs-volumeattachment-volumeid}
   */
  VolumeId: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html#cfn-ec2-ebs-volumeattachment-instanceid}
   */
  InstanceId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html#cfn-ec2-ebs-volumeattachment-device}
   */
  Device: string;
};
