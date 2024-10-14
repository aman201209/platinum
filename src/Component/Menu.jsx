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
                   <Link to="/"> <img src="data:image/jpeg;base64,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" alt=" Platinum" /></Link>
                </div>
                <div className='menu-search-box'>
                    <div style={{paddingLeft:"10px"}}>Search for products</div>
                    <div className='menu-search-icon' >< SearchSharpIcon fontSize="inherit" style={{ fontSize: '30px' }}/></div>
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