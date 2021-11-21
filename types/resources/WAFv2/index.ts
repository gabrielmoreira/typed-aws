import IPSet_ from './IPSet';
import LoggingConfiguration_ from './LoggingConfiguration';
import RegexPatternSet_ from './RegexPatternSet';
import WebACLAssociation_ from './WebACLAssociation';
import WebACL_ from './WebACL';
import RuleGroup_ from './RuleGroup';

export namespace WAFv2 {
  export const IPSet = IPSet_;
  export const LoggingConfiguration = LoggingConfiguration_;
  export const RegexPatternSet = RegexPatternSet_;
  export const WebACLAssociation = WebACLAssociation_;
  export const WebACL = WebACL_;
  export const RuleGroup = RuleGroup_;
}

export default WAFv2;
