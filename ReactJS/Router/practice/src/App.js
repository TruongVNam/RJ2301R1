import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from "./practice1_components/About";
// import Home from "./practice1_components/Home";
// import Contact from "./practice1_components/Contact";
// import Category2 from './practice2_components/Category2';
// import Product2 from './practice2_components/Product2';
import Category3 from './practice3_components/Category3';
import Product3 from './practice3_components/Product3';


// const router1 = createBrowserRouter([
//   {
//     path:"/",
//     element: <Home/>
//   },
//   {
//     path:"/about",
//     element: <About/>
//   },
//   {
//     path:"/contact",
//     element: <Contact/>
//   }
// ]
// )

// const router2 = createBrowserRouter([
//   {
//     path:"/",
//     element: <Category2/>
//   },
//   {
//     path: '/product2/:categoryId',
//     element: <Product2/>
//   },
// ])

const router3 = createBrowserRouter([
  {
    path:"/",
    element: <Category3/>
  },
  {
    path: '/product3/:categoryId',
    element: <Product3/>
  },
])

function App() {
  return (
    <>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Outlet/> */}
      {/* <RouterProvider router={router1}/> */}
      {/* <Category3/> */}
      <RouterProvider router={router3}/>
    </>
  );
}

export default App;
