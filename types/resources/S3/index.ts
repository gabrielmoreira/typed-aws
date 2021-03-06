import AccessPoint_ from './AccessPoint';
import Bucket_ from './Bucket';
import BucketPolicy_ from './BucketPolicy';
import MultiRegionAccessPoint_ from './MultiRegionAccessPoint';
import MultiRegionAccessPointPolicy_ from './MultiRegionAccessPointPolicy';
import StorageLens_ from './StorageLens';

export namespace S3 {
  export const AccessPoint = AccessPoint_;
  export const Bucket = Bucket_;
  export const BucketPolicy = BucketPolicy_;
  export const MultiRegionAccessPoint = MultiRegionAccessPoint_;
  export const MultiRegionAccessPointPolicy = MultiRegionAccessPointPolicy_;
  export const StorageLens = StorageLens_;
}

export default S3;
