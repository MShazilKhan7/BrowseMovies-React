import React from "react";
import { Link } from "react-router-dom";

function Sidebar(params) {
    return (
    <>
    <section className="sidebar">
    <div className="items">
        <li id="main-heading"><Link to={'/'}>OSHERE</Link></li>
        <li>
        <h5>Menu</h5>
        <Link to={'/'}><i className="ri-home-4-fill"></i> Home</Link>
        <Link to={'/'}><i className="ri-community-line"></i> Communities</Link>
        </li>
        <li>
        <h5>Media</h5>
        <Link to={'/'}><i className="ri-tv-2-line"></i> Tv shows</Link>
        <Link to={'/'}><i className="ri-film-line"></i> Movies</Link>
        </li>
        <li>
        <h5>General</h5>
        <Link to={'/'}><i className="ri-tv-2-line"></i> Sign in </Link>
        </li>
    </div>
</section>
</>
)
}

export default Sidebar;

