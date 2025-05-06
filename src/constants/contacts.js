import path from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
console.log(fileName);

export const PATH_DB = path.join(dirName, '..', 'db', 'db.json');
