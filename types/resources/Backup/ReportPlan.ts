// CloudFormation Resource AWS::Backup::ReportPlan

import { CfnResource, Resolvable } from '../../base';

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
  ReportPlanName?: Resolvable<string>;
  ReportPlanArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportplandescription}
   */
  ReportPlanDescription?: Resolvable<string>;
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
    Formats?: Resolvable<string>[];
    S3BucketName: Resolvable<string>;
    S3KeyPrefix?: Resolvable<string>;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html#cfn-backup-reportplan-reportsetting}
   */
  ReportSetting: {
    ReportTemplate: Resolvable<string>;
    FrameworkArns?: Resolvable<string>[];
  };
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};
