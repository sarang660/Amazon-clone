import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/June/M21/Mal/3000x1200_Hero-Tall_JPN._CB664880927_.jpg"
        alt="imagee"
      />
      <div className="home_row">
        <Product
          id="1"
          title="Tommy Travel Gear 24.29 Ltrs Red Laptop Backpack (TH/BIKOL04CRO)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/910WzpbBdNL._SL1500_.jpg"
        />
        <Product
          id="2"
          title="New Apple iPhone 12 (128GB) - Black"
          price={500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="redmi note 10 pro"
          price={100}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51zpl79tr1L._SL1050_.jpg"
        />
        <Product
          id="4"
          title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg"
        />
        <Product
          id="5"
          title="ESNINO Boy's Cotton Round Neck Sweatshirt"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91hwipAdZ5L._UL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="MSI 23.8-inch PRO MP241 Professional Monitor Full HD, Anti-Glare, Display Kit & VESA Mount Support, Designed for The Streaming & On-line Video in..."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71bZyqtHH6L._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
