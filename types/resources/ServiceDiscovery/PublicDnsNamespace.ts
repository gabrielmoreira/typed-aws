// CloudFormation Resource AWS::ServiceDiscovery::PublicDnsNamespace

import { CFResource } from '../../base';

export type PublicDnsNamespace_Type =
  'AWS::ServiceDiscovery::PublicDnsNamespace';
export const PublicDnsNamespace_Type =
  'AWS::ServiceDiscovery::PublicDnsNamespace';

/**
 * Resource Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html}
 */
export default function PublicDnsNamespace(
  props: PublicDnsNamespace_Properties
) {
  return new CFResource<PublicDnsNamespace_Type, PublicDnsNamespace_Properties>(
    PublicDnsNamespace_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html}
 */
export type PublicDnsNamespace_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html#cfn-servicediscovery-publicdnsnamespace-description}
   */
  Description?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html#cfn-servicediscovery-publicdnsnamespace-properties}
   */
  Properties?: Properties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html#cfn-servicediscovery-publicdnsnamespace-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html#cfn-servicediscovery-publicdnsnamespace-name}
   */
  Name: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-soa.html}
 */
export type SOA = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-soa.html#cfn-servicediscovery-publicdnsnamespace-soa-ttl}
   */
  TTL?: number;
};

export type Tag = {
  Value: string;
  Key: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-properties.html}
 */
export type Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-properties.html#cfn-servicediscovery-publicdnsnamespace-properties-dnsproperties}
   */
  DnsProperties?: PublicDnsPropertiesMutable;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable.html}
 */
export type PublicDnsPropertiesMutable = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable.html#cfn-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable-soa}
   */
  SOA?: SOA;
};
