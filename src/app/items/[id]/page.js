'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { fetchItemById } from '@/lib/api';
import { showErrorToast } from '@/components/ToastProvider';

export default function ItemDetailsPage() {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadItem();
  }, [params.id]);

  const loadItem = async () => {
    try {
      setIsLoading(true);
      const data = await fetchItemById(params.id);
      setItem(data);
    } catch (error) {
      console.error('Failed to load item:', error);
      showErrorToast('Failed to load item details');
      // Show mock data on error
      const mockItems = {
        1: {
          id: 1,
          name: 'Laptop',
          description: 'High-performance laptop for professionals',
          longDescription:
            'This premium laptop is equipped with the latest processors and high-resolution display, perfect for professional work, gaming, and content creation.',
          price: 999.99,
          image: 'https://via.placeholder.com/500x400?text=Laptop',
          category: 'electronics',
          stock: 5,
          specs: {
            processor: 'Intel Core i7',
            ram: '16GB',
            storage: '512GB SSD',
            display: '15.6 inch 4K',
          },
        },
        2: {
          id: 2,
          name: 'Wireless Mouse',
          description: 'Ergonomic wireless mouse with long battery life',
          longDescription:
            'Comfortable ergonomic design reduces wrist strain. Features advanced optical tracking and can connect to up to 3 devices simultaneously.',
          price: 29.99,
          image: 'https://via.placeholder.com/500x400?text=Mouse',
          category: 'electronics',
          stock: 15,
          specs: {
            type: 'Optical',
            connectivity: 'Wireless 2.4GHz',
            battery: '18 months',
            dpi: 'Adjustable 800-3200',
          },
        },
      };
      setItem(mockItems[params.id] || mockItems[1]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 mt-4">Loading item details...</p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h1>
            <p className="text-gray-600 mb-8">The item you're looking for doesn't exist.</p>
            <Link
              href="/items"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Back to Items
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/items" className="text-blue-600 hover:text-blue-700">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{item.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-2 cursor-pointer hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} ${i}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Category Badge */}
              {item.category && (
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              )}

              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{item.name}</h1>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-blue-600">${item.price?.toFixed(2)}</p>
                {item.stock > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ In Stock ({item.stock} available)
                  </p>
                )}
                {item.stock === 0 && (
                  <p className="text-sm text-red-600 mt-2">✗ Out of Stock</p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-6">{item.description}</p>

              {/* Long Description */}
              {item.longDescription && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">{item.longDescription}</p>
                </div>
              )}

              {/* Specifications */}
              {item.specs && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(item.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="text-gray-600 font-medium">
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Actions */}
              {item.stock > 0 && (
                <div className="flex items-center gap-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 border-l border-r">{quantity}</span>
                      <button
                        onClick={() =>
                          setQuantity(Math.min(item.stock, quantity + 1))
                        }
                        className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  disabled={item.stock === 0}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {item.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <Link
                  href="/items"
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl">🚚</p>
                    <p className="text-sm text-gray-600 mt-2">Free Shipping</p>
                  </div>
                  <div>
                    <p className="text-2xl">🔄</p>
                    <p className="text-sm text-gray-600 mt-2">Easy Returns</p>
                  </div>
                  <div>
                    <p className="text-2xl">🛡️</p>
                    <p className="text-sm text-gray-600 mt-2">Secure Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
