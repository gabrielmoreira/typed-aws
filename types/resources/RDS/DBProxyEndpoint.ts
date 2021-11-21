// CloudFormation Resource AWS::RDS::DBProxyEndpoint

import { CfnResource } from '../../base';

export type DBProxyEndpoint_Type = 'AWS::RDS::DBProxyEndpoint';
export const DBProxyEndpoint_Type = 'AWS::RDS::DBProxyEndpoint';

/**
 * Resource schema for AWS::RDS::DBProxyEndpoint. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html}
 */
export default function DBProxyEndpoint(props: DBProxyEndpoint_Properties) {
  return new CfnResource<DBProxyEndpoint_Properties>(
    DBProxyEndpoint_Type,
    props
  );
}

/**
 * Resource schema for AWS::RDS::DBProxyEndpoint. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html}
 */
export type DBProxyEndpoint_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyendpointname}
   */
  DBProxyEndpointName: string;
  DBProxyEndpointArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyname}
   */
  DBProxyName: string;
  VpcId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsecuritygroupids}
   */
  VpcSecurityGroupIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsubnetids}
   */
  VpcSubnetIds: string[];
  Endpoint?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-targetrole}
   */
  TargetRole?: 'READ_WRITE' | 'READ_ONLY';
  IsDefault?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-tags}
   */
  Tags?: TagFormat[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html}
 */
export type TagFormat = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html#cfn-rds-dbproxyendpoint-tagformat-key}
   */
  Key?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html#cfn-rds-dbproxyendpoint-tagformat-value}
   */
  Value?: string;
};
