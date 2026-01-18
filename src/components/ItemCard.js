'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer overflow-hidden h-full">
        {/* Image Container */}
        <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">{item.name}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {item.description}
          </p>

          {/* Footer Info */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">
              ${item.price?.toFixed(2) || 'N/A'}
            </span>
            {item.stock !== undefined && (
              <span
                className={`text-xs font-semibold px-3 py-1 rounded ${
                  item.stock > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
