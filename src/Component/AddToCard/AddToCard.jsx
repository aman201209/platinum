import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeData, removeQuantity } from '../../redux/slice'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


function AddToCard() {

    const productData = useSelector(state => state.addtocard)
    const dispatch = useDispatch()
    let [price, setPrice] = useState("")
    const navigation = useNavigate()
    let [product, setProduct] = useState(false)
    let [quantity, setQuantity] = useState(false)

    useEffect(() => {
        const totalPrice = productData.reduce((count, product) => count + (product.min_max_price.min_price*product.quantity_step_size), 0);
        setPrice(totalPrice.toFixed(2));
        if (productData.length === 0) {
            setProduct(true)
        }
    }, []);
    useEffect(() => {
        const quantity = productData.reduce((count, product) => {
            const stepSize = parseFloat(product.quantity_step_size); // Convert string to number
            return count + (isNaN(stepSize) ? 0 : stepSize); // Handle NaN cases
        }, 0);
        setQuantity(quantity);


    }, []);



    const handleClick = () => {
        if (localStorage.getItem("token")) {
            toast.success("wait yar")
        } 
    }

    const handleIncrease = (id) => {
        dispatch(addQuantity(id));
        window.location.reload()
    };
    
    const handleDecrease = (id) => {
        dispatch(removeQuantity(id));
        window.location.reload()
    };
    console.log(productData)
    return (
        <>
            {
                product ? (
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center",marginTop:"50px" }}>
                        <div style={{ width: "90%", height: "600px", marginTop: "40px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <div style={{ fontSize: "35px", fontWeight: "bold", color: "red", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                Missing Cart Items
                                <Link style={{ textDecoration: "none" }} to={"/"}>Add Items</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", gap: "30px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "60%", marginTop: "100px", gap: "30px", backgroundColor: "white", height: "fitContent", borderRadius: "20px",marginRight:"25%", marginBottom:"100px"}}>
                            {
                                productData.map((value) => {
                                    return (
                                        <React.Fragment key={value.id}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#9990", width: "100%", height: "250px" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "row", width: "100%", height: "200px", gap: "5%" }}>
                                                    <div
                                                        style={{
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            width: "25%", height: "90%",
                                                        }}
                                                    >
                                                        <img src={value.image} alt="hello" style={{ width: "90%", height: "100%" }} /></div>
                                                    <div
                                                        style={{ width: "45%", height: "100%", display: "flex", flexDirection: "column", }}
                                                    >
                                                        <div style={{ fontSize: "33px" }}>{value.title}</div>
                                                        <div style={{ fontSize: "25px", marginTop: "10px", color: "#999" }}>Category:-{value.category}</div>
                                                        <div style={{ fontSize: "25px", marginTop: "10px", }}>{(value.min_max_price.min_price*value.quantity_step_size).toFixed(2)}</div>
                                                    </div>
                                                    <div style={{ width: "30%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "50px" }}>
                                                        <button style={{
                                                            width: "50%", height: "20%", borderStyle: "none", marginTop: "15%", borderRadius: "20px", backgroundColor: "#fbb72c",
                                                            fontSize: "20px", fontWeight: "bold"
                                                        }}
                                                            onClick={() => {
                                                                dispatch(removeData(value.id))
                                                                window.location.reload()
                                                            }}
                                                        >REMOVE</button>
                                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                                            <button style={{ width: "30px", height: "30px", backgroundColor: "white", borderRadius: "100px", display: "flex", alignItems: "center", justifyContent: "center", }} onClick={() => handleDecrease(value.id)}>
                                                                <RemoveIcon />
                                                            </button>
                                                            <span style={{ fontSize: "30px", width: "70px", height: "30px", border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "5px" }} >{value.quantity_step_size}</span>
                                                            <button style={{ width: "30px", height: "30px", backgroundColor: "white", borderRadius: "100px", display: "flex", alignItems: "center", justifyContent: "center", }} onClick={() => handleIncrease(value.id)}><AddIcon /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{ width: "100%" }} />
                                        </React.Fragment>

                                    )
                                })
                            }
                            <div style={{ width:"60%",display:"flex",justifyContent:"end",position:"fixed",top:"85%" ,backdropFilter:"blur(60px)",}}>
                                <button style={{width: "300px", height: "60px", borderStyle: "none", borderRadius: "5px", backgroundColor: "#3357fc", fontSize: "25px", color: "White", marginRight: "5%", marginBottom: "30px",marginTop:"30px" }}
                                    onClick={handleClick}>Place Order</button>
                            </div>
                        </div>
                        <div style={{ width: "25%", backgroundColor: "#9995", height: "500px", marginTop: "100px", marginBottom: "100px", borderRadius: "20px",position:"fixed",left:"72%",top:"15%" }}>
                            <div style={{ margin: "20px", fontSize: "25px", fontWeight: "bold", color: "#999" }}>
                                Price Details
                            </div>
                            <hr />
                            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} >
                                <div style={{ display: "flex", flexDirection: "row", gap: "20%" }}>
                                    <div style={{ fontSize: "22px", color: "#333333", width: "50%" }}>Price({quantity} items)</div>
                                    <div style={{ width: "50%" }}><span style={{ fontSize: "22px", color: "#999" }}>{price}</span></div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "20%" }}>
                                    <div style={{ fontSize: "22px", color: "#333333", width: "50%" }}>Discount</div>
                                    <div style={{ width: "50%" }}><span style={{ fontSize: "22px", color: "#999" }}>Null</span></div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "20%" }}>
                                    <div style={{ fontSize: "22px", color: "#333333", width: "50%" }}>Plateform Fees </div>
                                    <div style={{ width: "50%" }}><span style={{ fontSize: "22px", color: "#999" }}>Null</span></div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "20%" }}>
                                    <div style={{ fontSize: "22px", color: "#333333", width: "50%" }}>Delivery Charges</div>
                                    <div style={{ width: "50%" }}><span style={{ fontSize: "22px", color: "#999" }}>Free</span></div>
                                </div>
                            </div>
                            <hr />
                            <div style={{ display: "flex", flexDirection: "row", gap: "20%", marginTop: "20px", marginBottom: "20px" }}>
                                <div style={{ fontSize: "22px", color: "#333333", width: "50%", fontWeight: "bold" }}>Total Amount</div>
                                <div style={{ width: "50%" }}><span style={{ fontSize: "22px", color: "#333333", width: "50%", fontWeight: "bold" }}>{price}</span></div>
                            </div>
                            <hr />

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default AddToCard