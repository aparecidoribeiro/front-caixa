import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./routes/routes"
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Bounce } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="colored"
      transition={Bounce}
    />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
)
