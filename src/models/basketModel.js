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
        console.error("Error creatin item", error);
        throw error;
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
        throw error;
    } finally {
        client.release();
    }
}

// Get Items by ID in Basket
export const getBasketItemByIdModel  = async (id) => {
    const client = await pool.connect();

    try {
        const result = await client.query("SELECT * FROM basket_items WHERE id = $1 ",
            [id]
        );
        
        return result.rows[0] || null;
    } catch (error) {
        console.error("Error fetching item", error);
        throw error;
    } finally {
        client.release();
    }
};

// Delete Items by ID in Basket
export const deleteBasketItemByIdModel  = async (id) => {
    const client = await pool.connect();

    try {
        const result = await client.query("DELETE FROM basket_items WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting items", error);
        throw error;
    } finally {
        client.release();
    }
};

// Update Items by ID in Basket
export const updateBasketItemByIdModel  = async (itemData) => {
    const client = await pool.connect();

    try {
        const {quantity, id} = itemData;
        const result = await client.query("UPDATE basket_items SET quantity = $1 WHERE id = $2 RETURNING *",
            [quantity, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error updating items", error);
        throw error;
    } finally {
        client.release();
    }
};