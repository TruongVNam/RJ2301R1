// import Login1 from './homework1/Login1';
// import Home from './homework1/Home';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login2 from './homework2/Login2';
import Employee from './homework2/Employee';
import EmployeeDetail from './homework2/EmployeeDetail';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Login/>
//   },
//   {
//     path: '/home',
//     element: <Home/>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login2 />
  },
  {
    path: '/employee',
    element: <Employee />
  },
  {
    path: '/detail',
    element: <EmployeeDetail />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
