import wrap from 'word-wrap';

export function formatDoc(content?: string) {
  if (!content) return '';
  return (
    '/**\n * ' +
    wrap(replaceHtml(removeBreakline(content.trim()) as string).trim(), {
      width: 70,
    })
      .replace(/\n */g, '\n * ')
      .trim() +
    '\n */\n'
  );
}

function replaceHtml(content: string) {
  return content
    .replace(/<p>/gi, '')
    .replace(/<note>/gi, '\n')
    .replace(/<\/p>|<\/note>/gi, '\n')
    .replace(/\n\n+/g, '\n');
}

function removeBreakline(content?: string) {
  if (!content) return content;
  return content.replace(/\s*(\r\n|\r|\n)\s*/gm, ' ').trim();
}

export function groupByArray<T>(array: T[], key: (value: T) => string): T[][] {
  return Array.from(
    array
      .reduce(
        (entryMap, e) =>
          entryMap.set(key(e), [...(entryMap.get(key(e)) || []), e]),
        new Map()
      )
      .values()
  );
}

export function concatWith(
  {
    prefix,
    joiner,
    suffix,
    defaultValue = ''
  }: { prefix?: string; joiner?: string; suffix?: string, defaultValue?: string },
  ...items: (string | undefined | null)[]
) {
  const all = items.filter((item) => !item);
  if (all.length) return defaultValue;
  return (prefix || '') + items.join(joiner || '') + (suffix || '');
}
