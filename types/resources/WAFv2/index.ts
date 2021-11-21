import IPSet_ from './IPSet';
import LoggingConfiguration_ from './LoggingConfiguration';
import RegexPatternSet_ from './RegexPatternSet';
import RuleGroup_ from './RuleGroup';
import WebACL_ from './WebACL';
import WebACLAssociation_ from './WebACLAssociation';

export namespace WAFv2 {
  export const IPSet = IPSet_;
  export const LoggingConfiguration = LoggingConfiguration_;
  export const RegexPatternSet = RegexPatternSet_;
  export const RuleGroup = RuleGroup_;
  export const WebACL = WebACL_;
  export const WebACLAssociation = WebACLAssociation_;
}

export default WAFv2;
