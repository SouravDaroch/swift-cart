import React from 'react'
import { useSelector } from 'react-redux';
import HeroCarousel from '../components/HeroCrousel'
import ProductGrid from '../components/ProductGrid'



const HomePage = () => {
  const searchTerm = useSelector((store) => store.search);
  return (
    <>
      {!searchTerm && <HeroCarousel />}

      <main className="max-w-7xl mx-auto px-4">
        {searchTerm.trim() !== "" && (
          <h2 className="text-2xl font-bold my-6">
            Showing results for "{searchTerm}"
          </h2>
        )}
        <ProductGrid />
      </main>
    </>
  )
}

export default HomePage