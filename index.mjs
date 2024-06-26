console.log("Hello, Node!");
import { listContacts, getContactById, addContact, removeContact } from "./contacts.js";

import { program } from "commander";
program
  .option("-a, --action <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>", "user email")
  .option("-p, --phone, <type>", "user phone");

program.parse();
const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      return console.table(contactsList);
      break;

    case "get":
      const contact = await getContactById(id);
      return console.table(contact);;

    case "add":
      const newContactToList = await addContact(name, email, phone);
      return console.table(newContactToList);;

    case "remove":
      const removeContactById = await removeContact(id);
      return console.log(removeContactById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
