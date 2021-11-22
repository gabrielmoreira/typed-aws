// CloudFormation Resource AWS::CloudFormation::Publisher

import { CfnResource, Resolvable } from '../../base';

export type Publisher_Type = 'AWS::CloudFormation::Publisher';
export const Publisher_Type = 'AWS::CloudFormation::Publisher';

/**
 * Register as a publisher in the CloudFormation Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html}
 */
export default function Publisher(props: Publisher_Properties) {
  return new CfnResource<Publisher_Properties>(Publisher_Type, props);
}

/**
 * Register as a publisher in the CloudFormation Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html}
 */
export type Publisher_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#cfn-cloudformation-publisher-accepttermsandconditions}
   */
  AcceptTermsAndConditions: Resolvable<boolean>;
  PublisherId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#cfn-cloudformation-publisher-connectionarn}
   */
  ConnectionArn?: Resolvable<string>;
  PublisherStatus?: Resolvable<'VERIFIED' | 'UNVERIFIED'>;
  PublisherProfile?: Resolvable<string>;
  IdentityProvider?: Resolvable<'AWS_Marketplace' | 'GitHub' | 'Bitbucket'>;
};
