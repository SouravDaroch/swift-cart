import React from 'react'
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const bagItemIds = useSelector(store => store.bag)
  const products = useSelector(store => store.products)

  const finalItems = products.filter((item) => {
    return bagItemIds.indexOf(item.id) >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalMRP = 0;
  let totalDiscount = 0;

  // Calculate dynamic totals
  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
    totalDiscount += bagItem.price - bagItem.current_price;
  });

  let finalPayment = totalMRP + (finalItems.length > 0 ? CONVENIENCE_FEES : 0);

  // - totalDiscount +

  return (
    <>   {/* RIGHT: Price Details (Sticky) */}
      <div className="order-summary lg:col-span-4 sticky top-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Price Details ({bagItemIds.length} Items)</h2>

          <div className="space-y-4 text-sm border-b pb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total MRP</span>
              <span className="text-gray-900 font-medium">₹{totalMRP}</span>
            </div>
            {/* <div className="flex justify-between"> */}
              {/* <span className="text-gray-600">Discount on MRP</span> */}
              {/* <span className="text-green-600 font-medium">-₹{totalDiscount}</span> */}
            {/* </div> */}


            <div className="flex justify-between">
              <span className="text-gray-600">Convenience Fee</span>
              <span className="text-gray-900 font-medium">
                {finalItems.length > 0 ? `₹${CONVENIENCE_FEES}` : '₹0'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Coupon Discount</span>
              <button className="text-red-500 font-bold hover:underline">Apply Coupon</button>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Fee</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 mb-4">
            <span className="text-lg font-bold text-gray-900">Total Amount</span>
            <span className="text-lg font-bold text-gray-900">₹{finalPayment}</span>
          </div>

          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded uppercase tracking-wider transition-all shadow-md">
            Place Order
          </button>
        </div>

        {/* Promo Input */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-black transition-colors">
            Apply
          </button>
        </div></div></>
  )
}

export default OrderSummary