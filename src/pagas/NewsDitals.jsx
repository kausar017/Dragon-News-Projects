import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/LayOutComponents/RightNavbar";
import { BsArrowLeft } from "react-icons/bs";

const NewsDitals = () => {

    const data = useLoaderData();
    const newsDitals = data.data[0];
    console.log(newsDitals);



    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="container mx-auto grid md:grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h1 className="font-semibold mb-3 ml-3">Dragon News</h1>
                    <div>
                        <div className="card bg-base-100 border-2 rounded-md mx-3">
                            <figure className="">
                                <img

                                    src={newsDitals.image_url}
                                    alt="Shoes"
                                    className=" p-10 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{newsDitals.title}</h2>
                                <p>{newsDitals.details}</p>
                                <div className="card-actions">
                                    <Link to={'/'} className="btn rounded-none bg-[#D72050] text-white"><BsArrowLeft></BsArrowLeft>  All news in this category</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDitals;