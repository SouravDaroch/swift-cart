import React from 'react';
import BagList from './BagList.jsx'
import OrderSummary from './OrderSummary.jsx';
import { useSelector } from 'react-redux';
import EmptyCart from '../EmptyCart.jsx';

const CartPageUI = () => {
  // Mock data for UI demonstration

  const bagItems = useSelector(store => store.bag)

  const products = useSelector(store => store.products)

  const cartItems = products.filter(product => bagItems.includes(product.id))


  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-baseline gap-4 mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-gray-500 font-medium">{cartItems.length} Items</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {
            (cartItems.length === 0) ?<EmptyCart/> :
       <BagList cartItems={cartItems}/>  }

        {  (cartItems.length !== 0)  && <OrderSummary />
}
        </div>


      </div>
    </div>
  );
};

export default CartPageUI;