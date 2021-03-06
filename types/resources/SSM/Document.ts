// CloudFormation Resource AWS::SSM::Document

import { CfnResource, Resolvable } from '../../base';

export type Document_Type = 'AWS::SSM::Document';
export const Document_Type = 'AWS::SSM::Document';

/**
 * The AWS::SSM::Document resource is an SSM document in AWS Systems
 * Manager that defines the actions that Systems Manager performs, which
 * can be used to set up and run commands on your instances. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html}
 */
export default function Document(props: Document_Properties) {
  return new CfnResource<Document_Properties>(Document_Type, props);
}

/**
 * The AWS::SSM::Document resource is an SSM document in AWS Systems
 * Manager that defines the actions that Systems Manager performs, which
 * can be used to set up and run commands on your instances. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html}
 */
export type Document_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-content}
   */
  Content:
    | {
        [k: string]: unknown;
      }
    | Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-attachments}
   */
  Attachments?: AttachmentsSource[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname}
   */
  VersionName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documenttype}
   */
  DocumentType?: Resolvable<
    | 'ApplicationConfiguration'
    | 'ApplicationConfigurationSchema'
    | 'Automation'
    | 'Automation.ChangeTemplate'
    | 'ChangeCalendar'
    | 'CloudFormation'
    | 'Command'
    | 'DeploymentStrategy'
    | 'Package'
    | 'Policy'
    | 'ProblemAnalysis'
    | 'ProblemAnalysisTemplate'
    | 'Session'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-documentformat}
   */
  DocumentFormat?: Resolvable<'YAML' | 'JSON' | 'TEXT'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype}
   */
  TargetType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires}
   */
  Requires?: DocumentRequires[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html}
 */
export type AttachmentsSource = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html#cfn-ssm-document-attachmentssource-key}
   */
  Key?: Resolvable<'SourceUrl' | 'S3FileUrl' | 'AttachmentReference'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html#cfn-ssm-document-attachmentssource-values}
   */
  Values?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html#cfn-ssm-document-attachmentssource-name}
   */
  Name?: Resolvable<string>;
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html}
 */
export type DocumentRequires = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html#cfn-ssm-document-documentrequires-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html#cfn-ssm-document-documentrequires-version}
   */
  Version?: Resolvable<string>;
};
