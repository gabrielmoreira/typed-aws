// CloudFormation Resource AWS::CloudWatch::Dashboard

import { CFResource } from '../../base';

export type Dashboard_Type = 'AWS::CloudWatch::Dashboard';
export const Dashboard_Type = 'AWS::CloudWatch::Dashboard';

/**
 * Resource Type definition for AWS::CloudWatch::Dashboard {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export default function Dashboard(props: Dashboard_Properties) {
  return new CFResource<Dashboard_Type, Dashboard_Properties>(
    Dashboard_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CloudWatch::Dashboard {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export type Dashboard_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html#cfn-cloudwatch-dashboard-dashboardname}
   */
  DashboardName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html#cfn-cloudwatch-dashboard-dashboardbody}
   */
  DashboardBody: string;
  Id?: string;
};
