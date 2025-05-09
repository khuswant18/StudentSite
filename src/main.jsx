import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import Error from './Error';
import Dashboard from './Pages/Dashboard/Dashboard';
import Authentication from './Pages/Authentication/Authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Authentication/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
