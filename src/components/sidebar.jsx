import React from "react";


function Sidebar(params) {
    return (
    <>
    <section className="sidebar">
    <div className="items">
        <li id="main-heading"><a href="#">OSHERE</a></li>
        <li>
        <h5>Menu</h5>
        <a href="#"><i className="ri-home-4-fill"></i> Home</a>
        <a href="#"><i className="ri-community-line"></i> Communities</a>
        </li>
        <li>
        <h5>Media</h5>
        <a href="#"><i className="ri-tv-2-line"></i> Tv shows</a>
        <a href="#"><i className="ri-film-line"></i> Movies</a>
        </li>
        <li>
        <h5>General</h5>
        <a href="#"><i className="ri-tv-2-line"></i> Sign in</a>
        </li>
    </div>
</section>
</>
)
}

export default Sidebar;

