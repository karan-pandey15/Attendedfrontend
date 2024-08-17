 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";
 
import fruitvegeimg from "../../../../public/category/fruitvege.png"; 
import teacoffe from "../../../../public/category/teacoffe.png";   
import breakfast from "../../../../public/category/breakfast.png";  
import BiscuitsImg from "../../../../public/category/biscuit.png";  
import dailyPrdImg from "../../../../public/category/dailyPrd.jpeg"; 
import bodycare from "../../../../public/category/bodycare.jpeg";  
import computerImg from "../../../../public/category/computerImg.jpeg";
import schoolImg from "../../../../public/category/schoolimage.jpeg";  



const ShopByCategoryThree = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
          <div className="round_container">
            <Link href="/pages/categoryPrd/milk">
              <Image
                src={teacoffe}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Tea & Coffe</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={breakfast}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Healthy Breakfast</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={BiscuitsImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Snacs & Namkeens</p>
            </Link>
          </div>

    
          <div className="round_container">
            <Link href="/">
              <Image
                src={BiscuitsImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Biscuit & Cake</p>
            </Link>
          </div>


          <div className="round_container">
          <Link href="/pages/categoryPrd/schoolcart">
              <Image
                src={schoolImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Soup & Sasuage</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={dailyPrdImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Drink & Beverage</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={fruitvegeimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Vegetables & Salads</p>
            </Link>
          </div>


          <div className="round_container">
          <Link href="/pages/categoryPrd/schoolcart">
              <Image
                src={bodycare}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cleaning Products</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={computerImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Office Accessories</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategoryThree;
