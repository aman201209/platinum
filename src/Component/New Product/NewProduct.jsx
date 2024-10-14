import React, { useEffect, useState } from 'react'
import "./NewProduct.css"
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import axios from 'axios';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PublishedWithChangesSharpIcon from '@mui/icons-material/PublishedWithChangesSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import EastSharpIcon from '@mui/icons-material/EastSharp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from "../../redux/slice"
import { toast } from 'react-toastify';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import Marquee from "react-fast-marquee"






function NewProduct() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.addtocard)

    let [newProduct, setNewProduct] = useState([])
    let [product2, setProduct2] = useState([])
    let [product3, setProduct3] = useState([])

    useEffect(() => {
        let product = async () => {
            let res = await axios.post("https://alphasilver.productsalphawizz.com/app/v1/api/get_sections")
            setNewProduct(res.data.data[0].product_details)
            setProduct2(res.data.data[1].product_details)
            setProduct3(res.data.data[2].product_details)
        }

        product()
    }, [])

    const handleClick = (id) => {

        if (localStorage.getItem("token")) {
            dispatch(addData(id))
        } else {
            toast.error("login first")
        }

    }
    const productsToDisplay = Array.isArray(product2) ? product2.slice(0, 5) : [];

    return (
        <div>
            <div className='product'>
                <div className='product-header'>
                    <div className='header-first'>
                        <div className='header-product'>New Product</div>
                        <div className='header-special'>Special</div>
                    </div>
                    <div className='header-view'>
                        View More
                    </div>
                </div>
                <div className="product-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" ,}}>
                        <Marquee pauseOnHover={true}>
                        {
                            newProduct.map((value) => {
                                return (
                                        <div class="product-card">
                                            <div>
                                                <FavoriteBorderSharpIcon style={{ fontSize: '25px', color: "#999", marginLeft: "90%" }} />
                                            </div>
                                            <div class="badge">{value.min_max_price.discount_in_percentage}%Off</div>
                                            <div class="product-tumb">
                                                <img src={value.image} alt="" />
                                            </div>
                                            <div className='product-detail'>
                                                <div className='product-name'>{value.name}</div>
                                                <div className='product-price'>&#8377;{value.min_max_price.min_price}</div>
                                                <div className='product-btn'>
                                                    <button onClick={() => { handleClick(value) }}>
                                                        <AddShoppingCartSharpIcon />Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                        </Marquee>
                </div>
            </div>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                {
                    productsToDisplay.map((value) => {
                        return (
                            <div class="product-card">
                                <div>
                                    <FavoriteBorderSharpIcon style={{ fontSize: '25px', color: "#999", marginLeft: "90%" }} />
                                </div>
                                <div class="badge">{value.min_max_price.discount_in_percentage}%Off</div>
                                <div class="product-tumb">
                                    <img src={value.image} alt="" />
                                </div>
                                <div className='product-detail'>
                                    <div className='product-name'>{value.name}</div>
                                    <div className='product-price'>&#8377; {value.min_max_price.min_price}</div>
                                    <div className='product-btn'>
                                        <button onClick={() => { handleClick(value) }}>
                                            <AddShoppingCartSharpIcon />Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div class="product-card" style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "400px", paddingLeft: "20px" }}>
                    <div className='product-name' style={{ color: "black" }}>Offer</div>
                    <div className='product-price' style={{ color: "#999" }}>Special offer</div>
                    <button style={{ backgroundColor: "white", color: "#49A6A2", fontSize: "18px", fontWeight: "bold", display: "flex", justifyContent: "center", flexDirection: "column", borderStyle: "none" }}>View more</button>
                </div> */}
            </div>
            <div className='product'>
                <div className='product-header'>
                    <div className='header-first'>
                        <div className='header-product'>New One</div>
                        <div className='header-special'>Special Offer</div>
                    </div>
                    <div className='header-view'>
                        View More
                    </div>
                </div>
                {/* Card */}
                <div style={{ width: "100%", display: "flex", marginLeft: "50px" }}>
                    {
                        product3.map((value) => {
                            return (
                                <div class="product-card">
                                    <div>
                                        <FavoriteBorderSharpIcon style={{ fontSize: '25px', color: "#999", marginLeft: "90%" }} />
                                    </div>
                                    <div class="badge">{value.min_max_price.discount_in_percentage}%Off</div>
                                    <div class="product-tumb">
                                        <img src={value.image} alt="" />
                                    </div>
                                    <div className='product-detail'>
                                        <div className='product-name'>{value.name}</div>
                                        <div className='product-price'>&#8377; {value.min_max_price.min_price}</div>
                                        <div className='product-btn'>
                                            <button onClick={() => { handleClick(value) }}>
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
            <div className='product-footer'>
                <div className='product-footer-first'>
                    <div className='footer-mobile'>
                        <img src='https://alphasilver.productsalphawizz.com/uploads/booking.png' alt='' />
                    </div>
                    <div className='product-footer-div'>
                        <div className='product-footer-span'>Download App Now !</div>
                        <div className='product-footer-p'>Use code WELCOMEMMT and get FLAT 12% OFF* on your first domestic flight booking</div>
                    </div>
                    <div className='product-footer-google'>
                        <div className='footer-google'><img src="https://jetsetterindia.com/uploads/appstore/appstore-image.png" alt="" /></div>
                        <div className='footer-google'><img src="https://jetsetterindia.com/uploads/appstore/playstore-image.png" alt="" /></div>
                    </div>
                    <div className='footer-barcode'>
                        <img src="https://jetsetterindia.com/uploads/appstore/QRCodeDT_QR-code.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#49A6A2", width: "100%", height: "170px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='footer-footer'>
                    <div>
                        <LocalShippingOutlinedIcon style={{ fontSize: "70px" }} />
                    </div>
                    <div>
                        <h1>Fast Shipping</h1>
                        <p>Fast Shipping at your door step.</p>
                    </div>
                </div>
                <div className='footer-footer'>
                    <div>
                        <PublishedWithChangesSharpIcon style={{ fontSize: "70px" }} />
                    </div>
                    <div>
                        <h1>Free Returns</h1>
                        <p>Free return if products are damaged.</p>
                    </div>
                </div>
                <div className='footer-footer'>
                    <div>
                        <SupportAgentSharpIcon style={{ fontSize: "70px" }} />
                    </div>
                    <div>
                        <h1>Support 24/7</h1>
                        <p>24/7 and 365 days support is available.</p>
                    </div>
                </div>
                <div className='footer-footer'>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", fontSize: "25px", fontWeight: "bold" }}>
                        <EastSharpIcon style={{ fontSize: "50px" }} />Seller Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct