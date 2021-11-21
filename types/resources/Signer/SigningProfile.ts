// CloudFormation Resource AWS::Signer::SigningProfile

import { CFResource } from '../../base';

export type SigningProfile_Type = 'AWS::Signer::SigningProfile';
export const SigningProfile_Type = 'AWS::Signer::SigningProfile';

/**
 * A signing profile is a signing template that can be used to carry out
 * a pre-defined signing job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html}
 */
export default function SigningProfile(props: SigningProfile_Properties) {
  return new CFResource<SigningProfile_Type, SigningProfile_Properties>(
    SigningProfile_Type,
    props
  );
}

/**
 * A signing profile is a signing template that can be used to carry out
 * a pre-defined signing job. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html}
 */
export type SigningProfile_Properties = {
  ProfileName?: string;
  ProfileVersion?: ProfileVersion;
  Arn?: Arn;
  ProfileVersionArn?: Arn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-signaturevalidityperiod}
   */
  SignatureValidityPeriod?: SignatureValidityPeriod;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-platformid}
   */
  PlatformId: PlatformId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-tags}
   */
  Tags?: Tag[];
};

export type PlatformId = 'AWSLambda-SHA384-ECDSA';

export type Arn = string;

export type ProfileVersion = string;

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html}
 */
export type SignatureValidityPeriod = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html#cfn-signer-signingprofile-signaturevalidityperiod-value}
   */
  Value?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html#cfn-signer-signingprofile-signaturevalidityperiod-type}
   */
  Type?: 'DAYS' | 'MONTHS' | 'YEARS';
};

export type Tag = {
  Key?: string;
  Value?: string;
};
