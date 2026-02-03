import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Bag from './components/bag/Bag.jsx'
import HomePage from './pages/HomePage.jsx'
import swiftcartStore from './store/index.js'
import {Provider} from "react-redux";
import ProductDetail from './pages/ProductDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [    {
        path:"/",
        element: <HomePage/>,
  },
      {
        path:"/bag",
        element: <Bag/>,
  },
  {
  path: "/product/:productId", // The ":" makes it a dynamic parameter
  element: <ProductDetail />
}
]
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={swiftcartStore}>
     <RouterProvider router={router} />
     </Provider>
  </StrictMode>,
)
