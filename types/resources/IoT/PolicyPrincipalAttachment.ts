// CloudFormation Resource AWS::IoT::PolicyPrincipalAttachment

import { CFResource } from '../../base';

export type PolicyPrincipalAttachment_Type =
  'AWS::IoT::PolicyPrincipalAttachment';
export const PolicyPrincipalAttachment_Type =
  'AWS::IoT::PolicyPrincipalAttachment';

/**
 * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html}
 */
export default function PolicyPrincipalAttachment(
  props: PolicyPrincipalAttachment_Properties
) {
  return new CFResource<
    PolicyPrincipalAttachment_Type,
    PolicyPrincipalAttachment_Properties
  >(PolicyPrincipalAttachment_Type, props);
}

/**
 * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html}
 */
export type PolicyPrincipalAttachment_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#cfn-iot-policyprincipalattachment-policyname}
   */
  PolicyName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#cfn-iot-policyprincipalattachment-principal}
   */
  Principal: string;
};
