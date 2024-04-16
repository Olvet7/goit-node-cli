const fs = require("node:fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

async function listContacts() {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    console.log(contacts);
    return JSON.parse(contacts)
  }

