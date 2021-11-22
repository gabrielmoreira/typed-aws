// CloudFormation Resource AWS::IAM::VirtualMFADevice

import { CfnResource, Resolvable } from '../../base';

export type VirtualMFADevice_Type = 'AWS::IAM::VirtualMFADevice';
export const VirtualMFADevice_Type = 'AWS::IAM::VirtualMFADevice';

/**
 * Resource Type definition for AWS::IAM::VirtualMFADevice {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html}
 */
export default function VirtualMFADevice(props: VirtualMFADevice_Properties) {
  return new CfnResource<VirtualMFADevice_Properties>(
    VirtualMFADevice_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IAM::VirtualMFADevice {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html}
 */
export type VirtualMFADevice_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html#cfn-iam-virtualmfadevice-virtualmfadevicename}
   */
  VirtualMfaDeviceName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html#cfn-iam-virtualmfadevice-path}
   */
  Path?: Resolvable<string>;
  SerialNumber?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html#cfn-iam-virtualmfadevice-users}
   */
  Users: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html#cfn-iam-virtualmfadevice-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
