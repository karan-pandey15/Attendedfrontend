 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";
import MilkBreadimg from "../../../../public/marasImg/milk2.jpeg";
import groceryimg from "../../../../public/category/grocery.png";
import fruitvegeimg from "../../../../public/category/fruitvege.png"; 
import teacoffe from "../../../../public/category/teacoffe.png";  
import hotelimg from "../../../../public/category/bevrages.png"; 
import breakfast from "../../../../public/category/breakfast.png"; 
const ShopByCategory = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
          <div className="round_container">
            <Link href="/pages/categoryPrd/milk">
              <Image
                src={MilkBreadimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">MILK&Bread</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={groceryimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Grocery</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={breakfast}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Breakfast</p>
            </Link>
          </div>

    
          <div className="round_container">
            <Link href="/">
              <Image
                src={teacoffe}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Tea&Coffe</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={fruitvegeimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Fruit&Vege</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={hotelimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">beverage</p>
            </Link>
          </div>

       
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
