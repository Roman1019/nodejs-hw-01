import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const existing = await fs.readFile(PATH_DB, {
      encoding: 'utf-8',
    });
    const contacts = JSON.parse(existing);
    const removed = contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    return removed;
  } catch (error) {
    console.log('error', error);
  }
};

removeLastContact();
