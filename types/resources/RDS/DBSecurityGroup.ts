// CloudFormation Resource AWS::RDS::DBSecurityGroup

import { CFResource } from '../../base';

export type DBSecurityGroup_Type = 'AWS::RDS::DBSecurityGroup';
export const DBSecurityGroup_Type = 'AWS::RDS::DBSecurityGroup';

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html}
 */
export default function DBSecurityGroup(props: DBSecurityGroup_Properties) {
  return new CFResource<DBSecurityGroup_Type, DBSecurityGroup_Properties>(
    DBSecurityGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html}
 */
export type DBSecurityGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html#cfn-rds-dbsecuritygroup-dbsecuritygroupingress}
   */
  DBSecurityGroupIngress: Ingress[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html#cfn-rds-dbsecuritygroup-ec2vpcid}
   */
  EC2VpcId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html#cfn-rds-dbsecuritygroup-groupdescription}
   */
  GroupDescription: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html#cfn-rds-dbsecuritygroup-tags}
   */
  Tags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html}
 */
export type Ingress = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html#cfn-rds-securitygroup-cidrip}
   */
  CIDRIP?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html#cfn-rds-securitygroup-ec2securitygroupid}
   */
  EC2SecurityGroupId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html#cfn-rds-securitygroup-ec2securitygroupname}
   */
  EC2SecurityGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html#cfn-rds-securitygroup-ec2securitygroupownerid}
   */
  EC2SecurityGroupOwnerId?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
