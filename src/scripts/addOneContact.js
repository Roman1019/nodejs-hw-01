import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const newContacts = faker.helpers.multiple(createFakeContact, { count: 1 });
    const existing = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(existing);
    contacts.push(...newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), {
      encoding: 'utf-8',
    });
  } catch (error) {
    console.log('error', error);
  }
};

addOneContact();
