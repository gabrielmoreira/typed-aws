// CloudFormation Resource AWS::ACMPCA::Permission

import { CFResource } from '../../base';

export type Permission_Type = 'AWS::ACMPCA::Permission';
export const Permission_Type = 'AWS::ACMPCA::Permission';

/**
 * Permission set on private certificate authority {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html}
 */
export default function Permission(props: Permission_Properties) {
  return new CFResource<Permission_Type, Permission_Properties>(
    Permission_Type,
    props
  );
}

/**
 * Permission set on private certificate authority {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html}
 */
export type Permission_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-actions}
   */
  Actions: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-certificateauthorityarn}
   */
  CertificateAuthorityArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-principal}
   */
  Principal: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-sourceaccount}
   */
  SourceAccount?: string;
};
