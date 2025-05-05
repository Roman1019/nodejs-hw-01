import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.readFile(PATH_DB, {
      encoding: 'utf-8',
    });
    const contacts = JSON.parse(data);
    contacts.push(updatedContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), {
      encoding: 'utf-8',
    });
  } catch (error) {
    console.log(error);
  }
};

await writeContacts();
