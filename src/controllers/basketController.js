import { basketModel,getBasketItemsModel } from "../models/basketModel.js";
import handleResponse from "../utils/utils.js";

export const createBasket = async(req, res, next) => {
    const newItem = await basketModel(req.body);
    handleResponse(res, 201, "New Item Created", newItem)
};

export const getAllBasketItems = async(req, res, next) => {
    const item = await getBasketItemsModel();
    handleResponse(res, 200, "New Item Created", item)
};

// export const getBasketItemById = async (req, res, next) => {
//   const user = await getBasketItems(req.params.id);
//   if (user) {
//     handleResponse(res, 200, "User fetched successfully", user);
//   } else {
//     handleResponse(res, 404, "User record not found!", user);
//   }
// };