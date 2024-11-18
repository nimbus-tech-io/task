CREATE TABLE users (
    id UUID PRIMARY KEY,                     -- Unique identifier for each user
    name VARCHAR(255) NOT NULL,              -- Name of the user
    email VARCHAR(255) NOT NULL UNIQUE,      -- Email of the user, must be unique
    password VARCHAR(255) NOT NULL           -- Password for the user
);
