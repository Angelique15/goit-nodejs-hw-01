const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Función para leer el archivo contacts.json y obtener los contactos
function getContacts() {
    return new Promise((resolve, reject) => {
        fs.readFile(contactsPath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

// Función para escribir los contactos en el archivo contacts.json
function saveContacts(contacts) {
    return new Promise((resolve, reject) => {
        fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    getContacts,
    saveContacts,
};
