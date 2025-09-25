import { basketModel, getBasketItemsModel, deleteBasketItemByIdModel } from "../models/basketModel.js";
import handleResponse from "../utils/utils.js";

export const createBasket = async(req, res, next) => {
    const newItem = await basketModel(req.body);
    handleResponse(res, 201, "New Item Created", newItem)
};

export const getAllBasketItems = async(req, res, next) => {
    const item = await getBasketItemsModel();
    handleResponse(res, 200, "New Item Created", item)
};

export const deleteBasketItemById = async (req, res, next) => {
  const item = await deleteBasketItemByIdModel(req.params.id);
  if (item) {
    handleResponse(res, 200, "Item deleted successfully", item);
  } else {
    handleResponse(res, 404, "Item record not found!", item);
  }
};