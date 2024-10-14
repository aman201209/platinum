import React from 'react'
import Slider from '../Slider/Slider'
import CategorySlider from '../Slider/CategorySlider'
import NewProduct from '../New Product/NewProduct'
import MainFooter from '../Footer/MainFooter'

function Home() {
  return (
    <div>
        <div>
            <Slider/>
            <CategorySlider/>
            <NewProduct/>
            <MainFooter/>

        </div>
    </div>
  )
}

export default Home