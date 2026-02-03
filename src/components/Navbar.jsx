import { ShoppingCart, User, Search, Menu, Home } from 'lucide-react'; 
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../store/searchSlice"; 
import logo from '/Logo.png';

const Navbar = () => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  // Function to handle home navigation and state reset
  const handleHomeClick = () => {
    dispatch(setSearchTerm("")); // Clears search so HeroCarousel shows up
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 p-2">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo/Brand Name */}
          <Link to={"/"} onClick={handleHomeClick}>
            <div className="flex items-center">
              <div className='w-12 h-12'>
                <img src={logo} alt="SwiftCart Logo" />
              </div>
              <div className='hidden md:flex font-bold items-center text-3xl text-gray-800'>
                <span className='tracking-tighter m-1'>Swift</span>
                <span className="bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">Cart</span>
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-4">
            <div className="max-w-xl w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search products..."
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Icons/Navigation Links */}
          <div className="flex items-center space-x-1 md:space-x-4">
            
            {/* HOME BUTTON */}
            <Link 
              to={"/"} 
              onClick={handleHomeClick}
              className="p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition duration-150 flex flex-col items-center group"
            >
              <Home className="h-6 w-6 group-hover:scale-110 transition-transform" aria-label="Home" />
              <span className="text-[10px] font-bold uppercase mt-0.5 hidden md:block"></span>
            </Link>

            {/* USER PROFILE */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition duration-150 flex flex-col items-center group">
              <User className="h-6 w-6 group-hover:scale-110 transition-transform" aria-label="User Profile" />
              <span className="text-[10px] font-bold uppercase mt-0.5 hidden md:block">{
                // profile 
                }</span>
            </button>

            {/* SHOPPING BAG */}
            <Link 
              to={"/bag"} 
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition duration-150 relative flex flex-col items-center group"
            >
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" aria-label="Shopping Cart" />
              <span className="absolute top-1 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full border-2 border-white">
                {bag.length}
              </span>
              <span className="text-[10px] font-bold uppercase mt-0.5 hidden md:block">
                {/* Bag */}
                </span>
            </Link>

            {/* MOBILE MENU */}
            <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 md:hidden">
              <Menu className="h-6 w-6" aria-label="Open menu" />
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;