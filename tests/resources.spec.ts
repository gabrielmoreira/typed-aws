import { Fn, CfnResource, SQS } from '../types';

describe('CloudFormation Intrinsic Functions', () => {
  it('should create a CFN resource with Type and Properties', () => {
    // When
    const queue = SQS.Queue({
      QueueName: 'MyName',
      KmsMasterKeyId: Fn.Ref('myKms'),
      Tags: [{ Key: 'tag-key', Value: 'tag-value' }],
    })
      .dependsOn('myKms')
      .metadata({ metaKey1: 'meta-key-value', keyA: 1 })
      .metadata({ keyA: 'replaced', keyB: 2 })
      .deletionPolicy('Retain')
      .updateReplacePolicy('Snapshot')
      .updatePolicy({ SomeUpdatePolicy: 'some-value' })
      .creationPolicy({ SomeCreationPolicy: 'my-value' })
      .with((resource) => {
        resource.metadata({ myAdditionalMetadata: true });
      });
    // Then
    expect(queue).toBeInstanceOf(CfnResource);
    expect(JSON.parse(JSON.stringify(queue))).toStrictEqual({
      Type: 'AWS::SQS::Queue',
      Properties: {
        QueueName: 'MyName',
        Tags: [{ Key: 'tag-key', Value: 'tag-value' }],
        KmsMasterKeyId: {
          Ref: 'myKms',
        },
      },
      DependsOn: ['myKms'],
      Metadata: {
        metaKey1: 'meta-key-value',
        keyA: 'replaced',
        keyB: 2,
        myAdditionalMetadata: true,
      },
      DeletionPolicy: 'Retain',
      UpdateReplacePolicy: 'Snapshot',
      UpdatePolicy: { SomeUpdatePolicy: 'some-value' },
      CreationPolicy: { SomeCreationPolicy: 'my-value' },
    });
  });
});
