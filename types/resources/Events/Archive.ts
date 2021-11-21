// CloudFormation Resource AWS::Events::Archive

import { CFResource } from '../../base';

export type Archive_Type = 'AWS::Events::Archive';
export const Archive_Type = 'AWS::Events::Archive';

/**
 * Resource Type definition for AWS::Events::Archive {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html}
 */
export default function Archive(props: Archive_Properties) {
  return new CFResource<Archive_Type, Archive_Properties>(Archive_Type, props);
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
  ArchiveName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-sourcearn}
   */
  SourceArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-eventpattern}
   */
  EventPattern?: {
    [k: string]: unknown;
  };
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-retentiondays}
   */
  RetentionDays?: number;
};
