import fs from 'fs';
import path from 'path';
import { parseSchemaFile, parseSpecs, SpecRegistry } from './generator/parser';
import {
  exportResources,
  generateIndex,
  generateModuleIndex,
} from './generator/generate';
import { createModels, getAllResources } from './generator/codegen';
import { ResourceFile } from './generator/types';
import { groupByArray } from './generator/utils';
import { FileManager } from './generator/file-manager';

async function parseAndGenerateCode({
  specs,
  file,
  fileManager,
}: {
  specs: SpecRegistry;
  file: string;
  fileManager: FileManager;
}): Promise<void> {
  try {
    const schemas = await parseSchemaFile(file);
    const modules = createModels(schemas, specs);
    const resources = getAllResources(modules);
    await exportResources(resources, fileManager);
  } catch (e) {
    console.error('Failed to generate schema for', file, 'Error:', e);
    throw e;
  }
}

async function generateAll({
  files,
  fileManager,
  resources,
  specsFile,
}: {
  files: string[];
  fileManager: FileManager;
  resources: ResourceFile[];
  specsFile: string;
}) {
  const specs = await parseSpecs(specsFile);
  await Promise.all(
    files.map((file) => parseAndGenerateCode({ file, fileManager, specs }))
  );
  const modules = groupByArray(resources, (r) => r.module);
  await Promise.all(
    modules.map((module) => generateModuleIndex(module, fileManager))
  );
  await generateIndex(modules, fileManager);
}

async function main() {
  const region = 'us-west-1'
  const schemasDir = __dirname + `/../tmp/schemas/${region}/`;
  const specsFile = __dirname + `/../tmp/specs/${region}.json`;
  const outputDir = __dirname + '/../types/resources/';
  const resources: ResourceFile[] = [];

  const fileManager = new FileManager({
    cwd: __dirname,
    schemasDir,
    outputDir,
    write: async (directory, filename, source) => {
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      return fs.promises.writeFile(path.join(directory, filename), source);
    },
    onResourceWrite: (resource) => resources.push(resource),
  });

  const files = await fileManager.listSchemaFiles();
  console.log(`Generating types for ${files.length} schemas`);
  await generateAll({ files, fileManager, resources, specsFile });
}

main();
