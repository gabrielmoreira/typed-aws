import Agent_ from './Agent';
import LocationEFS_ from './LocationEFS';
import LocationHDFS_ from './LocationHDFS';
import LocationNFS_ from './LocationNFS';
import LocationFSxWindows_ from './LocationFSxWindows';
import LocationObjectStorage_ from './LocationObjectStorage';
import LocationS3_ from './LocationS3';
import Task_ from './Task';
import LocationSMB_ from './LocationSMB';

export namespace DataSync {
  export const Agent = Agent_;
  export const LocationEFS = LocationEFS_;
  export const LocationHDFS = LocationHDFS_;
  export const LocationNFS = LocationNFS_;
  export const LocationFSxWindows = LocationFSxWindows_;
  export const LocationObjectStorage = LocationObjectStorage_;
  export const LocationS3 = LocationS3_;
  export const Task = Task_;
  export const LocationSMB = LocationSMB_;
}

export default DataSync;
