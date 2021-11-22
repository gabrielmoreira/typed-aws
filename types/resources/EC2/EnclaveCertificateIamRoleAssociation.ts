// CloudFormation Resource AWS::EC2::EnclaveCertificateIamRoleAssociation

import { CfnResource, Resolvable } from '../../base';

export type EnclaveCertificateIamRoleAssociation_Type =
  'AWS::EC2::EnclaveCertificateIamRoleAssociation';
export const EnclaveCertificateIamRoleAssociation_Type =
  'AWS::EC2::EnclaveCertificateIamRoleAssociation';

/**
 * Associates an AWS Identity and Access Management (IAM) role with an
 * AWS Certificate Manager (ACM) certificate. This association is based
 * on Amazon Resource Names and it enables the certificate to be used by
 * the ACM for Nitro Enclaves application inside an enclave. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html}
 */
export default function EnclaveCertificateIamRoleAssociation(
  props: EnclaveCertificateIamRoleAssociation_Properties
) {
  return new CfnResource<EnclaveCertificateIamRoleAssociation_Properties>(
    EnclaveCertificateIamRoleAssociation_Type,
    props
  );
}

/**
 * Associates an AWS Identity and Access Management (IAM) role with an
 * AWS Certificate Manager (ACM) certificate. This association is based
 * on Amazon Resource Names and it enables the certificate to be used by
 * the ACM for Nitro Enclaves application inside an enclave. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html}
 */
export type EnclaveCertificateIamRoleAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html#cfn-ec2-enclavecertificateiamroleassociation-certificatearn}
   */
  CertificateArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html#cfn-ec2-enclavecertificateiamroleassociation-rolearn}
   */
  RoleArn: Resolvable<string>;
  CertificateS3BucketName?: Resolvable<string>;
  CertificateS3ObjectKey?: Resolvable<string>;
  EncryptionKmsKeyId?: Resolvable<string>;
};
