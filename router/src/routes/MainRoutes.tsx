import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Error404 } from '../pages/Error404';
import { AboutItem } from "../pages/AboutItem";
import { Authenticator } from "../Authenticator";

import {useRoutes} from "react-router-dom";

export const MainRoutes = () => {

    return useRoutes([
        {path: "/", element: <Home/>},
        {path: "/about", element: <Authenticator><About/></Authenticator>},
        {path: "/about/:slug", element: <AboutItem />},
        {path: "*", element: <Error404/>}
      ]);

    /*return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Authenticator>
          <About />
        </Authenticator>} />
        <Route path="/about/:slug" element={<AboutItem />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    )*/
}