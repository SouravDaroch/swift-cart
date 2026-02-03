import React from 'react';
import { FaStar, FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';
import { Link } from "react-router"
import { MdOutlineDelete } from "react-icons/md";

const ProductCard = ({ product }) => {
  // Destructuring product data
  const {id, title, price,  image, rating, category } = product;

  // original_price
  const bag = useSelector(store=>store.bag)
  const foundItem =  bag.includes(product.id)


  const dispatch = useDispatch();
  const handleAddToBag = ()=>{
    dispatch(bagActions.addToBag(product.id))
  }

    const handleRemove = ()=>{
    dispatch(bagActions.removeFromBag(product.id))
  }

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      
      {/* 1. image Section */}
      <div className="relative  overflow-hidden bg-gray-100">
        {/* passing params  */}
        <Link to={`/product/${id}`}  onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>
        <img 
          src={image} 
          alt={title} 
          className="h-70 object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
        />
        </Link>
        {/* Sale Badge */}
        {/* {original_price &&  */}
        (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-md transition-colors">
          <FaRegHeart size={18} />
        </button>

        {/* Quick Add to Cart (Visible on Hover) */}

    {foundItem ? (
  <div className="absolute bottom-0 w-full flex group-hover:translate-y-0 transition-transform duration-300">
    {/* Navigation Button */}
    <Link 
      to="/bag" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
      className="flex-1 bg-sky-600 text-white py-3 flex items-center justify-center gap-2 font-semibold active:scale-95 transition-all"
    >
      <FaShoppingCart /> Go to Cart
    </Link>

    {/* Independent Delete Button */}
    <button 
      onClick={(e) => {
        e.preventDefault(); // Prevents link trigger
        e.stopPropagation(); // Stops event from bubbling to parent
        handleRemove();
      }} 
      className=" group/delete bg-red-500 text-white px-2 hover:bg-red-600 transition-colors cursor-pointer"
      title="Remove item"
    >
      <MdOutlineDelete className="h-5.5 w-6 group-hover/delete:scale-108 transition-transform" />
    </button>
  </div>
) : (
  <button 
    onClick={handleAddToBag} 
    className="absolute bottom-0 w-full bg-pink-600 text-white py-3 flex items-center justify-center gap-2 group-hover:translate-y-0 transition-transform duration-300 font-semibold active:scale-95 cursor-pointer"
  >
    <FaShoppingCart /> Add to Cart
  </button>
)}


      </div>

      {/* 2. Content Section */}
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{category}</p>
        <h3 className="text-gray-800 font-bold text-lg truncate mb-1">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.rate ? "text-yellow-400" : "text-gray-200"} size={14} />
          ))}
          <span className="text-gray-400 text-xs ml-2">({rating.count})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-pink-600">${price}</span>
          {
          // original_price && 
          (
            <span className="text-sm text-gray-400 line-through">{}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;