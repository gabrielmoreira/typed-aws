// CloudFormation Resource AWS::RDS::DBSecurityGroupIngress

import { CFResource } from '../../base';

export type DBSecurityGroupIngress_Type = 'AWS::RDS::DBSecurityGroupIngress';
export const DBSecurityGroupIngress_Type = 'AWS::RDS::DBSecurityGroupIngress';

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroupIngress {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html}
 */
export default function DBSecurityGroupIngress(
  props: DBSecurityGroupIngress_Properties
) {
  return new CFResource<
    DBSecurityGroupIngress_Type,
    DBSecurityGroupIngress_Properties
  >(DBSecurityGroupIngress_Type, props);
}

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroupIngress {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html}
 */
export type DBSecurityGroupIngress_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html#cfn-rds-securitygroup-ingress-cidrip}
   */
  CIDRIP?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html#cfn-rds-securitygroup-ingress-dbsecuritygroupname}
   */
  DBSecurityGroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html#cfn-rds-securitygroup-ingress-ec2securitygroupid}
   */
  EC2SecurityGroupId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html#cfn-rds-securitygroup-ingress-ec2securitygroupname}
   */
  EC2SecurityGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html#cfn-rds-securitygroup-ingress-ec2securitygroupownerid}
   */
  EC2SecurityGroupOwnerId?: string;
};
