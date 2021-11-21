import BucketPolicy_ from './BucketPolicy';
import AccessPoint_ from './AccessPoint';
import MultiRegionAccessPoint_ from './MultiRegionAccessPoint';
import MultiRegionAccessPointPolicy_ from './MultiRegionAccessPointPolicy';
import StorageLens_ from './StorageLens';
import Bucket_ from './Bucket';

export namespace S3 {
  export const BucketPolicy = BucketPolicy_;
  export const AccessPoint = AccessPoint_;
  export const MultiRegionAccessPoint = MultiRegionAccessPoint_;
  export const MultiRegionAccessPointPolicy = MultiRegionAccessPointPolicy_;
  export const StorageLens = StorageLens_;
  export const Bucket = Bucket_;
}

export default S3;
