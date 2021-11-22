// CloudFormation Resource AWS::AuditManager::Assessment

import { CfnResource, Resolvable } from '../../base';

export type Assessment_Type = 'AWS::AuditManager::Assessment';
export const Assessment_Type = 'AWS::AuditManager::Assessment';

/**
 * An entity that defines the scope of audit evidence collected by AWS
 * Audit Manager. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html}
 */
export default function Assessment(props: Assessment_Properties) {
  return new CfnResource<Assessment_Properties>(Assessment_Type, props);
}

/**
 * An entity that defines the scope of audit evidence collected by AWS
 * Audit Manager. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html}
 */
export type Assessment_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-frameworkid}
   */
  FrameworkId?: FrameworkId;
  AssessmentId?: UUID;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsaccount}
   */
  AwsAccount?: AWSAccount;
  Arn?: AssessmentArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-tags}
   */
  Tags?: Tag[];
  Delegations?: Delegation[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-roles}
   */
  Roles?: Role[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-scope}
   */
  Scope?: Scope;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-assessmentreportsdestination}
   */
  AssessmentReportsDestination?: AssessmentReportsDestination;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-status}
   */
  Status?: AssessmentStatus;
  CreationTime?: Timestamp;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-name}
   */
  Name?: AssessmentName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-description}
   */
  Description?: AssessmentDescription;
};

export type FrameworkId = Resolvable<string>;

export type UUID = Resolvable<string>;

export type AccountId = Resolvable<string>;

export type EmailAddress = Resolvable<string>;

export type AccountName = Resolvable<string>;

/**
 * The AWS account associated with the assessment. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html}
 */
export type AWSAccount = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html#cfn-auditmanager-assessment-awsaccount-id}
   */
  Id?: AccountId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html#cfn-auditmanager-assessment-awsaccount-emailaddress}
   */
  EmailAddress?: EmailAddress;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html#cfn-auditmanager-assessment-awsaccount-name}
   */
  Name?: AccountName;
};

export type AssessmentArn = Resolvable<string>;

export type Timestamp = Resolvable<number>;

export type ControlSetId = Resolvable<string>;

export type CreatedBy = Resolvable<string>;

export type IamArn = Resolvable<string>;

export type AssessmentName = Resolvable<string>;

export type DelegationComment = Resolvable<string>;

export type RoleType = Resolvable<'PROCESS_OWNER' | 'RESOURCE_OWNER'>;

export type DelegationStatus = Resolvable<
  'IN_PROGRESS' | 'UNDER_REVIEW' | 'COMPLETE'
>;

/**
 * The assignment of a control set to a delegate for review. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html}
 */
export type Delegation = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-lastupdated}
   */
  LastUpdated?: Timestamp;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-controlsetid}
   */
  ControlSetId?: ControlSetId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-creationtime}
   */
  CreationTime?: Timestamp;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-createdby}
   */
  CreatedBy?: CreatedBy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-rolearn}
   */
  RoleArn?: IamArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-assessmentname}
   */
  AssessmentName?: AssessmentName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-comment}
   */
  Comment?: DelegationComment;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-id}
   */
  Id?: UUID;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-roletype}
   */
  RoleType?: RoleType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-assessmentid}
   */
  AssessmentId?: UUID;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html#cfn-auditmanager-assessment-delegation-status}
   */
  Status?: DelegationStatus;
};

/**
 * The wrapper that contains AWS Audit Manager role information, such as
 * the role type and IAM ARN. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html}
 */
export type Role = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html#cfn-auditmanager-assessment-role-rolearn}
   */
  RoleArn?: IamArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html#cfn-auditmanager-assessment-role-roletype}
   */
  RoleType?: RoleType;
};

export type AWSServiceName = Resolvable<string>;

/**
 * An AWS service such as Amazon S3, AWS CloudTrail, and so on. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html}
 */
export type AWSService = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html#cfn-auditmanager-assessment-awsservice-servicename}
   */
  ServiceName?: AWSServiceName;
};

/**
 * The wrapper that contains the AWS accounts and AWS services in scope
 * for the assessment. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html}
 */
export type Scope = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html#cfn-auditmanager-assessment-scope-awsaccounts}
   */
  AwsAccounts?: AWSAccount[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html#cfn-auditmanager-assessment-scope-awsservices}
   */
  AwsServices?: AWSService[];
};

export type S3Url = Resolvable<string>;

export type AssessmentReportDestinationType = Resolvable<'S3'>;

/**
 * The destination in which evidence reports are stored for the specified
 * assessment. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html}
 */
export type AssessmentReportsDestination = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html#cfn-auditmanager-assessment-assessmentreportsdestination-destination}
   */
  Destination?: S3Url;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html#cfn-auditmanager-assessment-assessmentreportsdestination-destinationtype}
   */
  DestinationType?: AssessmentReportDestinationType;
};

export type AssessmentStatus = Resolvable<'ACTIVE' | 'INACTIVE'>;

export type AssessmentDescription = Resolvable<string>;

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
