// CloudFormation Resource AWS::EC2::LocalGatewayRoute

import { CfnResource } from '../../base';

export type LocalGatewayRoute_Type = 'AWS::EC2::LocalGatewayRoute';
export const LocalGatewayRoute_Type = 'AWS::EC2::LocalGatewayRoute';

/**
 * Describes a route for a local gateway route table. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html}
 */
export default function LocalGatewayRoute(props: LocalGatewayRoute_Properties) {
  return new CfnResource<LocalGatewayRoute_Properties>(
    LocalGatewayRoute_Type,
    props
  );
}

/**
 * Describes a route for a local gateway route table. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html}
 */
export type LocalGatewayRoute_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html#cfn-ec2-localgatewayroute-destinationcidrblock}
   */
  DestinationCidrBlock: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html#cfn-ec2-localgatewayroute-localgatewayroutetableid}
   */
  LocalGatewayRouteTableId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html#cfn-ec2-localgatewayroute-localgatewayvirtualinterfacegroupid}
   */
  LocalGatewayVirtualInterfaceGroupId: string;
  State?: string;
  Type?: string;
};
