import { pool } from "./database.config.js";

export function createUsersTable() {
    return pool.query('CREATE TABLE IF NOT EXISTS USERS (ID TEXT, USERNAME TEXT, EMAIL TEXT)');
};

export function createTasksTable() {
    return pool.query('CREATE TABLE IF NOT EXISTS TASKS (ID TEXT, TITLE TEXT, DESCRIPTION TEXT)');
};