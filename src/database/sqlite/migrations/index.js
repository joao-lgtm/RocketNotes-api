const sqliteConnectin = require('../../sqlite');
const createdUsers = require('./createUser');



async function migrationsRun() {
    const schemas = [
        createdUsers
    ].join('');

    sqliteConnectin()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
}


module.exports = migrationsRun;