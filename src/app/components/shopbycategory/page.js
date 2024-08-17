 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";
import MilkBreadimg from "../../../../public/marasImg/milk2.jpeg"; 
import ChoklatesImg from "../../../../public/category/choklates.jpeg";  
import giftsImg from "../../../../public/category/gifts.jpeg"; 
import helperImg from "../../../../public/marasImg/helper.jpg";
import cabImg from "../../../../public/marasImg/cabimg.png";
import hotelImg from "../../../../public/marasImg/hotelimg.png";  
import tripImg from "../../../../public/marasImg/planetrip.jpeg";  
import computerImg from "../../../../public/category/computerImg.jpeg";
import schoolImg from "../../../../public/category/schoolimage.jpeg";  
import groceryImg from "../../../../public/category/grocery.png"



const ShopByCategory = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff",marginTop:'20px' }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
          <div className="round_container">
            <Link href="/">
              <Image
                src={cabImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cab Booking</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={helperImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Attendante</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/">
              <Image
                src={hotelImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Hotel Booking</p>
            </Link>
          </div>

    
          <div className="round_container">
            <Link href="/">
              <Image
                src={tripImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Plan a Trip</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={computerImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Rental Computer</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={schoolImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">School</p>
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
                src={MilkBreadimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Milk & Bread</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={groceryImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Grocery</p>
            </Link>
          </div>
          -
       
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
