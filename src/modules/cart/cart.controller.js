import { Sku } from "../product/sku.model.js";
import { CartItem } from "./cart_item.model.js";

const addCartItem = async (req, res) => {
  try {
    const { skuId, quantity } = req.body;

    const sku = await Sku.findByPk(skuId);
    if (quantity > sku.quantity) {
      return res
        .status(400)
        .json({ message: "Quantity is greater than available quantity" });
    }
    const cartItem = await CartItem.create({
      userId: req.user.id,
      skuId,
      quantity,
    });
    return res.status(201).json(cartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  addCartItem,
};
