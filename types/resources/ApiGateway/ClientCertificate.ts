// CloudFormation Resource AWS::ApiGateway::ClientCertificate

import { CfnResource, Resolvable } from '../../base';

export type ClientCertificate_Type = 'AWS::ApiGateway::ClientCertificate';
export const ClientCertificate_Type = 'AWS::ApiGateway::ClientCertificate';

/**
 * Resource Type definition for AWS::ApiGateway::ClientCertificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html}
 */
export default function ClientCertificate(props: ClientCertificate_Properties) {
  return new CfnResource<ClientCertificate_Properties>(
    ClientCertificate_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGateway::ClientCertificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html}
 */
export type ClientCertificate_Properties = {
  ClientCertificateId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html#cfn-apigateway-clientcertificate-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html#cfn-apigateway-clientcertificate-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
