import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import "./Clothing.css"
import MainFooter from "../Footer/MainFooter"
import RoundCard from '../Card/RoundCard'
import axios from 'axios'

function Clothing() {

  let [product , setProduct] = useState([])

  useEffect(()=>{
    let data = async()=>{
      let res =await axios.post(" https://alphasilver.productsalphawizz.com/app/v1/api/get_categories")
      let data = res.data.data.find(value=>value.id==1)
      setProduct(data.children)
    }
    data()
  },[])

  return (
    <>
    <Header name="CLOTHING"/>
    <div className='main'>
      <div className='box-first' >
        <div className='box-first-div'>
          CLOTHING CATEGORY
        </div>
        <div className='box-second'>
          {
            product.map((value)=>(
              <RoundCard product = {value}/>
            ))
          }
          
        </div>
      </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Clothing