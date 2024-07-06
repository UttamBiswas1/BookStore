import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from './Cards';

const FreeBook = () => {
  const filterData=list.filter((data)=>data.category==="free")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-bold pb-2 text-xl'>Free Books</h1>
      <p>A free book is the root of a tree of potential adaptations, translations, and entirely new books that branch out from the original. </p>
    </div>

    <div className='ml-12 mr-12'>
      <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default FreeBook
