import HttpNamespace_ from './HttpNamespace';
import Instance_ from './Instance';
import PrivateDnsNamespace_ from './PrivateDnsNamespace';
import PublicDnsNamespace_ from './PublicDnsNamespace';
import Service_ from './Service';

export namespace ServiceDiscovery {
  export const HttpNamespace = HttpNamespace_;
  export const Instance = Instance_;
  export const PrivateDnsNamespace = PrivateDnsNamespace_;
  export const PublicDnsNamespace = PublicDnsNamespace_;
  export const Service = Service_;
}

export default ServiceDiscovery;
