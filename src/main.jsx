import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import PublicRoute from './Routes/PublicRoute/PublicRoute'
import AuthProvider from './Components/Provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider><RouterProvider router={PublicRoute}></RouterProvider></AuthProvider>
  </StrictMode>,
)
