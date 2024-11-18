CREATE TABLE products (
    id UUID PRIMARY KEY,                     -- Unique identifier for each product
    name VARCHAR(255) NOT NULL UNIQUE,       -- Name of the product, must be unique
    description TEXT NOT NULL,               -- Description of the product
    price INT NOT NULL,                      -- Price of the product
    stock_quantity INT NOT NULL,             -- Quantity of the product in stock
    user_id VARCHAR(255) NOT NULL,           -- User ID associated with the product
    category_id UUID NOT NULL,               -- Foreign key to the category table
    CONSTRAINT fk_categories FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);
