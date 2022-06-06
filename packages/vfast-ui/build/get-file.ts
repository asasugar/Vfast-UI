import { readdirSync } from 'fs';
import { join } from 'path';
import { COMS_DIR } from './constant';

export function comsInput() {
  return readdirSync(COMS_DIR).map(file => join(COMS_DIR, file));
}
