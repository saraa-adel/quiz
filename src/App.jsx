import React from 'react'
import Layout from './Component/Layout/Layout.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Quiz from './Component/Quiz/Quiz.jsx'
import NotFound from './Component/NotFound/NotFound.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

export default function App() {

  // let routers = createBrowserRouter([
  //   {path : '', element : <Layout/>, children: [
  //     {index: true , element: <Quiz/>},
  //     {path: '*', element: <NotFound/>}
  //   ]}
  // ])

  return <>
  {/* <RouterProvider router={routers}></RouterProvider> */}
  <Navbar/>
  <Quiz/>
  </>
}
