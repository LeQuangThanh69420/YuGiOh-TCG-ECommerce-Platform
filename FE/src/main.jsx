import ReactDOM from 'react-dom/client'
import ClientView from './Components/User-Cards/ClientView.jsx'
import './styles/index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Login from './Components/Auth/Login/Login.jsx'
import SignUp from './Components/Auth/SignUp/SignUp.jsx'
import NapRiuCoin from './Components/NapRiuCoin/NapRiuCoin.jsx'
import UserDealsClientView from './Components/User-Deals/UserDealsClientView.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route
        index
        element={<ClientView />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/sign-up'
        element={<SignUp />}
      />
      <Route 
        path='/user'
        element={<></>}
      />
      <Route
        path='/top-up'
        element={<NapRiuCoin />}
      />
      <Route
        path='/user-deals'
        element={<UserDealsClientView />}
      />
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
