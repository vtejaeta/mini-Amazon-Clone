import React from "react";
import Product from "./Product";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="Whirlpool 190 L 2 Star Direct-Cool Single Door Refrigerator (WDE 205 CLS PLUS 2S, Wine Fiesta, Toughened Glass Shelves)"
            price={280.71}
            image="https://m.media-amazon.com/images/I/51lUv9BfsOL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
            id={Math.random()}
          />
          <Product
            title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SL1500_.jpg"
            rating={5}
            price={800}
            id={Math.random()}
          />
        </div>
        <div className="home__row">
          <Product
            title="Reach Air Bike Exercise Cycle With Moving Handles & Adjustable Cushioned Seat (Multi-color)"
            image="https://m.media-amazon.com/images/I/7196JzExPYL._AC_UL480_FMwebp_QL65_.jpg"
            price={104.25}
            rating={2}
            id={Math.random()}
          />
          <Product
            title="The lean startup"
            price={29}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
            id={Math.random()}
          />
          <Product
            image="https://images-eu.ssl-images-amazon.com/images/I/61wKEOt4tjL._AC_US240_FMwebp_QL65_.jpg"
            title={`JBL GO Portable Wireless Bluetooth Speaker with Mic (Orange)`}
            rating={4}
            id={Math.random()}
            price={30.29}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY327_FMwebp_QL65_.jpg"
            price={1094.98}
            rating={5}
            id={Math.random()}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
