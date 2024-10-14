import React, { useState } from 'react'
import "./Menu.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login/Login';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


function Menu() {
    let [login , setLogin]  = useState(false)
    const data = useSelector(state=>state.addtocard)
  return (
    <>
    {
        login ? (
            <Login onclose ={()=>{setLogin(false)}}/>
        ):(
            <div className='menu-box'>
        <div className='menu-header'>
            <div className='menu-header-first'>
                <div className='menu-header-img'>
                   <Link to="/"> <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/newlogo22.png" alt="Alpha Platinum" /></Link>
                </div>
                <div className='menu-search-box'>
                    <div style={{paddingLeft:"10px"}}>Search for products</div>
                    <div className='menu-search-icon' >< SearchSharpIcon fontSize="inherit" style={{ fontSize: '38px' }}/></div>
                </div>
            </div>
            <div className='menu-header-second'>
            {
                localStorage.getItem("token") ? (
                    <div>
                <button className='menu-header-second-logout' onClick={()=>{setLogin(false)
                    localStorage.removeItem("token")
                    window.location.reload()
                }
                }>LogOut</button>
            </div>
                ):(
                    <div>
                    <button className='menu-header-second-login' onClick={()=>setLogin(true)}>Login</button>
                </div>
                )
            }
                <div className='menu-header-second-heart'>
                    <Link to={"/favorite"}>
                        <FavoriteBorderSharpIcon style={{ fontSize: '30px' ,color:"#49a6a2"}} />
                    </Link>
                </div>
                <div className='menu-header-second-cart'>
                    <Badge badgeContent={data.length} color="primary">
                        <Link to={"/addtocard"}>
                        <AddShoppingCartSharpIcon style={{ fontSize: '30px' ,color:"#49a6a2" }}/>
                        </Link>
                    </Badge>
                </div>
            </div>
        </div>
        <div className='menu-footer'>
            <Link style={{color:"white",textDecoration:"none"}} to={"/category"}><div style={{display:"flex",alignItems:"center",justifyContent:"cente",borderRight:"3px solid white", paddingRight:"10px"}}><MenuIcon style={{fontSize:"40px"}} />See All</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/clothing"}><div>Clothing</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/electonics"}><div>Electronics</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/kitchen"}><div>Home & Kitchen</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/beauty"}><div>Beauty & Personal Care</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/toys"}><div>Toys & Games</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/grocery"}><div>Grocery & Gourmet Food</div></Link>
            <Link style={{color:"white",textDecoration:"none"}} to={"/books"}><div>Books</div></Link>
        </div>
    </div>
        )
    }
    </>
  )
}

export default Menu