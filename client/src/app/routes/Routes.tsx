import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/abount/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
    {
         path: '/', 
         element: <App />,
         children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <ProductDetails />},
            {path: '/catalog/:id', element: <ProductDetails />},
            {path: '/about', element: <AboutPage />},
            {path: '/contact', element: <ContactPage />}
         ]
    }
])