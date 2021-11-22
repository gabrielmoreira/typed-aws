// CloudFormation Resource AWS::Macie::Session

import { CfnResource, Resolvable } from '../../base';

export type Session_Type = 'AWS::Macie::Session';
export const Session_Type = 'AWS::Macie::Session';

/**
 * The AWS::Macie::Session resource specifies a new Amazon Macie session.
 * A session is an object that represents the Amazon Macie service. A
 * session is required for Amazon Macie to become operational. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html}
 */
export default function Session(props: Session_Properties) {
  return new CfnResource<Session_Properties>(Session_Type, props);
}

/**
 * The AWS::Macie::Session resource specifies a new Amazon Macie session.
 * A session is an object that represents the Amazon Macie service. A
 * session is required for Amazon Macie to become operational. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html}
 */
export type Session_Properties = {
  AwsAccountId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html#cfn-macie-session-status}
   */
  Status?: Resolvable<'ENABLED' | 'PAUSED'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html#cfn-macie-session-findingpublishingfrequency}
   */
  FindingPublishingFrequency?: Resolvable<
    'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'SIX_HOURS'
  >;
  ServiceRole?: Resolvable<string>;
};
