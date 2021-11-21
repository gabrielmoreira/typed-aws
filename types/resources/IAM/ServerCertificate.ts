// CloudFormation Resource AWS::IAM::ServerCertificate

import { CFResource } from '../../base';

export type ServerCertificate_Type = 'AWS::IAM::ServerCertificate';
export const ServerCertificate_Type = 'AWS::IAM::ServerCertificate';

/**
 * Resource Type definition for AWS::IAM::ServerCertificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html}
 */
export default function ServerCertificate(props: ServerCertificate_Properties) {
  return new CFResource<ServerCertificate_Type, ServerCertificate_Properties>(
    ServerCertificate_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IAM::ServerCertificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html}
 */
export type ServerCertificate_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#cfn-iam-servercertificate-certificatebody}
   */
  CertificateBody?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#cfn-iam-servercertificate-certificatechain}
   */
  CertificateChain?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#cfn-iam-servercertificate-servercertificatename}
   */
  ServerCertificateName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#cfn-iam-servercertificate-path}
   */
  Path?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#cfn-iam-servercertificate-privatekey}
   */
  PrivateKey?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#cfn-iam-servercertificate-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: string;
  Key: string;
};
