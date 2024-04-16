const fs = require("node:fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

async function listContacts() {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    console.log(contacts);
    return JSON.parse(contacts);
    // return JSON.parse(contacts)
  }

async function getContactById(contactId) {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    const contact = contacts.find(contact => contactId === contact);
    return contact;
  // const contactObjById = await fs.readFile()
}