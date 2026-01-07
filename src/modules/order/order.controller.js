import { Sku } from "../product/sku.model.js";
import { Product } from "../product/product.model.js";
import { Order } from "./order.model.js";
import { ORDER_STATUS } from "../../types/index.js";
import { OrderItem } from "./order_items.model.js";
import { sequelize } from "../../db/index.js";

const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.user.id;

    const itemsWithSkuData = await Promise.all(
      items.map(async ({ skuId, quantity }) => {
        const sku = await Sku.findByPk(skuId, {
          attributes: ["id", "skuCode", "price", "quantity"],
          include: [
            {
              model: Product,
              as: "product",
              attributes: ["name"],
            },
          ],
        });
        return {
          skuData: sku.toJSON(),
          orderQuantity: quantity,
        };
      })
    );
    const totalAmount = itemsWithSkuData.reduce(
      (total, itemWithSkuData) =>
        total + itemWithSkuData.skuData.price * itemWithSkuData.orderQuantity,
      0
    );

    const result = await sequelize.transaction(async (transaction) => {
      const order = await Order.create(
        {
          userId,
          status: ORDER_STATUS.PENDING,
          totalAmount,
        },
        { transaction }
      );
      await OrderItem.bulkCreate(
        itemsWithSkuData.map((itemWithSkuData) => ({
          orderId: order.id,
          skuId: itemWithSkuData.skuData.id,
          productNameSnapshot: itemWithSkuData.skuData.product.name,
          skuCodeSnapshot: itemWithSkuData.skuData.skuCode,
          priceSnapshot: itemWithSkuData.skuData.price,
          quantity: itemWithSkuData.orderQuantity,
        })),
        { transaction }
      );
      return order;
    });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getOrders = async (req, res) => {
  try {
    const ordersData = await Order.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: OrderItem,
          as: "orderItems",
        },
      ],
    });

    return res.status(200).json(ordersData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  createOrder,
  getOrders,
};
