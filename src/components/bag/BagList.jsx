import React from 'react'
import { HiOutlineTrash, HiMinus, HiPlus, HiOutlineShieldCheck } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../../store/bagSlice'
const BagList = ({ cartItems }) => {



  
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(bagActions.removeFromBag(id))
  }

  return (
    <>
      {/* LEFT: Product List */}
      <div className="lg:col-span-8 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-6 relative group">
            {/* Image */}
            <div className="w-full sm:w-32 h-32 shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md bg-gray-100" />
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg hover:text-blue-600 cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                  {/* <p className="text-sm text-gray-500 mt-1 uppercase">Seller: {item.company}</p> */}
                  {/* <p className='text-sm text-gray-500 mt-1 uppercase'>Delivery by {item.delivery_date}</p> */}
                    <p className='text-sm text-gray-500 mt-1 uppercase'>{item.category}</p>
                </div>
                <p className="font-bold text-xl">${item.price}
                  {/* {item.original_price && ( */}
                    {/* <span className="text-sm text-gray-400 line-through">₹{item.original_price}</span> */}
                  {/* )} */}
                </p>

              </div>


              {/* Options (Color/Size)
              <div className="flex gap-4 mt-3">
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-600">
                  Color: {item.color}
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-600">
                  Size: {item.size}
                </div>
              </div> */}

              {/* Quantity and Actions */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button className="p-2 hover:bg-gray-100 transition-colors"><HiMinus size={16} /></button>
                  <span className="px-4 font-semibold text-sm">1</span>
                  <button className="p-2 hover:bg-gray-100 transition-colors"><HiPlus size={16} /></button>
                </div>

                <button onClick={() => handleRemove(item.id)} className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-sm font-medium transition-colors">
                  <HiOutlineTrash size={20} />
                  <span className="hidden sm:inline">Remove</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Loyalty/Benefits Section */}
        <div className="bg-white border border-dashed border-blue-300 p-4 rounded-lg flex items-center gap-4 text-blue-800">
          <HiOutlineShieldCheck size={28} className="text-blue-600" />
          <div>
            <p className="text-sm font-bold">SwiftCart Assurance</p>
            <p className="text-xs">100% Genuine Products | Easy Returns | Secure Payments</p>
          </div>
        </div>
      </div></>
  )
}

export default BagList