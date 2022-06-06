import { existsSync, readFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { resolve, dirname, isAbsolute } from 'path';

function findRootDir(dir: string): string {
  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}

export const ROOT = __dirname;
export const SRC_DIR = resolve(ROOT, '../src');
export const COMS_DIR = resolve(ROOT, '../src/components');
export const ES_DIR = resolve(ROOT, '../es');
export const LIB_DIR = resolve(ROOT, '../lib');
export const DOCS_DIR = resolve(ROOT, '../docs');
export const PACKAGE_JSON_FILE = resolve(ROOT, 'package.json');
