import React from "react";
import { Link } from "react-router-dom";

let categories = ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary','Drama', 'Family', 'Kids', 'Mystery','News', 'Reality', 'Sci-Fi & Fantasy', 'Soap', 'War & Politics','Talk', 'Western']

function CategorySection() {

    return(
        <div className="category-section">
            <div className="top-headings">
                <li>
                    <Link id="category" to={'tvshows'}>TV Shows</Link>
                </li>
                <li>
                    <Link id="category"  to={'movies'}>Movies</Link>
                </li>
            </div>
            <div className="category-items">
                <ul className="items">
                    {categories.map((category, index) => (
                        // <li><a key={index} href="#">{category}</a></li>
                        <li  key={index}><Link className="category">{category}</Link></li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default CategorySection;