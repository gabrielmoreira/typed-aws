// CloudFormation Resource AWS::EC2::InternetGateway

import { CFResource } from '../../base';

export type InternetGateway_Type = 'AWS::EC2::InternetGateway';
export const InternetGateway_Type = 'AWS::EC2::InternetGateway';

/**
 * Resource Type definition for AWS::EC2::InternetGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html}
 */
export default function InternetGateway(props: InternetGateway_Properties) {
  return new CFResource<InternetGateway_Type, InternetGateway_Properties>(
    InternetGateway_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::InternetGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html}
 */
export type InternetGateway_Properties = {
  InternetGatewayId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html#cfn-ec2-internetgateway-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
