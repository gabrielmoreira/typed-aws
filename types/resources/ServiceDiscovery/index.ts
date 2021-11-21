import Instance_ from './Instance';
import HttpNamespace_ from './HttpNamespace';
import PublicDnsNamespace_ from './PublicDnsNamespace';
import Service_ from './Service';
import PrivateDnsNamespace_ from './PrivateDnsNamespace';

export namespace ServiceDiscovery {
  export const Instance = Instance_;
  export const HttpNamespace = HttpNamespace_;
  export const PublicDnsNamespace = PublicDnsNamespace_;
  export const Service = Service_;
  export const PrivateDnsNamespace = PrivateDnsNamespace_;
}

export default ServiceDiscovery;
