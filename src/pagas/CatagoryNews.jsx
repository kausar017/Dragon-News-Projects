import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CatagoryNews = () => {

    const data = useLoaderData();
    const { data: news } = data;
    // console.log(news);




    return (
        <>
            <div>
                <h2 className="font-semibold">Dragon News Home</h2>
            </div>

            <div>
                {
                    news.map(singleNews => (
                        <NewsCard key={singleNews._id} News={singleNews}></NewsCard>
                    ))
                }
            </div>
        </>
    );
};

export default CatagoryNews;