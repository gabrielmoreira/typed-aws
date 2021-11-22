// CloudFormation Resource AWS::IoT::PolicyPrincipalAttachment

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<PolicyPrincipalAttachment_Properties>(
    PolicyPrincipalAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html}
 */
export type PolicyPrincipalAttachment_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#cfn-iot-policyprincipalattachment-policyname}
   */
  PolicyName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#cfn-iot-policyprincipalattachment-principal}
   */
  Principal: Resolvable<string>;
};
