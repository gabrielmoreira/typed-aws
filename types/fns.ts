import {
  Condition,
  ConditionIntrinsicFunction,
  IntrinsicFunction,
  Resolvable,
} from './dataTypes';

export function Base64(value: Resolvable<string>) {
  return new IntrinsicFunction('Fn::Base64', value);
}

export function Cidr(
  ipBlock: Resolvable<string>,
  count: Resolvable<string | number>,
  cidrBits: Resolvable<string | number>
): IntrinsicFunction {
  return new IntrinsicFunction('Fn::Cidr', [ipBlock, count, cidrBits]);
}

export function FindInMap(
  mapName: Resolvable<string>,
  topLevelKey: Resolvable<string>,
  secondLevelKey: Resolvable<string>
): IntrinsicFunction {
  return new IntrinsicFunction('Fn::FindInMap', [
    mapName,
    topLevelKey,
    secondLevelKey,
  ]);
}

export function GetAtt(
  logicalNameOfResource: Resolvable<string>,
  attributeName: Resolvable<string>
) {
  return new IntrinsicFunction('Fn::GetAtt', [
    logicalNameOfResource,
    attributeName,
  ]);
}

export function GetAZs(region: Resolvable<string> = '') {
  return new IntrinsicFunction('Fn::GetAZs', region);
}

export function ImportValue(sharedValueToImport: Resolvable<unknown>) {
  return new IntrinsicFunction('Fn::ImportValue', sharedValueToImport);
}

export function Join(
  delimiter: Resolvable<string>,
  values: Resolvable<unknown[]>
) {
  return new IntrinsicFunction('Fn::Join', [delimiter, values]);
}

export function Select(
  index: Resolvable<number>,
  listOfObjects: Resolvable<unknown[]>
) {
  return new IntrinsicFunction('Fn::Select', [index, listOfObjects]);
}

export function Split(
  delimiter: Resolvable<string>,
  sourceString: Resolvable<string>
) {
  return new IntrinsicFunction('Fn::Split', [delimiter, sourceString]);
}

export function Sub(
  string: Resolvable<string>,
  vars?: { [key: string]: Resolvable<unknown> }
) {
  if (!vars) return new IntrinsicFunction('Fn::Sub', string);
  return new IntrinsicFunction('Fn::Sub', [string, vars]);
}

export function Ref(logicalName: Resolvable<string>) {
  return new IntrinsicFunction('Ref', logicalName);
}

export function And(conditions: Resolvable<Condition[]>) {
  return new ConditionIntrinsicFunction('Fn::And', conditions);
}

export function Equals(left: unknown, right: unknown) {
  return new ConditionIntrinsicFunction('Fn::Equals', [left, right]);
}

export function If(
  conditionName: Resolvable<string>,
  valueIfTrue: unknown,
  valueIfFalse: unknown
) {
  return new ConditionIntrinsicFunction('Fn::If', [
    conditionName,
    valueIfTrue,
    valueIfFalse,
  ]);
}

export function Not(condition: Condition) {
  return new ConditionIntrinsicFunction('Fn::Not', [condition]);
}

export function Or(conditions: Resolvable<Condition[]>) {
  return new ConditionIntrinsicFunction('Fn::Or', conditions);
}

export function Condition(conditionName: Resolvable<string>) {
  return new ConditionIntrinsicFunction('Condition', conditionName);
}

export function Transform(
  name: string,
  parameters?: { [key: string]: Resolvable<unknown> }
) {
  if (!parameters)
    return new IntrinsicFunction('Fn::Transform', { Name: name });
  return new IntrinsicFunction('Fn::Transform', {
    Name: name,
    Parameters: parameters,
  });
}
