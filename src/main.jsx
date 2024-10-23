import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contact.jsx'
import Services from './components/Services/Services.jsx'
import Project from './components/Projects/Project.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      }, {
        path:"about",
        element: <About/>
      },{
      }, {
        path:"services",
        element: <Services/>
      },{
      }, {
        path:"project",
        element: <Project/>
      },{
        path:"contact",
        element: <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
