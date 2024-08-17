"use client";

import { useState } from "react";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import "./productform.css";

import Link from "next/link";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length > 5) {
      alert("You can upload a maximum of 5 images at a time.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await fetch("https://api.keeva.in/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created:", data);
        alert("Product added successfully");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImages([]);
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <form className="form_maincontainer" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="MILK">MILK</option>
            <option value="BREAD"></option>
            <option value="GROCERY">TABLE</option>
            <option value="BREAKFAST">ALMARI</option>
            <option value="TEA">TEMPLE</option>
            <option value="COFFE">CHAIR</option>
            <option value="FRUITS">MANDIR</option>
            <option value="VEGETABLES">KAFSAR</option>
            <option value="BEVERAGE">KITCHEN</option>
            <option value="BODYCARE">WARDROBE</option>
            <option value="">WINDOW</option>
            <option value="MODULAR_KITCHEN">MODULAR KITCHEN</option>
            <option value="TV">TV UNIT</option>
            <option value="PILING">PILING</option>
            <option value="DOOR">DOOR</option>
            <option value="COUNTER">COUNTER</option>
            <option value="DEEWAN">DEEWAN</option>
            <option value="PODIUM">PODIUM</option>
            <option value="DRESSING_TABLE">DRESSING TABLE</option>
            <option value="SHOE_RACK">SHOE RACK</option>
            <option value="STOOL">STOOL</option>
            <option value="TAKHTA">TAKHTA</option>
            <option value="TEMPLE">TEMPLE</option>
          </select>
        </div>
        <div>
          <label>Images:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages(Array.from(e.target.files))}
            required
          />
        </div>
        <button className="form_button" type="submit">
          Create Product
        </button>

       <Link href="/pages/viewdeleteproducts" >
          <button style={{background:'#E64040',marginTop:'10px' ,marginBottom:'40px' ,fontWeight:'bold'}}  className="form_button" >
          View&Delete Product
        </button>
       </Link>
      </form>
      <Footer />
    </div>
  );
};

export default ProductForm;