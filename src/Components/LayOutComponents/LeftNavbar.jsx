import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [category, setcatagory] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setcatagory(data.data.news_category))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <p className="font-semibold">All Caterogy ({category.length}) </p>
            <div className="font-semibold text-gray-400 mt-3 flex flex-col gap-3">
                {
                    category.map(category =>
                        <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn">{category.category_name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;