import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import RoundCard from '../Card/RoundCard'
import MainFooter from "../Footer/MainFooter"
import axios from 'axios'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useDispatch } from 'react-redux'
import { addData } from '../../redux/slice'
import { toast } from 'react-toastify'

function Grocery() {

  const dispatch = useDispatch()

  let [product , setProduct] = useState([])

  useEffect(()=>{
    let data = async()=>{
      let res =await axios.post(" https://alphasilver.productsalphawizz.com/app/v1/api/get_sections")
      let data = res.data.data.find(value=>value.categories==16)
      setProduct(data.product_details)
      // setProduct(res.data.data[0].product_details)
    }
    data()
  },[])


  const handleClick = (id) => {

    if (localStorage.getItem("token")) {
        dispatch(addData(id))
    } else {
        toast.error("login first")
    }

}
console.log(product,"helllo")
  return (
    <>
    <Header name = "Grocery & Gourmet Food"/>
    <div className='main'>
      <div className='box-first' >
        <div className='box-first-div' style={{}}>
        Products
        </div>
        <div className='box-second' style={{flexWrap:"wrap" ,gap:"30px" ,margin:"10px 0px 50px 0px",boxShadow:"none"}}>
          {
                product.map((value)=>{
                    return(
                        <div class="product-card" style={{width:"350px"}}>
                    <div class="badge">{value.min_max_price.discount_in_percentage}%Off</div>
                    <div class="product-tumb">
                        <img src={value.image} alt="" />
                    </div>
                    <div className='product-detail'>
                        <div className='product-name'>{value.name}</div>
                        <div className='product-price'>&#8377; {value.min_max_price.min_price}</div>
                        <div className='product-btn'>
                            <button onClick={()=>handleClick(value)}>
                                <AddShoppingCartSharpIcon />Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                    )
                })
               }
        </div>
      </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Grocery