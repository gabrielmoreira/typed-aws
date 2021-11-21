// CloudFormation Resource AWS::IoT::Authorizer

import { CFResource } from '../../base';

export type Authorizer_Type = 'AWS::IoT::Authorizer';
export const Authorizer_Type = 'AWS::IoT::Authorizer';

/**
 * Creates an authorizer. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html}
 */
export default function Authorizer(props: Authorizer_Properties) {
  return new CFResource<Authorizer_Type, Authorizer_Properties>(
    Authorizer_Type,
    props
  );
}

/**
 * Creates an authorizer. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html}
 */
export type Authorizer_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-authorizerfunctionarn}
   */
  AuthorizerFunctionArn: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-authorizername}
   */
  AuthorizerName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-signingdisabled}
   */
  SigningDisabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-status}
   */
  Status?: 'ACTIVE' | 'INACTIVE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-tokenkeyname}
   */
  TokenKeyName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-tokensigningpublickeys}
   */
  TokenSigningPublicKeys?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
