import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      
      {/* 1. Image Section Placeholder */}
      <div className="relative h-64 bg-gray-200">
        {/* Wishlist Button Placeholder */}
        <div className="absolute top-3 right-3 p-4 bg-gray-300 rounded-full w-9 h-9"></div>
      </div>

      {/* 2. Content Section Placeholder */}
      <div className="p-4">
        {/* Category line */}
        <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
        
        {/* Item Name line */}
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
        
        {/* Rating Stars Placeholder */}
        <div className="flex items-center mb-3 gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 w-3 bg-gray-200 rounded-full"></div>
          ))}
          <div className="h-3 w-8 bg-gray-200 rounded ml-2"></div>
        </div>

        {/* Pricing Placeholder */}
        <div className="flex items-center gap-2">
          <div className="h-7 bg-pink-100 rounded w-1/3"></div>
          <div className="h-4 bg-gray-100 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
