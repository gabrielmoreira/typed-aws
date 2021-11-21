import glob from 'glob';
import path from 'path';
import { FileData, ModuleFile, ResourceFile, Writer } from './types';

export class FileManager {
  constructor(
    readonly params: {
      cwd: string;
      schemasDir: string;
      outputDir: string;
      write: Writer;
      onResourceWrite: (resourceFile: ResourceFile) => void;
    }
  ) {}

  writeResource({ source, ...resourceFile }: ResourceFile & FileData) {
    this.params.write(
      path.join(this.params.outputDir, resourceFile.module),
      resourceFile.fileName,
      source
    );
    this.params.onResourceWrite(resourceFile);
  }

  async writeModule({ source, module, fileName }: ModuleFile & FileData) {
    this.params.write(
      path.join(this.params.outputDir, module),
      fileName,
      source
    );
  }

  async writeIndex({ fileName, source }: { fileName: string; source: string }) {
    this.params.write(this.params.outputDir, fileName, source);
  }

  async listSchemaFiles() {
    const files = glob.sync(`${this.params.schemasDir}/*.json`, {
      nodir: true,
      cwd: this.params.cwd,
    });
    return files;
  }
}
