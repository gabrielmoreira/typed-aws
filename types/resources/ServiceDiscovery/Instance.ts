// CloudFormation Resource AWS::ServiceDiscovery::Instance

import { CfnResource, Resolvable } from '../../base';

export type Instance_Type = 'AWS::ServiceDiscovery::Instance';
export const Instance_Type = 'AWS::ServiceDiscovery::Instance';

/**
 * Resource Type definition for AWS::ServiceDiscovery::Instance {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html}
 */
export default function Instance(props: Instance_Properties) {
  return new CfnResource<Instance_Properties>(Instance_Type, props);
}

/**
 * Resource Type definition for AWS::ServiceDiscovery::Instance {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html}
 */
export type Instance_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#cfn-servicediscovery-instance-instanceattributes}
   */
  InstanceAttributes: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#cfn-servicediscovery-instance-instanceid}
   */
  InstanceId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#cfn-servicediscovery-instance-serviceid}
   */
  ServiceId: Resolvable<string>;
};
