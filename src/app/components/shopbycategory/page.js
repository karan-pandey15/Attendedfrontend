 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Categofystyle.css";
import FruitsVegetables from "../../../../public/marasImg/milk2.jpeg";
import EggsMeatFish from "../../../../public/marasImg/bread.jpeg";
import RiceAttaDal from "../../../../public/Rice-Atta--Dal.jpg";
import OilMasalaSauces from "../../../../public/Oil_Masala__Sauces._QL30_.jpg";
import SnacksBiscuits from "../../../../public/Snacks__Biscuits_2.jpg";
import InstantFood from "../../../../public/Instant-Food_new.jpg";

import DairyBread from "../../../../public/Dairy__Bread._QL30_.jpg";
import ChocolatesIcecream from "../../../../public/SF_SBC_Tiles_MOB_400x420_new-copy_1.jpg";
import BreakfastFood from "../../../../public/Breakfast_Food_._QL30_.jpg";
import TeaCoffee from "../../../../public/Tea__coffee._QL30_.jpg";
import BathBody from "../../../../public/Bath__Body._QL30_.jpg";
import cabs from "../../../../public/marasImg/cabs.jpg";
import helper from "../../../../public/marasImg/helper.jpg";
import hotelimg from "../../../../public/marasImg/hotelimg.png";
import trip from "../../../../public/marasImg/planetrip.jpeg";
const ShopByCategory = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff" }}>
        {/* <h1 className="four_heading_div">Explore by Category</h1> */}
        <div className="four_div_container">
          <div className="round_container">
            <Link href="/pages/beddisplay">
              <Image
                src={FruitsVegetables}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">MILK</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/sofadisplay">
              <Image
                src={EggsMeatFish}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">BREAD</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/tabledisplay">
              <Image
                src={RiceAttaDal}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Rice Daal</p>
            </Link>
          </div>

    
          <div className="round_container">
            <Link href="/pages/kafsardisplay">
              <Image
                src={SnacksBiscuits}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Snacks Biscuits</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/pages/chairdisplay">
              <Image
                src={cabs}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Cab</p>
            </Link>
          </div>


          <div className="round_container">
            <Link href="/pages/wardrobedisplay">
              <Image
                src={hotelimg}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Book Hotel</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/kitchendisplay">
              <Image
                src={helper}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Attendant</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/windowdisplay">
              <Image
                src={trip}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Plan a Trip</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/pillingdisplay">
              <Image
                src={BreakfastFood}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container"> Breakfast Food</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/doordisplay">
              <Image src={TeaCoffee} className="round_contaner_img" alt="img" />
              <p className="txt_container">Tea Coffee</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/mandirdisplay">
              <Image src={BathBody} className="round_contaner_img" alt="img" />
              <p className="txt_container">Bath Body</p>
            </Link>
          </div>

          <div className="round_container">
            <Link href="/pages/kitchendisplay">
              <Image
                src={DairyBread}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Dairy Bread</p>
            </Link>
          </div>

       
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
