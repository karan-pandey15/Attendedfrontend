import Banner1 from "./components/banner1/page";
import Banner2 from "./components/banner2/page"; 
import Banner4 from "./components/banner4/page"; 
import Footer from "./components/footer/page"; 
import Navbar from "./components/navbar/page"; 
import ShopByCategory from "./components/shopbycategory/page"  
import TopNavbar from "./components/topnavbar/page"; 
export default function Home() {
  return (
    <main>
      <TopNavbar />
      <div>
        <Navbar />
      </div> 
      <div>
        <Banner2 />
      </div> 
      <div>
        <ShopByCategory />
      </div>
      <div>
      <Banner2 />
      </div>
      {/* <div>
        <ShopByCategory />
      </div>
       */}
     
      <div>
        <Footer />
      </div>
    </main>
  );
}
