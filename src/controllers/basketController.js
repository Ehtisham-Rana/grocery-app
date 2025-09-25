import { basketModel } from "../models/basketModel.js";
import handleResponse from "../utils/utils.js";

export const createBasket = async(req, res, next) => {
    const newItem = await basketModel(req.body);
    handleResponse(res, 201, "New Item Created", newItem)
};

