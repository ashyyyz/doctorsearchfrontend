import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    //  children:[
    //   {
    //     path:'',
    //     element: <Section1 />
    //   },
    //   {
    //     path:'doctors',
    //     element: <FoundedDoctor />
    //   }
    //  ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}/>
)
