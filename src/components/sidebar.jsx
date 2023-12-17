import React from "react";
import {FaHome } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { MdScreenshotMonitor, MdMovie } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import { Link } from "react-router-dom";

function Sidebar(params) {
    return (
    <>
    <section className="sidebar">
    <div className="items">
        <li id="main-heading"><a href="#">OSHERE</a></li>
        <li>
            <h5>Menu</h5>
            <Link> <FaHome/> Home</Link>
            <Link> <CgCommunity/> Communities</Link>
        </li>
        <li>
            <h5>Media</h5>
            <Link to={'tvshows'}><MdScreenshotMonitor /> Tv shows </Link>
            <Link to={'movies'}><MdMovie /> Movies </Link>
        </li>
        <li>
            <h5>General</h5>
            <Link><PiSignIn /> Movies </Link>
        </li>
    </div>
</section>
</>
)
}

export default Sidebar;

