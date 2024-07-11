import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

function App() {
  // This is only one way of creating browser router
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '',
  //         element: <Home />
  //       },
  //       {
  //         path: 'about',
  //         element: <About />
  //       },
  //       {
  //         path: 'contact',
  //         element: <Contact />
  //       }
  //     ]
  //   }
  // ])

  // this is a better way
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/github' element={<Github />}
          loader={githubInfoLoader}
        />
        <Route path='/user/:userid' element={<User />} />
      </Route>
    )
  )

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
