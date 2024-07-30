import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import { QueryClient,QueryClientProvider } from 'react-query'
import LoginPage from './Auth/LoginPage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Page from './pages/teacher/Page'
// import Page from './pages/student/Page'

const router = createBrowserRouter([{
  path:'/',
  element:<LoginPage/>
  
},
{
  path:'/app',
  element:<Page/>

}])
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>

<RouterProvider router={router}/>
    {/* <LoginPage/>
    <App /> */}

 
  </QueryClientProvider>,
)
