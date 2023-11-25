import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import ClientView from './Components/User-Cards/ClientView.jsx'
import Root from './Root'
import Login from './Components/Auth/Login/Login.jsx'
import SignUp from './Components/Auth/SignUp/SignUp.jsx'
import NapRiuCoin from './Components/NapRiuCoin/NapRiuCoin.jsx'
import AllCards from './Components/AllCards/AllCards.jsx'
import Gacha from './Components/Gacha/Gacha.jsx'
import AllDeals from './Components/AllDeals/AllDealsClientView.jsx'
import User from './Components/User/User.jsx'

import './styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route
        index
        element={<AllDeals />}
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
        path='/buy-riu-coin'
        element={<NapRiuCoin />}
      />
      <Route
        path='/cards'
        element={<ClientView />}
      />
      <Route 
        path='/gacha'
        element={<Gacha />}
      />
      <Route
      path='/user'
      element={<User />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
