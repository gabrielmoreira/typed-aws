// CloudFormation Resource AWS::Backup::ReportPlan

import { CfnResource } from '../../base';

export type ReportPlan_Type = 'AWS::Backup::ReportPlan';
export const ReportPlan_Type = 'AWS::Backup::ReportPlan';

/**
 * Contains detailed information about a report plan in AWS Backup Audit
 * Manager. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html}
 */
export default function ReportPlan(props: ReportPlan_Properties) {
  return new CfnResource<ReportPlan_Properties>(ReportPlan_Type, props);
}

/**
 * Contains detailed information about a report plan in AWS Backup Audit
 * Manager. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html}
 */
export type ReportPlan_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplanname}
   */
  ReportPlanName?: string;
  ReportPlanArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplandescription}
   */
  ReportPlanDescription?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplantags}
   */
  ReportPlanTags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportdeliverychannel}
   */
  ReportDeliveryChannel: {
    Formats?: string[];
    S3BucketName: string;
    S3KeyPrefix?: string;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportsetting}
   */
  ReportSetting: {
    ReportTemplate: string;
    FrameworkArns?: string[];
  };
};

export type Tag = {
  Key?: string;
  Value?: string;
};
