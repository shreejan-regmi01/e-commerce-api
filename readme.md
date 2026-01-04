# How to run

1. Clone the repo
2. Run `npm install`
3. Create `.env` file in root directory with following content:
   ```
    DB_HOST=<your-db-host>
    DB_USER=<user>
    DB_PASSWORD=<password>
    DB_NAME=<db-name>
    DB_PORT=<port>
   ```
4. Now run `npm run db:setup` to apply migrations and to add seed data
5. `npm run dev` to start the server

**NOTE: The login password for seed users is `password`**

---
# ERD & Short Documentation
<img width="821" height="450" alt="ecommerce erd drawio" src="https://github.com/user-attachments/assets/a65795c1-3b5e-41b1-b8fd-f6a688b64e5e" />

## Documentation

This project is a simple e-commerce API built with Express.js and MySQL using Sequelize ORM. 
The models or major data entities are: `User`, `Category`, `Product`, `Sku`, `Cart`, and `Order`.

Functionalities available according to module:

### 1. User
  - There are 3 user types: `Customer`, `Seller`, and `Admin`.
      - Customers can register themselves, browse products, add to cart, and order.
      - Sellers can register themselves post their products and skus.
      - Admin can add categories and create other admin users.
  - Functionalities according to API endpoints:
     - User registration
     - Login with user (email and password authentication)
     - Get signed in user data
     - Generate auth token from refresh token
     - Create admin user (by admins only)

### 2. Category
  - Create category
  - Get all categories
  - Get products by category

### 3. Product
  - Add product
  - Get product by slug
  - Add sku variants of product

### 4. Cart
  - Add sku variant to cart
  - Update quantity of cart item
  - Delete cart item

### 5. Order
  - Create order

---

# Postman file: [e commerce.postman_collection.json](https://github.com/user-attachments/files/24372635/e.commerce.postman_collection.json)



