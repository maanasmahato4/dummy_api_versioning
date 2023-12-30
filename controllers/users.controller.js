import { pool } from "../database/database.config.js";

async function getUsers_v1(req, res) {
    const users = await pool.query("SELECT * FROM USERS");
    return res.status(200).json({success: true, users: users.rows});
};

async function getUsers_v2(req, res){
    const users = await pool.query("SELECT ID, USERNAME FROM USERS");
    return res.status(200).json({success: true, users: users.rows});
};

export {getUsers_v1, getUsers_v2};