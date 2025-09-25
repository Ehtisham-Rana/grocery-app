import  pool from "../config/db.js"

const createBasketTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS basket_items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    quantity VARCHAR(100)  NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;

    const client = await pool.connect();

    try {
        await client.query(query);
    } catch(error) {
        console.error("Error Creating Table", error);
    } finally {
        client.release();
    }
};

export default createBasketTable;