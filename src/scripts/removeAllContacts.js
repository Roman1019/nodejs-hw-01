import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const removeAll = await fs.writeFile(
      PATH_DB,
      JSON.stringify([], undefined, 2),
      {
        encoding: 'utf-8',
      },
    );
    return removeAll;
  } catch (error) {
    console.log('error', error);
  }
};

removeAllContacts();
