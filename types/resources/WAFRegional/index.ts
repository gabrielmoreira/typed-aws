import ByteMatchSet_ from './ByteMatchSet';
import GeoMatchSet_ from './GeoMatchSet';
import IPSet_ from './IPSet';
import RateBasedRule_ from './RateBasedRule';
import RegexPatternSet_ from './RegexPatternSet';
import Rule_ from './Rule';
import SizeConstraintSet_ from './SizeConstraintSet';
import SqlInjectionMatchSet_ from './SqlInjectionMatchSet';
import WebACL_ from './WebACL';
import WebACLAssociation_ from './WebACLAssociation';
import XssMatchSet_ from './XssMatchSet';

export namespace WAFRegional {
  export const ByteMatchSet = ByteMatchSet_;
  export const GeoMatchSet = GeoMatchSet_;
  export const IPSet = IPSet_;
  export const RateBasedRule = RateBasedRule_;
  export const RegexPatternSet = RegexPatternSet_;
  export const Rule = Rule_;
  export const SizeConstraintSet = SizeConstraintSet_;
  export const SqlInjectionMatchSet = SqlInjectionMatchSet_;
  export const WebACL = WebACL_;
  export const WebACLAssociation = WebACLAssociation_;
  export const XssMatchSet = XssMatchSet_;
}

export default WAFRegional;
