// CloudFormation Resource AWS::CloudFormation::PublicTypeVersion

import { CfnResource, Resolvable } from '../../base';

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
      Arn?: Resolvable<string>;
      TypeVersionArn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-publicversionnumber}
       */
      PublicVersionNumber?: Resolvable<string>;
      PublisherId?: Resolvable<string>;
      PublicTypeArn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-typename}
       */
      TypeName: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-logdeliverybucket}
       */
      LogDeliveryBucket?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-type}
       */
      Type: Resolvable<'RESOURCE' | 'MODULE'>;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-arn}
       */
      Arn: Resolvable<string>;
      TypeVersionArn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-publicversionnumber}
       */
      PublicVersionNumber?: Resolvable<string>;
      PublisherId?: Resolvable<string>;
      PublicTypeArn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-typename}
       */
      TypeName?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-logdeliverybucket}
       */
      LogDeliveryBucket?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-type}
       */
      Type?: Resolvable<'RESOURCE' | 'MODULE'>;
    };
