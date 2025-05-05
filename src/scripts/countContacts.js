import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const existing = await fs.readFile(PATH_DB, 'utf-8');
    const allContacts = JSON.parse(existing);
    return allContacts.length;
  } catch (error) {
    console.log('error', error);
  }
};

console.log(await countContacts());
