// CloudFormation Resource AWS::AppStream::DirectoryConfig

import { CfnResource, Resolvable } from '../../base';

export type DirectoryConfig_Type = 'AWS::AppStream::DirectoryConfig';
export const DirectoryConfig_Type = 'AWS::AppStream::DirectoryConfig';

/**
 * Resource Type definition for AWS::AppStream::DirectoryConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html}
 */
export default function DirectoryConfig(props: DirectoryConfig_Properties) {
  return new CfnResource<DirectoryConfig_Properties>(
    DirectoryConfig_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::AppStream::DirectoryConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html}
 */
export type DirectoryConfig_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-organizationalunitdistinguishednames}
   */
  OrganizationalUnitDistinguishedNames: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-serviceaccountcredentials}
   */
  ServiceAccountCredentials: ServiceAccountCredentials;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-directoryname}
   */
  DirectoryName: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html}
 */
export type ServiceAccountCredentials = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html#cfn-appstream-directoryconfig-serviceaccountcredentials-accountname}
   */
  AccountName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html#cfn-appstream-directoryconfig-serviceaccountcredentials-accountpassword}
   */
  AccountPassword: Resolvable<string>;
};
