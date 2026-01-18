'use client';

import { useState, useEffect } from 'react';
import ItemCard from '@/components/ItemCard';
import { fetchItems } from '@/lib/api';
import { showErrorToast } from '@/components/ToastProvider';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setIsLoading(true);
      const data = await fetchItems();
      setItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error('Failed to load items:', error);
      showErrorToast('Failed to load items. Please try again.');
      // Show mock data on error
      const mockItems = [
        {
          id: 1,
          name: 'Laptop',
          description: 'High-performance laptop for professionals',
          price: 999.99,
          image: 'https://via.placeholder.com/300x200?text=Laptop',
          category: 'electronics',
          stock: 5,
        },
        {
          id: 2,
          name: 'Wireless Mouse',
          description: 'Ergonomic wireless mouse with long battery life',
          price: 29.99,
          image: 'https://via.placeholder.com/300x200?text=Mouse',
          category: 'electronics',
          stock: 15,
        },
        {
          id: 3,
          name: 'USB-C Cable',
          description: 'Durable fast-charging USB-C cable',
          price: 14.99,
          image: 'https://via.placeholder.com/300x200?text=USB+Cable',
          category: 'accessories',
          stock: 50,
        },
        {
          id: 4,
          name: 'Mechanical Keyboard',
          description: 'RGB mechanical keyboard with custom switches',
          price: 159.99,
          image: 'https://via.placeholder.com/300x200?text=Keyboard',
          category: 'electronics',
          stock: 8,
        },
        {
          id: 5,
          name: 'Monitor Stand',
          description: 'Adjustable monitor stand for better ergonomics',
          price: 49.99,
          image: 'https://via.placeholder.com/300x200?text=Monitor+Stand',
          category: 'accessories',
          stock: 12,
        },
        {
          id: 6,
          name: 'Webcam',
          description: '4K webcam for streaming and video calls',
          price: 79.99,
          image: 'https://via.placeholder.com/300x200?text=Webcam',
          category: 'electronics',
          stock: 7,
        },
      ];
      setItems(mockItems);
      setFilteredItems(mockItems);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let filtered = [...items];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(filtered);
  }, [searchQuery, selectedCategory, sortBy, items]);

  const categories = ['all', ...new Set(items.map((item) => item.category || 'uncategorized'))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Products & Items</h1>
          <p className="text-gray-600 mt-2">Browse our collection of high-quality products</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="bg-blue-50 w-full px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>{filteredItems.length}</strong> product(s) found
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600 mt-4">Loading items...</p>
            </div>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
