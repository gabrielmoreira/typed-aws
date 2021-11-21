import Firewall_ from './Firewall';
import LoggingConfiguration_ from './LoggingConfiguration';
import FirewallPolicy_ from './FirewallPolicy';
import RuleGroup_ from './RuleGroup';

export namespace NetworkFirewall {
  export const Firewall = Firewall_;
  export const LoggingConfiguration = LoggingConfiguration_;
  export const FirewallPolicy = FirewallPolicy_;
  export const RuleGroup = RuleGroup_;
}

export default NetworkFirewall;
