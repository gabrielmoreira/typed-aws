// CloudFormation Resource AWS::ACMPCA::CertificateAuthorityActivation

import { CfnResource } from '../../base';

export type CertificateAuthorityActivation_Type =
  'AWS::ACMPCA::CertificateAuthorityActivation';
export const CertificateAuthorityActivation_Type =
  'AWS::ACMPCA::CertificateAuthorityActivation';

/**
 * Used to install the certificate authority certificate and update the
 * certificate authority status. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html}
 */
export default function CertificateAuthorityActivation(
  props: CertificateAuthorityActivation_Properties
) {
  return new CfnResource<CertificateAuthorityActivation_Properties>(
    CertificateAuthorityActivation_Type,
    props
  );
}

/**
 * Used to install the certificate authority certificate and update the
 * certificate authority status. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html}
 */
export type CertificateAuthorityActivation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-certificateauthorityarn}
   */
  CertificateAuthorityArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-certificate}
   */
  Certificate: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-certificatechain}
   */
  CertificateChain?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#cfn-acmpca-certificateauthorityactivation-status}
   */
  Status?: string;
  CompleteCertificateChain?: string;
};
