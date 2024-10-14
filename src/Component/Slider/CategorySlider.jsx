import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategorySlider.css'; 
import RoundCart from "../Card/RoundCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {  useNavigate } from 'react-router-dom';



const CategorySlider = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_categories');
        setProducts(response.data.data);
        console.log(response.data, "hello");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick=(id)=>{
    console.log(id)
    if(id==1){
      navigate("/clothing")
      console.log("hello")
    }else if(id==3){
      navigate("/electonics")
    }else if(id==6){
      navigate("/kitchen")
    }else if(id==13){
      navigate("/toys")
    }else if(id==16){
      navigate("/grocery")
    }else if(id==20){
      navigate("/books")
    }else if(id==22){
      navigate("/")
    }else if(id==24){
      navigate("/")
    }else if(id==26){
      navigate("/")
    }else if(id==28){
      navigate("/")
    }else if(id==33){
      navigate("/")
    }else if(id==36){
      navigate("/")
    }else if(id==43){
      navigate("/")
    }else if(id==45){
      navigate("/")
    }else if(id==9){
      navigate("/beauty")
    }
  }



  // console.log(productsToDisplay)

  return (
    <div className="category-slider">
      <div className='category-header'>
        Category
      </div>
      
      <div className="product-container"  >
 <Swiper
 navigation
      spaceBetween={10}
      slidesPerView={7}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
        modules={[Pagination,Autoplay ,Navigation]}
        className="mySwiper text-slate-50"
    >
      {products.map((product) => {
          return(
            <>
           
            <SwiperSlide key={product.id}>
            <button style={{borderStyle:"none", backgroundColor:"transparent"}} onClick={()=>{handleClick(product.id)}}><RoundCart product = {product} /></button>
            </SwiperSlide>
            </>
          )
})}
      
    </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
