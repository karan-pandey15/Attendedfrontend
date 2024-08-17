 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";


import dailyPrdImg from "../../../../public/category/dailyPrd.jpeg"; 
import bodycare from "../../../../public/category/bodycare.jpeg"; 
import cosmeticImg from "../../../../public/category/cosmeticimg.jpeg"; 
import fashionImg from "../../../../public/category/fashion.jpeg"; 
import healtchCareImg from "../../../../public/category/healtchCareImg.jpeg"; 
import giftsImg from "../../../../public/category/gifts.jpeg"; 




const ShopByCategoryFour = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
      

          <div className="round_container">
            <Link href="/">
              <Image
                src={bodycare}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">boyycare</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={cosmeticImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cosmetic</p>
            </Link>
          </div>

     


          <div className="round_container">
            <Link href="/">
              <Image
                src={fashionImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Fashion</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={healtchCareImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Health Care</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={giftsImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Gifts</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/categoryPrd/milk">
              <Image
                src={dailyPrdImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Daily Products</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategoryFour;
