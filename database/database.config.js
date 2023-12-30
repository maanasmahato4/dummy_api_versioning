import pkg from "pg";
const {Pool} = pkg;

export const pool = new Pool({
    user: "postgres",
    password: "maanas123",
    host: "localhost",
    port: 8000,
    database: "dummy_api_versioning"
});

