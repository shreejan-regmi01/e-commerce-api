import { Product } from "./product.model.js";
import { ProductCategories } from "./product_categories.model.js";
import { ProductOption } from "./product_option.model.js";
import { ProductOptionValue } from "./product_option_value.model.js";
import { sequelize } from "../../db/index.js";

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

export default {
  createProduct,
};
