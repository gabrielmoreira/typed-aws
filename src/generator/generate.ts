import { FileManager } from './file-manager';
import { formatSource } from './format';
import { ResourceModel } from './codegen';
import { ResourceFile } from './types';

export function generateSource(model: ResourceModel) {
  let source = '';
  source += `// CloudFormation Resource ${model.mainSchema.namespace}\n`;
  source += model.toString() + '\n';
  return source;
}
export async function generateAndExportResource(
  model: ResourceModel,
  fileManager: FileManager
) {
  //console.log(`Export ${model.module.name}/${model.name}.ts`);
  let source = generateSource(model);
  source = formatSource(source);
  return fileManager.writeResource({
    module: model.module.name,
    resource: model.name,
    fileName: model.name + '.ts',
    source,
  });
}

export async function exportResources(
  resources: ResourceModel[],
  fileManager: FileManager
) {
  await Promise.all(
    resources.map((resource) =>
      generateAndExportResource(resource, fileManager)
    )
  );
}

export async function generateIndex(
  modules: ResourceFile[][],
  fileManager: FileManager
) {
  const names = modules.map((r) => r[0].module);
  names.sort()
  let source = `
${names
  .map(
    (name) => `import ${name} from './${name}';
export {${name}};
`
  )
  .join('\n')}

export default {${names.join(', ')}};
`;
  source = formatSource(source);
  return fileManager.writeIndex({
    fileName: 'index.ts',
    source,
  });
}

export async function generateModuleIndex(
  resources: ResourceFile[],
  fileManager: FileManager
) {
  const { module } = resources[0];
  const names = resources.map((r) => r.resource);
  names.sort()
  let source = `
${names.map((name) => `import ${name}_ from './${name}';`).join('\n')}

export namespace ${module} {
  ${names.map((name) => `export const ${name} = ${name}_;`).join('\n')}
}

export default ${module};
`;
  source = formatSource(source);
  return fileManager.writeModule({
    module,
    fileName: 'index.ts',
    source,
  });
}
