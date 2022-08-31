import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import "./model.css"
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
const Home = () => {
const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
    axios.get('https://shubhamblogapppp.herokuapp.com/blogs').then((res)=>{
        setData(res.data)
    })
    },[])
  return (
    <div style={{marginTop:"5%"}}>
        {data.map((item)=>(
          <div className={styles.boxModel} key={item._id}>
            <div>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <Link  to={`/blog/${item._id}`}>Read More</Link>
            <br/>
         <button onClick={()=>{navigate(`/update/blog/${item._id}`)}} className={styles.updateBtn} >Update The blog</button>
            </div>
            <div>
                <img className={styles.blogImg} src={item.imgUrl} alt="image"/>
            </div>
          </div>
        ))}
       
    
    </div>
  )
}

export default Home