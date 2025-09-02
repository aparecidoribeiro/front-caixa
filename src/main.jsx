import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./routes/routes"
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <>
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
)
