/*
  # Update Menu Items for Royal Luxe

  ## Changes
  Updates the menu items to reflect more luxurious and expensive offerings for Royal Luxe restaurant.
  All items are updated to feature rare ingredients, premium preparations, and higher price points
  befitting a luxury dining establishment.

  ## Updates
  - Appetizers: Updated to include rare caviar, truffles, and premium ingredients
  - Main Courses: Enhanced with Japanese Wagyu, king crab, rare fish, and luxury meats
  - Desserts: Elevated with gold leaf, exotic fruits, and premium chocolates
  - Beverages: Upgraded to rare vintages, premium spirits, and exclusive selections

  ## Important Notes
  - All prices increased to reflect luxury positioning
  - Descriptions enhanced to emphasize exclusivity and rare ingredients
  - Maintains existing table structure and IDs
*/

-- First, delete existing menu items
DELETE FROM menu_items;

-- Insert luxurious appetizers
INSERT INTO menu_items (name, description, price, category) VALUES
  ('Beluga Caviar Service', 'Imperial Beluga caviar served with traditional accompaniments, blinis, and Champagne', 280.00, 'appetizers'),
  ('Alba White Truffle Risotto', 'Carnaroli risotto shaved tableside with fresh Alba white truffle and aged Parmigiano-Reggiano', 185.00, 'appetizers'),
  ('Bluefin Tuna Tartare', 'Premium bluefin tuna with Ossetra caviar, gold leaf, and yuzu-truffle emulsion', 95.00, 'appetizers'),
  ('Foie Gras Royale', 'Torchon of foie gras with Sauternes gelée, brioche, and black truffle', 120.00, 'appetizers'),
  ('King Crab & Uni', 'Alaskan king crab with fresh sea urchin, avocado, and caviar cream', 145.00, 'appetizers');

-- Insert luxurious main courses
INSERT INTO menu_items (name, description, price, category) VALUES
  ('Japanese A5 Wagyu', 'Miyazaki A5 Wagyu beef with truffle mashed potatoes, seasonal vegetables, and red wine reduction', 385.00, 'mains'),
  ('Whole Roasted Turbot', 'Dover turbot roasted tableside with brown butter, capers, and saffron-infused potatoes', 245.00, 'mains'),
  ('Maine Lobster Thermidor', 'Whole 3lb Maine lobster in cognac cream sauce with caviar and truffle pommes Anna', 295.00, 'mains'),
  ('Kobe Beef Tenderloin', 'Japanese Kobe beef with foie gras, black truffle, dauphinoise potatoes, and Périgueux sauce', 450.00, 'mains'),
  ('Royal Sea Bass en Croute', 'Mediterranean sea bass in puff pastry with lobster mousse, champagne beurre blanc', 220.00, 'mains'),
  ('Duck à l''Orange Royale', 'Whole roasted duck with Grand Marnier sauce, confit leg, and cherry gastrique', 165.00, 'mains'),
  ('Rack of Lamb Persillé', 'Colorado lamb rack with herb crust, truffle jus, gratin dauphinois', 195.00, 'mains');

-- Insert luxurious desserts
INSERT INTO menu_items (name, description, price, category) VALUES
  ('Grand Chocolate Soufflé', 'Valrhona chocolate soufflé with 24k gold leaf, tahitian vanilla ice cream, and cognac sauce', 55.00, 'desserts'),
  ('Baked Alaska Flambé', 'Classic baked Alaska prepared tableside with Grand Marnier flambé', 65.00, 'desserts'),
  ('Mille-Feuille Royale', 'Layers of puff pastry with Madagascar vanilla cream, fresh berries, and edible gold', 48.00, 'desserts'),
  ('Crêpes Suzette', 'Traditional crêpes flambéed tableside with Grand Marnier and orange butter', 52.00, 'desserts'),
  ('Exotic Fruit Pavlova', 'Meringue with rare tropical fruits, passion fruit coulis, and champagne sorbet', 45.00, 'desserts');

-- Insert luxurious beverages
INSERT INTO menu_items (name, description, price, category) VALUES
  ('Château Pétrus 2010', 'Legendary Pomerol from one of the world''s most prestigious estates', 4800.00, 'drinks'),
  ('Dom Pérignon P2 2004', 'Second Plenitude vintage champagne, perfectly aged for 15 years', 1200.00, 'drinks'),
  ('Louis XIII Cognac', 'Rémy Martin''s pinnacle cognac aged up to 100 years', 650.00, 'drinks'),
  ('Yamazaki 25 Year', 'Exceptional Japanese single malt whisky, one of the world''s finest', 850.00, 'drinks'),
  ('Château d''Yquem 2015', 'Premier Cru Supérieur Sauternes, the pinnacle of dessert wines', 950.00, 'drinks'),
  ('Royal Luxe Martini', 'Grey Goose vodka with a hint of Belvedere, served with Ossetra caviar', 85.00, 'drinks'),
  ('Krug Grande Cuvée', 'Prestige champagne with complexity and depth', 450.00, 'drinks'),
  ('The Macallan 30 Year', 'Rare single malt Scotch whisky aged three decades', 1200.00, 'drinks'),
  ('San Pellegrino', 'Premium Italian sparkling mineral water', 15.00, 'drinks'),
  ('Fresh Pressed Juices', 'Organic cold-pressed juice selection', 20.00, 'drinks');
