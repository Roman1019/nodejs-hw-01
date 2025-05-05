import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    console.log(JSON.parse(data));

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};
await readContacts();
