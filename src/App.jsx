import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import RootLayOut from "./components/layout/RootLayOut"
import ShopGrid from "./pages/ShopGrid"
import ShopList from "./pages/ShopList"
import ProductDetails from "./pages/ProductDetails"
import ShopingCart from "./pages/ShopingCart"


function App() {
  let router = createBrowserRouter(createRoutesFromElements(

    < Route  element={<RootLayOut/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/shopgrid" element={<ShopGrid/>}></Route>
      <Route path="/shoplist" element={<ShopList/>}></Route>
      <Route path="/productdetails" element={<ProductDetails/>}></Route>
      <Route path="/shopingcart" element={<ShopingCart/>}></Route>
    </Route>
  
    ))
  

  return (
    <>
<RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
