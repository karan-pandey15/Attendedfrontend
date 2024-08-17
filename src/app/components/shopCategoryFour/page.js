 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";

import ChoklatesImg from "../../../../public/category/choklates.jpeg"; 
import bodycare from "../../../../public/category/bodycare.jpeg"; 
import cosmeticImg from "../../../../public/category/cosmeticimg.jpeg"; 
import fashionImg from "../../../../public/category/fashion.jpeg"; 
import tripImg from "../../../../public/marasImg/planetrip.jpeg";  

const ShopByCategoryFour = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
      

          <div className="round_container">
            <Link href="/">
              <Image
                src={ChoklatesImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Chocolates & Candies</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={bodycare}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Bath & Body</p>
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
                src={cosmeticImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cosmetics</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={tripImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Plan A Trip</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={tripImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Flight Booking</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategoryFour;
