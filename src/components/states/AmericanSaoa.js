import React, { useState } from 'react'
import charger from '../../images/charger.jpg'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useParams } from 'react-router-dom';
import carsInfo from '../carsInfo';
function California() {
  const {id} = useParams();
  let car = carsInfo.cars.filter(item => item.id === id)[0]
  console.log(car)
  const images_1 = car.img1;
  const images_2 = car.img2;
  const images_3 = car.img3;
  const images_4 = car.img4;
  const images_5 = car.img5;
  const images_6 = car.img6? car.img6 : '';
  const images_7 = car.img7? car.img7 : '';
  const images_8 = car.img8? car.img8 : '';
  const images_9 = car.img9? car.img9 : '';
  const images_10 = car.img10? car.img10 : '';
  const images_11 = car.img11? car.img11 : '';
  const images_12 = car.img12? car.img12 : '';
  const images_13 = car.img13? car.img13 : '';
  const images_14 = car.img14? car.img14 : '';

  const imgs=[
    {id:0,value:`${images_1}`},
    {id:1,value:`${images_2}`},
    {id:2,value:`${images_3}`},
    {id:3,value:`${images_4}`},
    {id:4,value:`${images_5}`},
    {id:5,value:`${images_6}`},
    {id:6,value:`${images_7}`},
    {id:7,value:`${images_8}`},
    {id:8,value:`${images_9}`},
    {id:9,value:`${images_10}`},
    {id:10,value:`${images_11}`},
    {id:11,value:`${images_12}`},
    {id:12,value:`${images_13}`},
    {id:13,value:`${images_14}`},

  
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="container">

      <h2>{car.name}:&nbsp;&nbsp;{car.id}</h2>
      <div className="main">
      <img src={wordData.value} className='main_img'/> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":"unclicked"} src={data.value? data.value :null} 
          onClick={()=>handleClick(i)} height={data.value? '100': '0'} width="150" />
        </div>
        )}
      </div>
    </div>
    <hr></hr>


   
  
      <div className='description'>
        <p>{car.description}</p>
     <div className='spec-info'>
     <li><strong>Mileage: &nbsp;&nbsp;</strong>{car.mileage}</li>
      <li><strong>Location:&nbsp;&nbsp;</strong>{car.location}</li>
      <li><strong>Color:&nbsp;&nbsp;</strong>{car.colora}</li>
      <li><strong>Year:&nbsp;&nbsp;</strong>{car.year}</li>
     </div>
      </div>


      </div>
 
  )
}

export default California