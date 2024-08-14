"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { remove, checkout } from "@/Redux/Cartslice";
import Footer from "@/app/components/footer/page";
import TopNavbar from "@/app/components/topnavbar/page";
import Navbar from "@/app/components/navbar/page";
import Link from "next/link";
import CheckoutForm from "./checkoutform/page";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleCheckoutClick = () => {
    setIsCheckingOut(true);
  };

  const handleCancelCheckout = () => {
    setIsCheckingOut(false);
  };

  const handleSubmitCheckout = async (userDetails) => {
    const form = new FormData();

    for (const key in userDetails) {
      form.append(key, userDetails[key]);
    }

    cart.forEach((item, index) => {
      form.append(
        `cart[${index}]`,
        JSON.stringify({
          productId: item.productId,
          productName: item.productName,
          price: item.price,
          quantity: item.quantity,
          productImage: item.productImage,
        })
      );
    });

    form.append("totalPrice", totalPrice);

    try {
      const response = await fetch("http://localhost:5005/api/checkout", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Order submitted successfully");
        dispatch(checkout());
        setIsCheckingOut(false);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <>
        <TopNavbar />
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <h2>Your cart is empty.</h2>
          <Link href="/">
            <button className="bg-blue-500 text-white py-1 mx-4 px-3 rounded-md mt-2 hover:bg-red-600 duration-300">
              Go To Shop
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col w-[90%] sm:w-[80%] py-8 cart-page-main_div">
          {isCheckingOut ? (
            <CheckoutForm
              cart={cart}
              totalPrice={totalPrice}
              onCancel={handleCancelCheckout}
              onSubmit={handleSubmitCheckout}
            />
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-200"
                >
                  <div className="image-container">
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      width={200}
                      height={200}
                      className="product-image"
                    />
                  </div>
                  <div className="flex-1 px-4 text-container">
                    <h2 className="text-xl font-medium">{item.productName}</h2>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Unit Price: ₹{item.price}</p>
                    <p className="text-gray-600">
                      Total Price: ₹{item.price * item.quantity}
                    </p>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-md mt-2 hover:bg-red-600 duration-300"
                      onClick={() => handleRemove(item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row justify-between items-center py-4 mt-4 border-t border-gray-200 total-container">
                <h2 className="text-2xl font-medium">
                  Total Price: ₹{totalPrice}
                </h2>
                <button
                  className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 duration-300"
                  onClick={handleCheckoutClick}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
