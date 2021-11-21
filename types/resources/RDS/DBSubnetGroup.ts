// CloudFormation Resource AWS::RDS::DBSubnetGroup

import { CFResource } from '../../base';

export type DBSubnetGroup_Type = 'AWS::RDS::DBSubnetGroup';
export const DBSubnetGroup_Type = 'AWS::RDS::DBSubnetGroup';

/**
 * Resource Type definition for AWS::RDS::DBSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html}
 */
export default function DBSubnetGroup(props: DBSubnetGroup_Properties) {
  return new CFResource<DBSubnetGroup_Type, DBSubnetGroup_Properties>(
    DBSubnetGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::RDS::DBSubnetGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html}
 */
export type DBSubnetGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html#cfn-rds-dbsubnetgroup-dbsubnetgroupdescription}
   */
  DBSubnetGroupDescription: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html#cfn-rds-dbsubnetgroup-dbsubnetgroupname}
   */
  DBSubnetGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html#cfn-rds-dbsubnetgroup-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html#cfn-rds-dbsubnetgroup-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
