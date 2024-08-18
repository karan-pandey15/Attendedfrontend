 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";
import MilkBreadimg from "../../../../public/marasImg/milk2.jpeg"; 
import helperImg from "../../../../public/marasImg/helper.jpg";
import cabImg from "../../../../public/marasImg/cabimg.png";
import schoolImg from "../../../../public/category/schoolimage.jpeg";  
import HealthyFoodImg from "../../../../public/category/healthyfood.jpeg";  
import pureDairyImg from "../../../../public/category/dairyprdimg.jpeg";  
import Grocery from "../../../../public/category/grocery.png";  
import computerImg from "../../../../public/category/computerImg.jpeg";  
import potImg from "../../../../public/category/potImg.jpeg";  



import planTripImg from "../../../../public/category/planTripimgg.jpeg";  








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
              <p className="txt_container">Book a Attendante</p>
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
                src={HealthyFoodImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Healthy food</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={pureDairyImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Pure Dairy Product</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={Grocery}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Grocery</p>
            </Link>
          </div>

                <div className="round_container">
            <Link href="/">
              <Image
                src={MilkBreadimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Milk & Bread</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/pages/categoryPrd/milk">
              <Image
                src={computerImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Computer on Rent</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={planTripImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Plan a Trip</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/">
              <Image
                src={potImg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Live Tree & Pot</p>
            </Link>
          </div>
          

        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
