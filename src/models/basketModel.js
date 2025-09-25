import pool from "../config/db.js";

export const basketModel = async (itemData) => {
    const client = await pool.connect();

    try{
        const { name, quantity } = itemData;
        const result = await client.query("INSERT INTO basket_items (item_name, quantity) VALUES ($1, $2) RETURNING *",
         [name, quantity]
        );
        // console.log(result.rows[0])
        return result.rows[0];
    } catch(error) {
        console.error("Error creatin item", error)
    } finally {
        client.release();
    }
} ;