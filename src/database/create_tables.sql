-- Rename the existing table
ALTER TABLE CartProducts RENAME TO CartProducts_old;

-- Create the new table with the UNIQUE constraint
CREATE TABLE CartProducts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cart_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    FOREIGN KEY (cart_id) REFERENCES Carts(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    UNIQUE (cart_id, product_id)
);

-- Copy data from the old table to the new table
INSERT INTO CartProducts (id, cart_id, product_id, quantity)
SELECT id, cart_id, product_id, quantity FROM CartProducts_old;

-- Drop the old table
DROP TABLE CartProducts_old;