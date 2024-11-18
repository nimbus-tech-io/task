CREATE TABLE categories (
    id UUID PRIMARY KEY,                     -- Unique identifier for each category
    name VARCHAR(255) NOT NULL UNIQUE        -- Name of the category, must be unique
);
