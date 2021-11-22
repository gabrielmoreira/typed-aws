// CloudFormation Resource AWS::IAM::ServiceLinkedRole

import { CfnResource, Resolvable } from '../../base';

export type ServiceLinkedRole_Type = 'AWS::IAM::ServiceLinkedRole';
export const ServiceLinkedRole_Type = 'AWS::IAM::ServiceLinkedRole';

/**
 * Resource Type definition for AWS::IAM::ServiceLinkedRole {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html}
 */
export default function ServiceLinkedRole(props: ServiceLinkedRole_Properties) {
  return new CfnResource<ServiceLinkedRole_Properties>(
    ServiceLinkedRole_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IAM::ServiceLinkedRole {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html}
 */
export type ServiceLinkedRole_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html#cfn-iam-servicelinkedrole-customsuffix}
   */
  CustomSuffix?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html#cfn-iam-servicelinkedrole-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html#cfn-iam-servicelinkedrole-awsservicename}
   */
  AWSServiceName: Resolvable<string>;
};
