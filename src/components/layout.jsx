import React from "react";
import Sidebar from "./sidebar";
import CategorySection from "./headerCategory";
import Carousel from "./carousel";
import { Outlet } from "react-router-dom";



function Layout() {
    return(
        <>
        <div className='main-container'>
            <Sidebar/>
            <div className='right-section'>
                <CategorySection/>
                <Carousel />
                <Outlet />
            </div>

        </div>
        </>
    )
}

export default Layout;