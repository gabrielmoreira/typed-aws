// CloudFormation Resource AWS::Events::Archive

import { CfnResource, Resolvable } from '../../base';

export type Archive_Type = 'AWS::Events::Archive';
export const Archive_Type = 'AWS::Events::Archive';

/**
 * Resource Type definition for AWS::Events::Archive {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html}
 */
export default function Archive(props: Archive_Properties) {
  return new CfnResource<Archive_Properties>(Archive_Type, props);
}

/**
 * Resource Type definition for AWS::Events::Archive {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html}
 */
export type Archive_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-archivename}
   */
  ArchiveName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-sourcearn}
   */
  SourceArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-eventpattern}
   */
  EventPattern?: {
    [k: string]: unknown;
  };
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-retentiondays}
   */
  RetentionDays?: Resolvable<number>;
};
