import React from "react";
import Navbar from "./navbar/Navbar";
import img from "../../assets/logo/zyro-image.png";
import fotoHeader from "../../assets/logo/foto-header.jpg";
import Carrucel from "./carrucel/Carrucel";
import "./style.css";
export default function () {
  const images = [
    {
      url: "https://th.bing.com/th/id/OIP.cQE_lp1VecHbP9f8tcTkRAHaE8?pid=ImgDet&rs=1",
    },
    {
      url: "https://media.puntal.com.ar/p/6701a882a89eef2dc5c9f825bc91e78a/adjuntos/270/imagenes/001/101/0001101586/20-09-05-mqs-miranda-radio-portalesjpg.jpg",
    },
    {
      url: "https://th.bing.com/th/id/R.f4c7e8db9ac425318778644dc3d1e43e?rik=yG%2f0jp4f83qw9A&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='logo-container'>
          <img className='logo' src={img} alt='Baobabs Logo' />
          <div className='logo-text'>
            <h1>Baobabs</h1>
            <hr className='divider' />
            <h2 className='club-text'>Club de teatro</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 *    <div className='carousel-container'>
          <Carrucel images={images} />
        </div>
 */
