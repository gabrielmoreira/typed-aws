import ByteMatchSet_ from './ByteMatchSet';
import IPSet_ from './IPSet';
import Rule_ from './Rule';
import SizeConstraintSet_ from './SizeConstraintSet';
import SqlInjectionMatchSet_ from './SqlInjectionMatchSet';
import WebACL_ from './WebACL';
import XssMatchSet_ from './XssMatchSet';

export namespace WAF {
  export const ByteMatchSet = ByteMatchSet_;
  export const IPSet = IPSet_;
  export const Rule = Rule_;
  export const SizeConstraintSet = SizeConstraintSet_;
  export const SqlInjectionMatchSet = SqlInjectionMatchSet_;
  export const WebACL = WebACL_;
  export const XssMatchSet = XssMatchSet_;
}

export default WAF;
