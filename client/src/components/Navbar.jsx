import React from 'react'
import styles from './Navbar.module.css'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className={styles.navbar}>
     <h1 onClick={()=>{navigate('/')}}  style={{cursor:"pointer"}}>My Blog WebSite</h1>
     <h1 onClick={()=>{navigate('/create/blog')}} style={{cursor:"pointer"}}><u>Write A New Blog</u></h1>
    </div>
  )
}

export default Navbar