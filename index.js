import { program } from "commander";
import * as contactsServise from "./db/contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsServise.listContacts();
            return console.table(allContacts);
        case "get":
            const oneContact = await contactsServise.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactsServise.addContact(data);
            return console.log(newContact);
        case "remove":
            const removeContact = await contactsServise.removeContact(id);
            return console.log(removeContact);
        // case "updateByID":
        //     const updateContact = await contactsServise.updateByID(id, data);
        //     return console.log(updateContact);
    }
};

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//     action: "add",
//     name: "Alex Jordan",
//     email: "alex@mail.com",
//     phone: "(380)939-4571",
// });
// invokeAction({
//     action: "updateByID",
//     id: "x4nzX6AboNMcCTWUDeViq",
//     phone: "(380) 141-2586",
// });
// invokeAction({ action: "remove", id: "x4nzX6AboNMcCTWUDeViq" });
