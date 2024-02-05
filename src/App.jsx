import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Button } from '@material-tailwind/react'
import Home from './pages/home'
import Products from './pages/products'
import Info from './pages/info'

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/info",
      element: <Info />
    }
  ])
  return (
    <>
      <Button className=' bg-black text-white'> Hello Worlds</Button>
    </>
  )
}

export default App
