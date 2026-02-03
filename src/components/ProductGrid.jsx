import React from 'react';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard'; // We will create this next
import { useSelector } from 'react-redux';

const ProductGrid = () => {
  const featuredProducts = useSelector(store => store.products);
  // Get the fetching status from your store
  const { currentlyFetching } = useSelector(store => store.fetchStatus);


const searchTerm = useSelector(store => store.search); 
// subscribe or use state and state updation 

  // Filter logic: check if name or category matches search
const filteredProducts = searchTerm.trim() === "" 
    ? featuredProducts // If search is empty, show everything
    : featuredProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );


  return (
   <section className="py-10 max-w-7xl mx-auto">
      {/* Dynamic Heading: Changes based on search input */}
      <div className="px-4 md:px-25 mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {searchTerm.trim() !== "" ? `Results for "${searchTerm}"` : "Featured Products"}
        </h2>
        <p className="text-gray-500">
          {searchTerm.trim() !== ""
            ? `Found ${filteredProducts.length} items` 
            : "Handpicked top-rated products for you"}
        </p>
      </div>

      {/* The Grid Logic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-25 pb-20">
        {currentlyFetching ? (
          // Show skeleton cards while loading
          [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
        ) : filteredProducts.length > 0 ? (
          // Show filtered products if they exist
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          //  Empty State UI: Shown when no matches are found
          <div className="col-span-full py-20 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl">
            <p className="text-xl text-gray-400 font-medium">
              Oops! No products found for "{searchTerm}"
            </p>
            <p className="text-sm text-gray-400 mt-2">Try checking for typos or use more general terms.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
