import { faker } from "@faker-js/faker";
import { pool } from "../database/database.config.js";


function createUser() {
    return {
        id: faker.string.uuid(),
        username: faker.person.fullName(),
        email: faker.string.alphanumeric(),
    };
};

function createTasks() {
    return {
        id: faker.string.uuid(),
        title: faker.string.alpha(),
        description: faker.string.alphanumeric()
    };
};

export async function generateData() {

    for (let i = 0; i < 1000; i++) {
        const { id, username, email } = createUser();
        await pool.query('INSERT INTO USERS (ID, USERNAME, EMAIL) VALUES ($1, $2, $3);', [id, username, email]);
        console.log(`user added ${i + 1}`);
    };

    for (let j = 0; j < 1000; j++) {
        const { id, title, description } = createTasks();
        await pool.query('INSERT INTO TASKS (ID, TITLE, DESCRIPTION) VALUES ($1, $2, $3);', [id, title, description]);
        console.log(`task added ${j + 1}`);
    };
};

