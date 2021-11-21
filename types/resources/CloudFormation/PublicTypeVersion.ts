// CloudFormation Resource AWS::CloudFormation::PublicTypeVersion

import { CfnResource } from '../../base';

export type PublicTypeVersion_Type = 'AWS::CloudFormation::PublicTypeVersion';
export const PublicTypeVersion_Type = 'AWS::CloudFormation::PublicTypeVersion';

export default function PublicTypeVersion(props: PublicTypeVersion_Properties) {
  return new CfnResource<PublicTypeVersion_Properties>(
    PublicTypeVersion_Type,
    props
  );
}

export type PublicTypeVersion_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-arn}
       */
      Arn?: string;
      TypeVersionArn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-publicversionnumber}
       */
      PublicVersionNumber?: string;
      PublisherId?: string;
      PublicTypeArn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-typename}
       */
      TypeName: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-logdeliverybucket}
       */
      LogDeliveryBucket?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-type}
       */
      Type: 'RESOURCE' | 'MODULE';
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-arn}
       */
      Arn: string;
      TypeVersionArn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-publicversionnumber}
       */
      PublicVersionNumber?: string;
      PublisherId?: string;
      PublicTypeArn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-typename}
       */
      TypeName?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-logdeliverybucket}
       */
      LogDeliveryBucket?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-type}
       */
      Type?: 'RESOURCE' | 'MODULE';
    };
