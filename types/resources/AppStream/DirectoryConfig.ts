// CloudFormation Resource AWS::AppStream::DirectoryConfig

import { CFResource } from '../../base';

export type DirectoryConfig_Type = 'AWS::AppStream::DirectoryConfig';
export const DirectoryConfig_Type = 'AWS::AppStream::DirectoryConfig';

/**
 * Resource Type definition for AWS::AppStream::DirectoryConfig {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html}
 */
export default function DirectoryConfig(props: DirectoryConfig_Properties) {
  return new CFResource<DirectoryConfig_Type, DirectoryConfig_Properties>(
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
  OrganizationalUnitDistinguishedNames: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-serviceaccountcredentials}
   */
  ServiceAccountCredentials: ServiceAccountCredentials;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-directoryname}
   */
  DirectoryName: string;
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
  AccountName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html#cfn-appstream-directoryconfig-serviceaccountcredentials-accountpassword}
   */
  AccountPassword: string;
};
