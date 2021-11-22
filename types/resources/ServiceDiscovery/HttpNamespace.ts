// CloudFormation Resource AWS::ServiceDiscovery::HttpNamespace

import { CfnResource, Resolvable } from '../../base';

export type HttpNamespace_Type = 'AWS::ServiceDiscovery::HttpNamespace';
export const HttpNamespace_Type = 'AWS::ServiceDiscovery::HttpNamespace';

/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html}
 */
export default function HttpNamespace(props: HttpNamespace_Properties) {
  return new CfnResource<HttpNamespace_Properties>(HttpNamespace_Type, props);
}

/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html}
 */
export type HttpNamespace_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#cfn-servicediscovery-httpnamespace-description}
   */
  Description?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#cfn-servicediscovery-httpnamespace-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#cfn-servicediscovery-httpnamespace-name}
   */
  Name: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
