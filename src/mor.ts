import { Project } from 'ts-morph';
import path from 'path';

async function main() {
  const p = new Project({ tsConfigFilePath: path.join(process.cwd(), 'fixtures/tsconfig.json') });
  const t = p.getSourceFile('mod.ts');
  await t.moveImmediately('mod1.ts');
  await p.save();
}

main().catch(console.error);
