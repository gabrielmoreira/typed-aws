// CloudFormation Resource AWS::RDS::DBProxyEndpoint

import { CfnResource, Resolvable } from '../../base';

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
  DBProxyEndpointName: Resolvable<string>;
  DBProxyEndpointArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyname}
   */
  DBProxyName: Resolvable<string>;
  VpcId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsecuritygroupids}
   */
  VpcSecurityGroupIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsubnetids}
   */
  VpcSubnetIds: Resolvable<string>[];
  Endpoint?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-targetrole}
   */
  TargetRole?: Resolvable<'READ_WRITE' | 'READ_ONLY'>;
  IsDefault?: Resolvable<boolean>;
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
  Key?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html#cfn-rds-dbproxyendpoint-tagformat-value}
   */
  Value?: Resolvable<string>;
};
