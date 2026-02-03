import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { ShoppingBag, ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();


    // Find the specific product from Redux state
    const product = useSelector(store =>
        store.products.find(p => p.id === productId || p.id === Number(productId))
    );



   

    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(Number(productId)))
    }

    if (!product) return <div className="text-center py-20 text-xl font-bold">Product not found!</div>;

    return (
        <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            {/* Back Button */}
            <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Image Gallery */}
                <section className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex items-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-90 mx-auto h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                </section>

                {/* Right: Product Info */}
                <section className="flex flex-col">
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2">
                        {product.category}
                    </span>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.title}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">
                            {product.rating.rate} <Star size={14} className="ml-1 fill-green-700" />
                        </div>
                        <span className="text-gray-400 text-sm">1.2k Verified Reviews</span>
                    </div>

                    <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                        <span className="text-xl text-gray-400 line-through">${Math.round((product.price + 49) * 100) / 100}</span>
                        <span className="text-green-600 font-bold">(Save $50)</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        This premium product is designed with the highest quality materials to ensure durability and style.
                        Perfect for daily use, it combines modern aesthetics with unmatched functionality.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link
                            to="/bag"

                            className="flex-1  bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200"
                            onClick={() => {
                                handleAddToBag()
                                window.scrollTo({ top: 0, behavior: 'instant' })
                            }}
                        >
                            <ShoppingBag size={20} /> Add to Cart
                        </Link>
                        {/* <button className="flex-1 border-2 border-gray-200 hover:border-gray-800 py-4 rounded-xl font-bold transition-all">
              Wishlist
            </button> */}
                    </div>

                    {/* Value Props */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Truck className="text-blue-500" /> <span>Free Express Delivery</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <ShieldCheck className="text-blue-500" /> <span>2 Year Warranty</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProductDetail;