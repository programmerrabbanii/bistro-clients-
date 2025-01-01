import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    const location=useLocation()
    const  noHeaderFooter=location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
           <Outlet></Outlet>
          {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default MainLayouts;