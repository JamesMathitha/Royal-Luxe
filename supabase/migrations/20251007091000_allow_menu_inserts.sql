/*
  # Allow Menu Item Inserts

  ## Changes
  Adds policy to allow inserting menu items (for administrative purposes)

  ## Security
  - Adds INSERT policy for menu_items table
*/

-- Add policy to allow anyone to insert menu items (can be restricted to admin users later)
CREATE POLICY "Allow menu item inserts"
  ON menu_items FOR INSERT
  WITH CHECK (true);
