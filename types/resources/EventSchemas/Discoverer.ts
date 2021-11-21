// CloudFormation Resource AWS::EventSchemas::Discoverer

import { CFResource } from '../../base';

export type Discoverer_Type = 'AWS::EventSchemas::Discoverer';
export const Discoverer_Type = 'AWS::EventSchemas::Discoverer';

/**
 * Resource Type definition for AWS::EventSchemas::Discoverer {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export default function Discoverer(props: Discoverer_Properties) {
  return new CFResource<Discoverer_Type, Discoverer_Properties>(
    Discoverer_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EventSchemas::Discoverer {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export type Discoverer_Properties = {
  DiscovererArn?: string;
  DiscovererId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-crossaccount}
   */
  CrossAccount?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-sourcearn}
   */
  SourceArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-tags}
   */
  Tags?: TagsEntry[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html}
 */
export type TagsEntry = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html#cfn-eventschemas-discoverer-tagsentry-value}
   */
  Value: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html#cfn-eventschemas-discoverer-tagsentry-key}
   */
  Key: string;
};
