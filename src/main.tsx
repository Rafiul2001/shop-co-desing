import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.tsx'
import LoginPage from './pages/LoginPage.tsx'
import { ProductContextProvider } from './contexts/ProductContext.tsx'
import ViewProduct from './pages/ViewProduct.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <ProductContextProvider>
        <App />
      </ProductContextProvider>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: LoginPage
      },
      {
        path: "products/:productId",
        Component: ViewProduct
      },
      {
        path: "*",
        element: <div className='max-w-7xl h-full mx-auto py-5 text-3xl flex flex-row items-center justify-center'>
          <h1 className='text-rose-500'>ERROR 404! Not found</h1>
        </div>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
