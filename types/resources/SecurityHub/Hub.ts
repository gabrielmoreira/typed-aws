// CloudFormation Resource AWS::SecurityHub::Hub

import { CFResource } from '../../base';

export type Hub_Type = 'AWS::SecurityHub::Hub';
export const Hub_Type = 'AWS::SecurityHub::Hub';

/**
 * Resource Type definition for AWS::SecurityHub::Hub {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html}
 */
export default function Hub(props: Hub_Properties) {
  return new CFResource<Hub_Type, Hub_Properties>(Hub_Type, props);
}

/**
 * Resource Type definition for AWS::SecurityHub::Hub {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html}
 */
export type Hub_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-tags}
   */
  Tags?: {
    [k: string]: unknown;
  };
};
