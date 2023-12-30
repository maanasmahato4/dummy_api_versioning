import { pool } from "../database/database.config.js";

export async function getTasks(req, res) {
    const version = parseInt(req.query.version);
    switch (version) {
        case 1: {
            const users = await pool.query("SELECT * FROM TASKS");
            return res.status(200).json({ success: true, users: users.rows });
        };
        case 2: {
            const users = await pool.query("SELECT ID, TITLE FROM TASKS");
            return res.status(200).json({ success: true, users: users.rows });
        };
    };
};
