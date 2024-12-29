import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Bannar from '../Components/Bannar';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;