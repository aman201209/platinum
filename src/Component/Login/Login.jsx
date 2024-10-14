import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import "./Login.css"
import * as yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login({onclose}) {

    const navigation = useNavigate()

    const userValidation = yup.object({
        first_name:yup.string().required("Name is Required"),
        last_name:yup.string().required("Last Name is Required"),
        email: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email format").required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        phone:yup.string().required("Mobile number is required")
    })
    const user2Validation = yup.object({
        email: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email format").required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    })
    

    let [product, setProduct] = useState(false)
    let [user , setUser] = useState([{
        first_name:"",
        email:"",
        password:"",
        phone:"",
        term:"",
        last_name:"",
    }])
    let [user2 , setUser2] = useState([{
        email:"",
        password:"",
        device_name:"",
    }])

    const handleChange = (e)=>{
        setUser({...user , [e.target.name]:e.target.value})
    }
    const handleChange2 = (e)=>{
        setUser2({...user2 , [e.target.name]:e.target.value})
    }
    const handleClick =async ()=>{
        if(user.term){
            try {
                await userValidation.validate(user , {abortEarly:false})
                let res = await axios.post("https://hellostay.com/api/auth/register" ,user)
                console.log(res)
                if(res.data.status===1){
                    onclose()
                }else if(res.data.message){
                    if(res.data.message.email){
                        toast.error(res.data.message.email[0],{position: "top-center",})
                    }
                    if(res.data.message.phone){
                        toast.error(res.data.message.phone[0],{position: "top-center",})
                    }
                }
            } catch (error) {
                console.log(error.inner[0].message)
                toast.error(error.inner[0].message,{position: "top-center",})
            }
        }else{
            toast.error("Click The Terms" ,{position: "top-center",} )
        }
        }
    const handleLogin = async()=>{
        if(user2.device_name){
            try{
                await user2Validation.validate(user2 , {abortEarly:false})
                let res =await axios.post("https://hellostay.com/api/auth/login" ,user2 )
                console.log(res)
                if(res.data.access_token){
                    localStorage.setItem("token" , res.data.access_token)
                    toast.success("Login SuccessFully")
                    onclose()
                }else{
                    toast.error("SomeThing is Wrong",{position: "top-center",})
                }
            }
            catch(error){
                console.log(error.inner)
                toast.error(error.inner[0].message,{position: "top-center",})
            }
        }else{
            toast.error("Click The Terms" ,{position: "top-center",} )
        }
    }

    return (
        <div className='login'>
            <div className={`${product ? ("login-close2"):("login-close")}`}><button onClick={()=>{
                if(onclose){
                    onclose()
                }else{
                    navigation("/")
                }
            }}><ClearIcon/></button></div>
            <div className='login-first'>
                <div className='login-first-first'>
                    <div className='login-login' >
                        <button onClick={()=>setProduct(false)} className={`${product?"login-register-button":"login-login-button"}`}>Login</button>
                    </div>
                    <div className='login-register'>
                        <button onClick={()=>setProduct(true)} className={`${product?"login-login-button":"login-register-button"}`}>Register</button>
                    </div>
                </div>
                {
                    product ? (
                        <div className='login-third'>
                            <div className='login-input'>
                                <input type="text" placeholder='Enter Name'name='first_name' value={user.first_name} onChange={handleChange}/>
                            </div>
                            <div className='login-input'>
                                <input type="text" placeholder='Enter Last Name'name='last_name' value={user.last_name} onChange={handleChange}/>
                            </div>
                            <div className='login-input'>
                                <input type="text" placeholder='Enter Email' name='email' value={user.email}onChange={handleChange} />
                            </div>
                            <div className='login-input'>
                                <input type="password" placeholder='Enter Password' name='password' value={user.password}onChange={handleChange}/>
                            </div>
                            <div className='login-input'>
                                
                                <input type="text" placeholder='Enter Mobile Number' style={{width:"100%"}} name='phone' value={user.phone} onChange={handleChange}/>
                            </div>
                            <div className='register-gender'>
                                <input type="radio" name="term" id="term" value="term" onChange={handleChange}/><label for="term" >Terms</label>
                            </div>
                            <div className='register-btn'>
                                    <button onClick={handleClick}>Sent OTP</button>
                            </div>
                        </div>
                    ) : (
                        <div className='login-third'>
                            <div className='login-input'>
                                <input type='text'  placeholder='Email number' name='email' value={user2.email} onChange={handleChange2}/>
                            </div>
                            <div  className='login-input'>
                                <input type="text"  placeholder='Password' name='password' value={user2.password}onChange={handleChange2}/>
                            </div>
                            <div className='register-gender'>
                                <input type="radio" name="device_name" id="device_name" value="device_name" onChange={handleChange2}/><label for="device_name" >Terms</label>
                            </div>
                            <div className='login-forgot'>
                                <div>Forgot Password ?</div>
                            </div>
                            <div className='login-btn'>
                                <button onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                        </div >
                    )
                }
            </div>
        </div>
    )
}

export default Login
// import React, { useState } from 'react'
// import ClearIcon from '@mui/icons-material/Clear';
// import "./Login.css"
// import * as yup from "yup"
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login({onclose}) {

//     const navigation = useNavigate()

//     const userValidation = yup.object({
//         name:yup.string().required("Name is Required"),
//         email: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email format").required('Email is required'),
//         password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//         mobile:yup.string().required("Mobile number is required")
//     })

//     let [product, setProduct] = useState(false)
//     let [user , setUser] = useState([{
//         name:"",
//         email:"",
//         Password:"",
//         mobile:"",
//         gender:"",
//         country_code:"",
//     }])
//     let [user2 , setUser2] = useState([{
//         mobile:"",
//         password:"",
//     }])

//     const handleChange = (e)=>{
//         setUser({...user , [e.target.name]:e.target.value})
//     }
//     const handleClick =async ()=>{
//         try {
//             await userValidation.validate(user , {abortEarly:false})
//             let res = await axios.post("https://alphasilver.productsalphawizz.com/app/v1/api/register_user" ,user)
//             console.log(res)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const handleLogin = async()=>{
//         try{
//             let res =await axios.post("https://alphasilver.productsalphawizz.com/app/v1/api/login" ,user2 )
//             console.log(res)

//         }
//         catch(error){
//             console.log(error)
//         }
//     }

//     return (
//         <div className='login'>
//             <div className={`${product ? ("login-close2"):("login-close")}`}><button onClick={()=>{
//                 if(onclose){
//                     onclose()
//                 }else{
//                     navigation("/")
//                 }
//             }}><ClearIcon/></button></div>
//             <div className='login-first'>
//                 <div className='login-first-first'>
//                     <div className='login-login' >
//                         <button onClick={()=>setProduct(false)} className={`${product?"login-register-button":"login-login-button"}`}>Login</button>
//                     </div>
//                     <div className='login-register'>
//                         <button onClick={()=>setProduct(true)} className={`${product?"login-login-button":"login-register-button"}`}>Register</button>
//                     </div>
//                 </div>
//                 {
//                     product ? (
//                         <div className='login-third'>
//                             <div className='login-input'>
//                                 <input type="text" placeholder='Enter Name'name='name' value={user.name} onChange={handleChange}/>
//                             </div>
//                             <div className='login-input'>
//                                 <input type="text" placeholder='Enter Email' name='email' value={user.email}onChange={handleChange} />
//                             </div>
//                             <div className='login-input'>
//                                 <input type="text" placeholder='Enter Password' name='password' value={user.password}onChange={handleChange}/>
//                             </div>
//                             <div className='login-input'>
//                                 <select for="country_code"  className='login-input-section' name='country_code' value={user.country_code}onChange={handleChange}>
//                                     <option value="91">+91</option>
//                                     <option value="91">+91</option>
//                                     <option value="91">+91</option>
//                                     <option value="91">+91</option>
//                                     <option value="91">+91</option>
//                                 </select>
//                                 <input type="text" placeholder='Enter Mobile Number' style={{width:"80%"}} name='mobile' value={user.mobile} onChange={handleChange}/>
//                             </div>
//                             <div className='register-gender'>
//                                 <input type="radio" name="gender" id="male" value="male" onChange={handleChange}/><label for="male" >Male</label>
//                                 <input type="radio" name="gender" id="female" value="female"onChange={handleChange} /><label for="male" >Female</label>
//                                 <input type="radio" name="gender" id="other" value="other" onChange={handleChange}/><label for="male" >Other</label>
//                             </div>
//                             <div className='register-btn'>
//                                     <button onClick={handleClick}>Sent OTP</button>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className='login-third'>
//                             <div className='login-input'>
//                                 <input type='text'  placeholder='Mobie number' name='mobile' value={user2.mobile}/>
//                             </div>
//                             <div  className='login-input'>
//                                 <input type="text"  placeholder='Password' name='password' value={user2.password}/>
//                             </div>
//                             <div className='login-forgot'>
//                                 <div>Forgot Password ?</div>
//                             </div>
//                             <div className='login-btn'>
//                                 <button onClick={handleLogin}>
//                                     Login
//                                 </button>
//                             </div>
//                         </div >
//                     )
//                 }
//             </div>
//         </div>
//     )
// }

// export default Login