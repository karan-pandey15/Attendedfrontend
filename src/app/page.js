 
import Banner2 from "./components/banner2/page";  
import Footer from "./components/footer/page"; 
import Navbar from "./components/navbar/page"; 
import ShopByCategory from "./components/shopbycategory/page"  
import ShopByCategoryFour from "./components/shopCategoryFour/page";
import ShopByCategoryThree from "./components/shopCategoryThree/page";
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


      <div>
        <ShopByCategoryThree />
      </div>


      <div>
      <Banner2 />
      </div>


      <div>
        <ShopByCategoryFour />
      </div>
      
      <div style={{height:'100px'}} >

      </div>
     
      <div>
        <Footer />
      </div>
    </main>
  );
}
