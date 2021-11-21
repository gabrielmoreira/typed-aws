// CloudFormation Resource AWS::ServiceDiscovery::HttpNamespace

import { CFResource } from '../../base';

export type HttpNamespace_Type = 'AWS::ServiceDiscovery::HttpNamespace';
export const HttpNamespace_Type = 'AWS::ServiceDiscovery::HttpNamespace';

/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html}
 */
export default function HttpNamespace(props: HttpNamespace_Properties) {
  return new CFResource<HttpNamespace_Type, HttpNamespace_Properties>(
    HttpNamespace_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html}
 */
export type HttpNamespace_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#cfn-servicediscovery-httpnamespace-description}
   */
  Description?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#cfn-servicediscovery-httpnamespace-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#cfn-servicediscovery-httpnamespace-name}
   */
  Name: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
