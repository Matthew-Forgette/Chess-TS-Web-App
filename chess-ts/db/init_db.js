const { client } = require('./client');
const { seed } = require('./seed');


/** 
 *  This function connects to db
 *  drops tables, builds tables, 
 *  then seeds initial data all in the correct order
 * */
const buildTables = async () => {
    try {
        client.connect();

        await dropTables();

        await createTables();
    } catch (error) {
        throw error;
    }
}


/** create tables function, here the entire db schema is plotted
 * games,
 * users,
 * 
 * 
 */ 
const createTables = async () => {
    try {
        console.log('Creating tables...');
        console.log('Finished creating tables.')
    } catch (error) {
        throw error;
    }
}



// droptables function
const dropTables = async () => {
    try {
        console.log('Dropping tables...')
        
        console.log('Tables dropped')
    } catch (error) {
        throw error;
    }
}


// invocation of the Database initialization
buildTables()
    .then(seed)
    .catch(console.error)
    .finally(() => client.end());