import { Product } from "../product/product.model.js";
import { ProductCategories } from "../product/product_categories.model.js";
import { ProductOption } from "../product/product_option.model.js";
import { ProductOptionValue } from "../product/product_option_value.model.js";
import { Sku } from "../product/sku.model.js";
import { Category } from "./category.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ order: [["id", "ASC"]] });
    return res.status(200).send(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name, slug, parentId } = req.body;
    const category = await Category.create({
      name,
      slug,
      parentId,
      isActive: true,
    });
    return res.status(201).send(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const data = await Category.findByPk(categoryId, {
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: [] }, //hide product_categories table data
          include: [
            {
              model: Sku,
              as: "productSkus",
            },
          ],
        },
      ],
    });
    return res.status(200).send(data.products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getProductsByCategorySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Category.findAll({
      // attributes: [], //do not include data of category itself
      where: {
        slug,
      },
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: [] }, //hide product_categories table data
          include: [
            {
              model: Sku,
              as: "productSkus",
            },
          ],
        },
      ],
    });
    return res.status(200).send(data[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default {
  getCategories,
  addCategory,
  getProductsByCategory,
  getProductsByCategorySlug,
};
