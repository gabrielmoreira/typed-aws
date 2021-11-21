import prettier from 'prettier';

export function formatSource(source: string) {
  return prettier.format(source, {
    semi: true,
    singleQuote: true,
    parser: 'typescript',
  });
}