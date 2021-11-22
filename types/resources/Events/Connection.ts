// CloudFormation Resource AWS::Events::Connection

import { CfnResource, Resolvable } from '../../base';

export type Connection_Type = 'AWS::Events::Connection';
export const Connection_Type = 'AWS::Events::Connection';

/**
 * Resource Type definition for AWS::Events::Connection. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export default function Connection(props: Connection_Properties) {
  return new CfnResource<Connection_Properties>(Connection_Type, props);
}

/**
 * Resource Type definition for AWS::Events::Connection. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export type Connection_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-name}
   */
  Name?: Resolvable<string>;
  Arn?: Resolvable<string>;
  SecretArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authorizationtype}
   */
  AuthorizationType: Resolvable<
    'API_KEY' | 'BASIC' | 'OAUTH_CLIENT_CREDENTIALS'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters}
   */
  AuthParameters:
    | {
        ApiKeyAuthParameters?: ApiKeyAuthParameters;
        BasicAuthParameters: BasicAuthParameters;
        OAuthParameters?: OAuthParameters;
        InvocationHttpParameters?: ConnectionHttpParameters;
      }
    | {
        ApiKeyAuthParameters?: ApiKeyAuthParameters;
        BasicAuthParameters?: BasicAuthParameters;
        OAuthParameters: OAuthParameters;
        InvocationHttpParameters?: ConnectionHttpParameters;
      }
    | {
        ApiKeyAuthParameters: ApiKeyAuthParameters;
        BasicAuthParameters?: BasicAuthParameters;
        OAuthParameters?: OAuthParameters;
        InvocationHttpParameters?: ConnectionHttpParameters;
      };
};

export type AuthParameters =
  | {
      ApiKeyAuthParameters?: ApiKeyAuthParameters;
      BasicAuthParameters: BasicAuthParameters;
      OAuthParameters?: OAuthParameters;
      InvocationHttpParameters?: ConnectionHttpParameters;
    }
  | {
      ApiKeyAuthParameters?: ApiKeyAuthParameters;
      BasicAuthParameters?: BasicAuthParameters;
      OAuthParameters: OAuthParameters;
      InvocationHttpParameters?: ConnectionHttpParameters;
    }
  | {
      ApiKeyAuthParameters: ApiKeyAuthParameters;
      BasicAuthParameters?: BasicAuthParameters;
      OAuthParameters?: OAuthParameters;
      InvocationHttpParameters?: ConnectionHttpParameters;
    };

export type BasicAuthParameters = {
  Username: Resolvable<string>;
  Password: Resolvable<string>;
};

export type OAuthParameters = {
  ClientParameters: ClientParameters;
  AuthorizationEndpoint: Resolvable<string>;
  HttpMethod: Resolvable<'GET' | 'POST' | 'PUT'>;
  OAuthHttpParameters?: ConnectionHttpParameters;
};

export type ApiKeyAuthParameters = {
  ApiKeyName: Resolvable<string>;
  ApiKeyValue: Resolvable<string>;
};

export type ClientParameters = {
  ClientID: Resolvable<string>;
  ClientSecret: Resolvable<string>;
};

export type ConnectionHttpParameters = {
  HeaderParameters?: Parameter[];
  QueryStringParameters?: Parameter[];
  BodyParameters?: Parameter[];
};

export type Parameter = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
  IsValueSecret?: Resolvable<boolean>;
};
