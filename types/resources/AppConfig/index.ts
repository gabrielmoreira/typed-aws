import Application_ from './Application';
import ConfigurationProfile_ from './ConfigurationProfile';
import Deployment_ from './Deployment';
import DeploymentStrategy_ from './DeploymentStrategy';
import Environment_ from './Environment';
import HostedConfigurationVersion_ from './HostedConfigurationVersion';

export namespace AppConfig {
  export const Application = Application_;
  export const ConfigurationProfile = ConfigurationProfile_;
  export const Deployment = Deployment_;
  export const DeploymentStrategy = DeploymentStrategy_;
  export const Environment = Environment_;
  export const HostedConfigurationVersion = HostedConfigurationVersion_;
}

export default AppConfig;
