import { Product } from "./product.model.js";
import { ProductCategories } from "./product_categories.model.js";
import { ProductOption } from "./product_option.model.js";
import { ProductOptionValue } from "./product_option_value.model.js";
import { sequelize } from "../../db/index.js";
import { User } from "../user/user.model.js";
import { Category } from "../category/category.model.js";
import { Sku } from "./sku.model.js";
import { SkuOptionValue } from "./sku_option_value.model.js";

const createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      brand,
      isActive,
      addedBy,
      categoryId,
      productOptions,
    } = req.body;

    const result = await sequelize.transaction(async (transaction) => {
      const product = await Product.create(
        {
          name,
          slug,
          description,
          brand,
          isActive,
          addedBy,
        },
        { transaction }
      );

      await ProductCategories.create(
        {
          productId: product.id,
          categoryId,
        },
        { transaction }
      );

      if (Array.isArray(productOptions) && productOptions.length > 0) {
        // for each productOptions -> add name, then values in same loop
        for (const { name: optionName, values } of productOptions) {
          const productOption = await ProductOption.create(
            {
              productId: product.id,
              name: optionName,
            },
            { transaction }
          );

          if (Array.isArray(values) && values.length > 0) {
            for (const optionValue of values) {
              await ProductOptionValue.create(
                {
                  optionId: productOption.id,
                  value: optionValue,
                },
                { transaction }
              );
            }
          }
        }
      }
      return product;
    });

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({
      where: { slug },
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["password"] },
        },
        {
          model: Category,
          through: { attributes: [] },
          as: "categories",
          attributes: ["id", "name", "slug", "isActive", "parentId"],
        },
        {
          model: ProductOption,
          as: "productOptions",
          attributes: { exclude: ["productId"] },
          include: {
            model: ProductOptionValue,
            as: "productOptionValues",
            attributes: { exclude: ["optionId"] },
          },
        },
      ],
    });
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createProductSku = async (req, res) => {
  try {
    const { skuCode, price, isActive, optionValueIds, quantity } = req.body;

    const result = await sequelize.transaction(async (transaction) => {
      const sku = await Sku.create(
        {
          skuCode,
          price,
          isActive: isActive || true,
          productId: req.params.productId,
          quantity,
        },
        { transaction }
      );
      await SkuOptionValue.bulkCreate(
        optionValueIds.map((optionValueId) => ({
          skuId: sku.id,
          optionValueId,
        })),
        { transaction }
      );
      return sku;
    });

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  createProduct,
  getProductBySlug,
  createProductSku,
};
