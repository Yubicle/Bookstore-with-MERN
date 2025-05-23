import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* change site entry point from <App/> to router.jsx */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
