import { useLoaderData } from "react-router-dom";

const CatagoryNews = () => {

    const data =useLoaderData();
    console.log(data.data);
    


    return (
        <div>
            <h1>total Data: {data.data.length}</h1>
        </div>
    );
};

export default CatagoryNews;