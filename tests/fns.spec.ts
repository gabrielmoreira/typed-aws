import { Fn, IntrinsicFunction } from '../types';

describe('CloudFormation Intrinsic Functions', () => {
  it('should serialize Fn::Base64', () => {
    // When
    const result = Fn.Base64('mystring');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Base64': 'mystring' })
    );
  });
  it('should serialize Fn::Cidr', () => {
    // When
    const result = Fn.Cidr('192.168.0.0/24', '6', '5');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Cidr': ['192.168.0.0/24', '6', '5'] })
    );
  });
  it('should serialize Fn::Cidr (numbers)', () => {
    // When
    const result = Fn.Cidr('ipBlock', 1, 2);
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Cidr': ['ipBlock', 1, 2] })
    );
  });
  it('should serialize Fn::FindInMap', () => {
    // When
    const result = Fn.FindInMap('RegionMap', Fn.Ref('AWS::Region'), 'HVM64');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::FindInMap': ['RegionMap', { Ref: 'AWS::Region' }, 'HVM64'],
      })
    );
  });
  it('should serialize Fn::GetAtt', () => {
    // When
    const result = Fn.GetAtt('myELB', 'DNSName');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::GetAtt': ['myELB', 'DNSName'],
      })
    );
  });
  it('should serialize Fn::ImportValue', () => {
    // When
    const result = Fn.ImportValue('myReference');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::ImportValue': 'myReference' })
    );
  });
  it('should serialize Fn::Join', () => {
    // When
    const result = Fn.Join(':', ['a', 'b', 'c']);
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Join': [':', ['a', 'b', 'c']] })
    );
  });
  it('should serialize Fn::Select', () => {
    // When
    const result = Fn.Select(1, ['a', 'b', 'c']);
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Select': [1, ['a', 'b', 'c']] })
    );
  });
  it('should serialize Fn::Split', () => {
    // When
    const result = Fn.Split('|', 'a|b|c');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Split': ['|', 'a|b|c'] })
    );
  });
  it('should serialize Fn::Sub', () => {
    // When
    const result = Fn.Sub('${AWS::AccountId}');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Sub': '${AWS::AccountId}' })
    );
  });
  it('should serialize Fn::Sub (with params)', () => {
    // When
    const result = Fn.Sub('${AWS::AccountId}, ${a}, ${b}', { a: '1', b: 2 });
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::Sub': ['${AWS::AccountId}, ${a}, ${b}', { a: '1', b: 2 }],
      })
    );
  });
  it('should serialize Fn::Transform', () => {
    // When
    const result = Fn.Transform('AWS::MyMacro');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::Transform': { Name: 'AWS::MyMacro' } })
    );
  });
  it('should serialize Fn::Transform (with params)', () => {
    // When
    const result = Fn.Transform('AWS::MyMacro', { ParamA: '1', ParamB: 2 });
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::Transform': {
          Name: 'AWS::MyMacro',
          Parameters: { ParamA: '1', ParamB: 2 },
        },
      })
    );
  });
  it('should serialize Ref', () => {
    // When
    const result = Fn.Ref('MyLogicalId');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(JSON.stringify({ Ref: 'MyLogicalId' }));
  });
  it('should serialize Fn::If', () => {
    // When
    const result = Fn.If('CreateLargeSize', '10', '100');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({ 'Fn::If': ['CreateLargeSize', '10', '100'] })
    );
  });
  it('should serialize Fn::And', () => {
    // When
    const result = Fn.And([
      Fn.Equals('sg-mysggroup', Fn.Ref('ASecurityGroup')),
      Fn.Condition('SomeOtherCondition'),
    ]);
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::And': [
          { 'Fn::Equals': ['sg-mysggroup', { Ref: 'ASecurityGroup' }] },
          { Condition: 'SomeOtherCondition' },
        ],
      })
    );
  });
  it('should serialize Fn::Equals', () => {
    // When
    const result = Fn.Equals(Fn.Ref('EnvironmentType'), 'prod');
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::Equals': [{ Ref: 'EnvironmentType' }, 'prod'],
      })
    );
  });
  it('should serialize Fn::Not', () => {
    // When
    const result = Fn.Not(Fn.Equals(Fn.Ref('EnvironmentType'), 'prod'));
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::Not': [{ 'Fn::Equals': [{ Ref: 'EnvironmentType' }, 'prod'] }],
      })
    );
  });
  it('should serialize Fn::Or', () => {
    // When
    const result = Fn.Or([
      Fn.Equals('sg-mysggroup', Fn.Ref('ASecurityGroup')),
      Fn.Condition('SomeOtherCondition'),
    ]);
    // Then
    expect(result).toBeInstanceOf(IntrinsicFunction);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify({
        'Fn::Or': [
          { 'Fn::Equals': ['sg-mysggroup', { Ref: 'ASecurityGroup' }] },
          { Condition: 'SomeOtherCondition' },
        ],
      })
    );
  });
});
