//Conexão com BD

//Pool mantém as configurações em cache e ao conectar uma vez, mantém para as possiveis manipualções do BD
const { Pool } = require("pg")

module.exports = new Pool({
    user: 'andoly',
    password: "",
    host: "localhost",
    port: "5432",
    database: "launchstoredb"
})