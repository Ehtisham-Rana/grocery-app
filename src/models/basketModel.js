import pool from "../config/db.js";

// Create  new Items in Basket
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

// Get All Items in Basket
export const getBasketItemsModel  = async () => {
    const client = await pool.connect();

    try {
        const result = await client.query("SELECT * FROM basket_items");
        return result.rows;
    } catch (error) {
        console.error("Error fetching items", error);
    } finally {
        client.release();
    }
}