import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Bannar from '../Components/Bannar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayouts;