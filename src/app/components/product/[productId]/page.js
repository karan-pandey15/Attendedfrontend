// "use client";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "@/Redux/Cartslice";
// import { PopularNearYouProducts } from "../../popularnearyou/popularnearyou_products";
// import Image from "next/image";
// import "./product.css";
// import TopNavbar from "../../topnavbar/page";
// import Navbar from "../../navbar/page";
// import Footer from "../../footer/page";

// const ProductPage = () => {
//   const pathname = usePathname();
//   const productId = pathname.split("/").pop();

//   const product = PopularNearYouProducts.find(
//     (product) => product.productId === productId
//   );

//   const [mainImage, setMainImage] = useState(product?.productImage);
//   const [quantity, setQuantity] = useState(1);

//   const dispatch = useDispatch();

//   // const handleadd =(product)=>{
//   //    dispatch(add(product));
//   // }

//   const handleadd = (product) => {
//     dispatch(add({ ...product, quantity }));
//   };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <>
//       <TopNavbar />
//       <Navbar />
//       <div className="w-full flex justify-center items-center">
//         <div className="flex justify-evenly w-[80%] py-8 product-page-main_div">
//           <div style={{ width: "40%" }} className="product_page_img_main_div">
//             <div
//               className="product_main_image"
//               style={{ width: "280px", height: "380px" }}
//             >
//               <Image
//                 style={{ width: "100%", height: "100%" }}
//                 src={mainImage}
//                 alt={product.productName}
//               />
//             </div>
//             <div className="flex justify-center items-center py-4">
//               {product.subImages.map((subImage, index) => (
//                 <div key={index} className="mx-2 cursor-pointer">
//                   <Image
//                     src={subImage.img}
//                     alt={`${product.productName} sub-image ${index + 1}`}
//                     onClick={() => setMainImage(subImage.img)}
//                     style={{ width: "100px", height: "70px" }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-[40%] product_page_text_main_div">
//             <h1 className="text-2xl font-medium">{product.productName}</h1>
//             <p className="py-2">{product.description}</p>
//             <p className="py-2 text-xl">{product.rating}</p>
//             <h4 className="text-xl font-semibold py-2">₹{product.price}</h4>
//             <div className="py-2">
//               <label className="font-medium text-xl">Qty:</label>
//               <input
//                 type="number"
//                 style={{
//                   border: "1px solid gray",
//                   padding: "5px 8px",
//                   width: "100px",
//                   borderRadius: "4px",
//                 }}
//                 value={quantity}
//                 onChange={(e) => setQuantity(parseInt(e.target.value))}
//                 className="mx-4"
//               />
//             </div>
//             <button
//               className="bg-yellow-500 py-2 px-6 rounded-md mt-2 hover:bg-yellow-600 duration-300"
//               onClick={() => handleadd(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductPage;

"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";
import { PopularNearYouProducts } from "../../popularnearyou/popularnearyou_products";
import Image from "next/image";
import "./product.css";
import TopNavbar from "../../topnavbar/page";
import Navbar from "../../navbar/page";
import Footer from "../../footer/page";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductPage = () => {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  const product = PopularNearYouProducts.find(
    (product) => product.productId === productId
  );

  const [mainImage, setMainImage] = useState(product?.productImage);
  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
      </div>
    );
  };

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add({ ...product, quantity }));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="product-page-container">
        <div className="product-page-content">
          <div className="product-images">
            <div className="main-image">
              <Image
                src={mainImage}
                alt={product.productName}
                layout="responsive"
                width={280}
                height={350}
              />
            </div>
            <div className="sub-images">
              {product.subImages.map((subImage, index) => (
                <div
                  key={index}
                  className="sub-image"
                  onClick={() => setMainImage(subImage.img)}
                >
                  <Image
                    src={subImage.img}
                    alt={`${product.productName} sub-image ${index + 1}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product-details">
            <h1>{product.productName}</h1>
            <p className="product-price">
              <span className="current-price">₹{product.price}</span>
              <span className="original-price">₹{product.originalPrice}</span>
            </p>
            <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              {renderStars(product.rating)}
            </p>
            <p className="product-description">{product.description}</p>
            <div className="quantity">
              <label>Qty:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
            <button onClick={() => handleAdd(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
