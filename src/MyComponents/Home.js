import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Home_Private_Label/XCM_Manual_1347286_1770207_IN_in_gw_pc_tallhero_2x_in_en_3956573_1500x600_1X_en_IN._CB662959580_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product 
          id='1234'
          title='Wings of Fire: An Autobiography of Abdul Kalam '
          price={100}
          image="https://images-eu.ssl-images-amazon.com/images/I/51wbVQTpTgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5}/>

          <Product 
          id='26745'
          title='Learning How to Fly: Life Lessons for the Youth
          by A.P.J. Abdul Kalam  '
          price={50}
          image="https://images-eu.ssl-images-amazon.com/images/I/415xfYGetCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={4}/>
        </div>
        <div className="home__row">
          <Product 
          id='34234243'
          title='Long Walk To Freedom
          by Nelson Mandela'
          price={70}
          image="https://m.media-amazon.com/images/I/71TVXcNC-jL._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}/>

          <Product 
          id='443432'
          title='Jonathan Livingston Seagull: A Story Paperback – Illustrated, 17 October 2005
          by Richard Bach'
          price={50}
          image="https://images-eu.ssl-images-amazon.com/images/I/41n8UosASDL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={4}/>

          <Product 
          id='587865'
          title="Man's Search For Meaning: The classic tribute to hope from the Holocaust"
          price={60}
          image="https://images-eu.ssl-images-amazon.com/images/I/41ZgK6u73qL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5}/>
        </div>
        <div className="home__row">
            <Product 
            id='65463'
            title='Onida 80 cm (32 inches) HD Ready Smart LED Fire TV 32HIF1 (Black) (2021 Model) | Voice Remote with Alexa'
            price={150}
            image="https://m.media-amazon.com/images/I/71AyC+3HfYL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
