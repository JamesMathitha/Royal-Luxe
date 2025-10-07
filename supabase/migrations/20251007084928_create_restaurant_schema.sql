/*
  # Royale Food Haven Restaurant Database Schema

  ## Overview
  Creates the complete database structure for the restaurant website including reservations,
  menu items, and contact form submissions.

  ## New Tables

  ### `menu_items`
  - `id` (uuid, primary key) - Unique identifier for each menu item
  - `name` (text) - Name of the dish or drink
  - `description` (text) - Detailed description of the item
  - `price` (numeric) - Price of the item
  - `category` (text) - Category: appetizers, mains, desserts, drinks
  - `image_url` (text, optional) - URL to item image
  - `is_available` (boolean) - Whether item is currently available
  - `created_at` (timestamptz) - Timestamp of creation

  ### `reservations`
  - `id` (uuid, primary key) - Unique identifier for each reservation
  - `guest_name` (text) - Name of the guest
  - `email` (text) - Guest email address
  - `phone` (text) - Guest phone number
  - `party_size` (integer) - Number of people in the party
  - `reservation_date` (date) - Date of reservation
  - `reservation_time` (time) - Time of reservation
  - `special_requests` (text, optional) - Any special requests
  - `status` (text) - Status: pending, confirmed, cancelled
  - `created_at` (timestamptz) - Timestamp of creation

  ### `contact_messages`
  - `id` (uuid, primary key) - Unique identifier for each message
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Timestamp of creation

  ## Security
  - Enable RLS on all tables
  - Allow public read access to menu items (guests can view menu)
  - Allow public insert for reservations and contact messages
  - Authenticated admin users would need separate policies (not included here for simplicity)
*/

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL,
  category text NOT NULL CHECK (category IN ('appetizers', 'mains', 'desserts', 'drinks')),
  image_url text,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  special_requests text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for menu_items (public read access)
CREATE POLICY "Anyone can view menu items"
  ON menu_items FOR SELECT
  USING (true);

-- Policies for reservations (public can create)
CREATE POLICY "Anyone can create reservations"
  ON reservations FOR INSERT
  WITH CHECK (true);

-- Policies for contact_messages (public can create)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- Insert sample menu items
INSERT INTO menu_items (name, description, price, category) VALUES
  -- Appetizers
  ('Truffle Mushroom Soup', 'Creamy wild mushroom soup infused with black truffle oil, served with herb croutons', 18.00, 'appetizers'),
  ('Seared Scallops', 'Pan-seared scallops on cauliflower purée with crispy pancetta and microgreens', 24.00, 'appetizers'),
  ('Foie Gras Terrine', 'House-made foie gras with fig compote, toasted brioche, and aged balsamic', 32.00, 'appetizers'),
  ('Burrata & Heirloom Tomatoes', 'Fresh burrata cheese with heirloom tomatoes, basil oil, and aged balsamic reduction', 22.00, 'appetizers'),
  
  -- Mains
  ('Wagyu Beef Tenderloin', 'Premium wagyu beef tenderloin with truffle mashed potatoes, grilled asparagus, and red wine reduction', 85.00, 'mains'),
  ('Pan-Seared Sea Bass', 'Mediterranean sea bass with saffron risotto, grilled vegetables, and lemon butter sauce', 68.00, 'mains'),
  ('Duck Confit', 'Crispy duck confit with cherry gastrique, dauphinoise potatoes, and green beans', 54.00, 'mains'),
  ('Lobster Thermidor', 'Whole lobster in creamy brandy sauce, served with herb-roasted vegetables and truffle fries', 95.00, 'mains'),
  ('Wild Mushroom Risotto', 'Creamy arborio risotto with seasonal wild mushrooms, parmesan, and truffle oil', 42.00, 'mains'),
  
  -- Desserts
  ('Chocolate Soufflé', 'Dark chocolate soufflé with vanilla bean ice cream and raspberry coulis', 16.00, 'desserts'),
  ('Crème Brûlée', 'Classic vanilla bean crème brûlée with caramelized sugar crust and fresh berries', 14.00, 'desserts'),
  ('Tiramisu', 'Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream', 15.00, 'desserts'),
  ('Lemon Tart', 'Tangy lemon tart with Italian meringue and fresh raspberries', 13.00, 'desserts'),
  
  -- Drinks
  ('Château Margaux 2015', 'Bordeaux red wine with notes of blackcurrant and cedar', 280.00, 'drinks'),
  ('Dom Pérignon Champagne', 'Vintage champagne with delicate bubbles and complex flavors', 350.00, 'drinks'),
  ('Classic Martini', 'Gin or vodka martini with olive or twist', 18.00, 'drinks'),
  ('Old Fashioned', 'Bourbon, bitters, sugar, and orange peel', 16.00, 'drinks'),
  ('Espresso Martini', 'Vodka, coffee liqueur, and fresh espresso', 17.00, 'drinks'),
  ('Sparkling Water', 'Premium sparkling mineral water', 8.00, 'drinks'),
  ('Fresh Juice Selection', 'Orange, grapefruit, or cranberry juice', 10.00, 'drinks');