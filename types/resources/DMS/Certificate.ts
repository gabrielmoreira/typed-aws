// CloudFormation Resource AWS::DMS::Certificate

import { CfnResource, Resolvable } from '../../base';

export type Certificate_Type = 'AWS::DMS::Certificate';
export const Certificate_Type = 'AWS::DMS::Certificate';

/**
 * Resource Type definition for AWS::DMS::Certificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html}
 */
export default function Certificate(props: Certificate_Properties) {
  return new CfnResource<Certificate_Properties>(Certificate_Type, props);
}

/**
 * Resource Type definition for AWS::DMS::Certificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html}
 */
export type Certificate_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#cfn-dms-certificate-certificateidentifier}
   */
  CertificateIdentifier?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#cfn-dms-certificate-certificatepem}
   */
  CertificatePem?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#cfn-dms-certificate-certificatewallet}
   */
  CertificateWallet?: Resolvable<string>;
};
