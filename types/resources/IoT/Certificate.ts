// CloudFormation Resource AWS::IoT::Certificate

import { CfnResource } from '../../base';

export type Certificate_Type = 'AWS::IoT::Certificate';
export const Certificate_Type = 'AWS::IoT::Certificate';

/**
 * Use the AWS::IoT::Certificate resource to declare an AWS IoT X.509
 * certificate. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html}
 */
export default function Certificate(props: Certificate_Properties) {
  return new CfnResource<Certificate_Properties>(Certificate_Type, props);
}

/**
 * Use the AWS::IoT::Certificate resource to declare an AWS IoT X.509
 * certificate. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html}
 */
export type Certificate_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-cacertificatepem}
   */
  CACertificatePem?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatepem}
   */
  CertificatePem?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatesigningrequest}
   */
  CertificateSigningRequest?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatemode}
   */
  CertificateMode?: 'DEFAULT' | 'SNI_ONLY';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-status}
   */
  Status:
    | 'ACTIVE'
    | 'INACTIVE'
    | 'REVOKED'
    | 'PENDING_TRANSFER'
    | 'PENDING_ACTIVATION';
  Id?: string;
  Arn?: string;
};
