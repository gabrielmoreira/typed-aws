// CloudFormation Resource AWS::EventSchemas::Discoverer

import { CfnResource, Resolvable } from '../../base';

export type Discoverer_Type = 'AWS::EventSchemas::Discoverer';
export const Discoverer_Type = 'AWS::EventSchemas::Discoverer';

/**
 * Resource Type definition for AWS::EventSchemas::Discoverer {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export default function Discoverer(props: Discoverer_Properties) {
  return new CfnResource<Discoverer_Properties>(Discoverer_Type, props);
}

/**
 * Resource Type definition for AWS::EventSchemas::Discoverer {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export type Discoverer_Properties = {
  DiscovererArn?: Resolvable<string>;
  DiscovererId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-crossaccount}
   */
  CrossAccount?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#cfn-eventschemas-discoverer-sourcearn}
   */
  SourceArn: Resolvable<string>;
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
  Value: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html#cfn-eventschemas-discoverer-tagsentry-key}
   */
  Key: Resolvable<string>;
};
