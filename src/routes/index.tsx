import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Layout from "../components/Layout";


// Lazy load pages
const Home = lazy(() => import("../pages/Home"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:(
          <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
        )
      }
       
       
     
    ]
    
  },
  
  
]);