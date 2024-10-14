import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import RoundCard from '../Card/RoundCard'
import MainFooter from "../Footer/MainFooter"
import axios from 'axios'

function Electronics() {

  let [product , setProduct] = useState([])

  useEffect(()=>{
    let data = async()=>{
      let res =await axios.post(" https://alphasilver.productsalphawizz.com/app/v1/api/get_categories")
      let data = res.data.data.find(value=>value.id==3)
      setProduct(data.children)
    }
    data()
  },[])
  return (
    <>
    <Header name = "Electronics"/>
    <div className='main'>
      <div className='box-first' >
        <div className='box-first-div'>
        ELECTONICS CATEGORY
        </div>
        <div className='box-second'>
          {
            product.map((value)=>(
            <RoundCard product= {value}/>
            ))
          }
        </div>
      </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Electronics