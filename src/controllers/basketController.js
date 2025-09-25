import { basketModel, getBasketItemsModel, getBasketItemByIdModel, deleteBasketItemByIdModel, updateBasketItemByIdModel } from "../models/basketModel.js";
import handleResponse from "../utils/utils.js";

// Create  new Items in Basket
export const createBasket = async(req, res, next) => {
    const newItem = await basketModel(req.body);
    handleResponse(res, 201, "New Item Created", newItem)
};

// Get All Items in Basket
export const getAllBasketItems = async(req, res, next) => {
    const item = await getBasketItemsModel();
    handleResponse(res, 200, " Item fetched successfully", item)
};

// Get Items by ID in Basket
export const getBasketItemById = async (req, res, next) => {
  const item = await getBasketItemByIdModel(req.params.id);
  if (item) {
    handleResponse(res, 200, "Item fetched successfully", item);
  } else {
    handleResponse(res, 404, "Item record not found!");
  }
};

// Delete Items by ID in Basket
export const deleteBasketItemById = async (req, res, next) => {
  const item = await deleteBasketItemByIdModel(req.params.id);
  if (item) {
    handleResponse(res, 200, "Item deleted successfully", item);
  } else {
    handleResponse(res, 404, "Item record not found!");
  }
};

// Update Items by ID in Basket
export const updateBasketItemById = async (req, res, next) => {
  const { quantity } = req.body;
  const item = await updateBasketItemByIdModel({quantity, id:req.params.id});
  if (item) {
    handleResponse(res, 200, "Item updated successfully", item);
  } else {
    handleResponse(res, 404, "Item record not found!");
  }
};