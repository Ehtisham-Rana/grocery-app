import express from "express";
import dotenv from "dotenv";
import basketRoute from "./routes/basketRoute.js";
import createBasketTable from "./data/createBasketTable.js";

dotenv.config();
const app = express();
createBasketTable();

const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.json());

//Routes
app.use("/api/basket",basketRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
