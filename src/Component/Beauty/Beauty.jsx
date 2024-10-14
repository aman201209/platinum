import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import RoundCard from '../Card/RoundCard'
import MainFooter from "../Footer/MainFooter"
import axios from 'axios'

function Beauty() {

  let [product , setProduct] = useState([])

  useEffect(()=>{
    let data = async()=>{
      let res =await axios.post(" https://alphasilver.productsalphawizz.com/app/v1/api/get_categories")
      let data = res.data.data.find(value=>value.id==9)
      setProduct(data.children)
    }
    data()
  },[])

  return (
    <>
    <Header name = "Beauty & Personal Care"/>
    <div className='main'>
      <div className='box-first' >
        <div className='box-first-div'>
          BEAUTY & PERSONAL CARE CATEGORY
        </div>
        <div className='box-second'>
          {
            product.map((value)=>(
              <RoundCard product={value}/>

            ))
          }
        </div>
      </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Beauty