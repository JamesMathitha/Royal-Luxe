import { useEffect, useState } from 'react';
import { supabase, MenuItem } from '../lib/supabase';
import { Wine, Utensils, Coffee, Salad } from 'lucide-react';

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_available', true)
        .order('category', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Items', icon: Utensils },
    { id: 'appetizers', name: 'Appetizers', icon: Salad },
    { id: 'mains', name: 'Main Courses', icon: Utensils },
    { id: 'desserts', name: 'Desserts', icon: Coffee },
    { id: 'drinks', name: 'Drinks', icon: Wine },
  ];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      appetizers: 'Appetizers',
      mains: 'Main Courses',
      desserts: 'Desserts',
      drinks: 'Beverages & Spirits',
    };
    return titles[category] || category;
  };

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-gray-400">Loading menu...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Culinary Masterpieces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each dish is a luxurious creation featuring rare ingredients and unparalleled craftsmanship by world-renowned chefs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === id
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {selectedCategory === 'all' ? (
          <div className="space-y-16">
            {['appetizers', 'mains', 'desserts', 'drinks'].map(category => {
              const categoryItems = menuItems.filter(item => item.category === category);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
                    {getCategoryTitle(category)}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryItems.map(item => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-xl font-semibold text-slate-900 flex-1">{item.name}</h4>
        <span className="text-2xl font-bold text-amber-600 ml-4">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  );
}
