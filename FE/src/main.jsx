import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/User-Cards/App.jsx'
import './styles/index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/SignUp/SingUp.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route 
        index
        element={<App />}
      />
      <Route 
        path='/login'
        element={<Login />}
      />
      <Route
        path='/sign-up'
        element={<SignUp />}
      />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
