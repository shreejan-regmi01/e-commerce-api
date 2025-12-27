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

const updateCartItem = async (req, res) => {
  const skuId = req.params.skuId;
  const quantity = req.body.quantity;
  const userId = req.user.id;

  const sku = await Sku.findByPk(skuId);
  if (quantity > sku.quantity) {
    return res
      .status(400)
      .json({ message: "Quantity is greater than available quantity" });
  }
  try {
    const cartItem = await CartItem.update(
      { quantity },
      { where: { userId, skuId } }
    );
    const updatedCartItem = await CartItem.findOne({
      where: { userId, skuId },
    });
    return res.status(200).json(updatedCartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const removeCartItem = async (req, res) => {
  try {
    await CartItem.destroy({
      where: { userId: req.user.id, skuId: req.params.skuId },
    });
    return res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  addCartItem,
  updateCartItem,
  removeCartItem,
};
