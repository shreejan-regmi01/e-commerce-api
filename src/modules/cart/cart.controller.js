import { Product } from "../product/product.model.js";
import { ProductOption } from "../product/product_option.model.js";
import { ProductOptionValue } from "../product/product_option_value.model.js";
import { Sku } from "../product/sku.model.js";
import { SkuOptionValue } from "../product/sku_option_value.model.js";
import { User } from "../user/user.model.js";
import { CartItem } from "./cart_item.model.js";

const addCartItem = async (req, res) => {
  try {
    const { skuId, quantity } = req.body;

    const sku = await Sku.findByPk(skuId);
    const existingCartItem = await CartItem.findOne({
      where: {
        userId: req.user.id,
        skuId,
      },
    });
    const existingQuantityInCart = existingCartItem?.quantity || 0;

    if (quantity + existingQuantityInCart > sku.quantity) {
      return res
        .status(400)
        .json({ message: "Quantity is greater than available quantity" });
    }

    if (existingCartItem) {
      console.log("updating cart item");
      await CartItem.update(
        {
          quantity: existingCartItem.quantity + quantity,
        },
        {
          where: {
            userId: req.user.id,
            skuId,
          },
        }
      );
    } else {
      console.log("creating new cart item");
      await CartItem.create({
        userId: req.user.id,
        skuId,
        quantity,
      });
    }
    const cartItem = await CartItem.findOne({
      where: { userId: req.user.id, skuId },
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
    await CartItem.update({ quantity }, { where: { userId, skuId } });
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

const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({
      where: { userId: req.user.id },
      // attributes: { exclude: ["skuId"] },
      include: [
        {
          attributes: ["id", "price", "skuCode"],
          model: Sku,
          as: "sku",
          include: [
            {
              attributes: ["id", "name", "description"],
              model: Product,
              as: "product",
              include: {
                model: User,
                as: "user",
                attributes: ["id", "firstName", "lastName"],
              },
            },
            {
              model: ProductOptionValue,
              as: "skuOptionValues",
              // attributes: { exclude: ["id", "optionId"] },
              through: { attributes: [] },
              include: {
                model: ProductOption,
                as: "productOption",
                // attributes: ["name"],
              },
            },
          ],
        },
      ],
    });
    const totalPriceOfCart = cartItems.reduce(
      (total, item) => total + item.quantity * item.sku.price,
      0
    );
    return res.status(200).json({ cartItems, totalPriceOfCart });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  addCartItem,
  updateCartItem,
  removeCartItem,
  getCartItems,
};
