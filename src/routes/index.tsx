import { createBrowserRouter } from "react-router-dom";
import {  Suspense } from "react";

import Layout from "../components/Layout";
import AboutPage from "../components/About";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndServices from "../components/TermAndService";
import RefundPolicy from "../components/RefundPolicy";
import Services from "../pages/Services";
import FraudPolicy from "../components/FraudPolicy";
import DeliveryPolicy from "../components/DeliveryPolicy";
import Projects from "../components/Projects";
import Loading from "../components/Loading";
import Home from "../pages/Home";
import Contact from "../components/Contact";
import CompliancePolicy from "../components/CompliancePolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index:true,
        element:(
          <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
        )
      },
     
      {
        path:"services",
        element:(
          <Suspense fallback={<Loading />}>
          <Services/>
        </Suspense>
        )
      },
      {
        path:"contact",
        element:(
          <Suspense fallback={<Loading />}>
          <Contact/>
        </Suspense>
        )
      },
      {
        path:"products",
        element:(
          <Suspense fallback={<Loading />}>
          <Projects/>
        </Suspense>
        )
      },
      {
        path:"aboutUs",
        element:(
          <Suspense fallback={<Loading/>}>
          <AboutPage/>
        </Suspense>
        )
      },
      {
        path:"privacy-policy-t&c",
        element:(
          <Suspense fallback={<Loading />}>
          <PrivacyPolicy/>
        </Suspense>
        )
      },
      {
        path:"terms",
        element:(
          <Suspense fallback={<Loading />}>
          <TermsAndServices/>
        </Suspense>
        )
      },
      {
        path:"refund",
        element:(
          <Suspense fallback={<Loading />}>
          <RefundPolicy/>
        </Suspense>
        )
      },
      {
        path:"fraud",
        element:(
          <Suspense fallback={<Loading/>}>
          <FraudPolicy/>
        </Suspense>
        )
      },
      {
        path:"delivery",
        element:(
          <Suspense fallback={<Loading/>}>
          <DeliveryPolicy/>
        </Suspense>
        )
      },
      {
        path:"report",
        element:(
          <Suspense fallback={<Loading/>}>
          <CompliancePolicy/>
        </Suspense>
        )
      },
       
       
     
    ]
    
  },
  
  
]);