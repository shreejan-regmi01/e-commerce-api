import { Category } from "./category.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
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

export default {
  getCategories,
  addCategory,
};
