import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const existing = await fs.readFile(PATH_DB, 'utf-8');
    const allContacts = JSON.parse(existing);
    return allContacts;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

console.log(await getAllContacts());
