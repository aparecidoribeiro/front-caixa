import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./routes/routes"
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer autoClose={2000} />
    <RouterProvider router={router} />
  </>
)
