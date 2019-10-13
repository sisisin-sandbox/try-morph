import { Project } from 'ts-morph';
import path from 'path';
import fs from 'fs-extra';

async function prepare() {
  await fs.remove('sandbox');
  await fs.copy('fixtures', 'sandbox');
}
async function proc() {
  const p = new Project({ tsConfigFilePath: path.join(process.cwd(), 'sandbox/tsconfig.json') });
  const t = p.getSourceFile('mod.ts');
  await t.moveImmediately('mod1.ts');

  // const interfaces = t.getInterfaces();
  // p.createSourceFile('interface.ts', interfaces.map(i => i.print()).join('\n'));

  // interfaces.forEach(i => {
  //   i.remove();
  // });
  // t.fixMissingImports();

  await p.save();
}
async function main() {
  await prepare();
  await proc();
}

main().catch(console.error);
