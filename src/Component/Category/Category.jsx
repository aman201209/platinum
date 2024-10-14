import React, { useEffect, useState } from 'react'
import RoundCard from '../Card/RoundCard'
import axios from 'axios';
import "./Category.css"
import { useNavigate } from 'react-router-dom';

function Category() {

    let [product , setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_categories');
            setProduct(response.data.data);
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

  return (
    <div className='category'>
        <div className='category-div'>
            Category
        </div>
        <hr style={{width:"95%"}}/>
        <div className='category_map'>
            {
                product.map((value)=>{
                    return(
                        <RoundCard  product={value} navigate ={()=>{handleClick(value.id)}}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Category