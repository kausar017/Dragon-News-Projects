import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayOutComponents/LeftNavbar";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 text-center gap-3">
                <aside className="left col-span-3"><LeftNavbar></LeftNavbar> </aside>
                <section className="col-span-6">Main content</section>
                <aside className="right col-span-3">Right Navber</aside>
            </main>
        </div>
    );
};

export default HomeLayout;