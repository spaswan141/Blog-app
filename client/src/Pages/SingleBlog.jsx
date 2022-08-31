import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./singleblog.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useNavigate} from 'react-router-dom'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const SingleBlog = () => {
   const [name,setName]=useState("")
   const [reviews,setReview] = useState("")
    const [open,setOpen]=useState(false)
    const [data,setData]=useState("")
    const navigate=useNavigate()
    const {id}=useParams()
    const [reviewDetails,setReviewDetails]=useState([])

    useEffect(()=>{
        axios.get(`https://shubhamblogapppp.herokuapp.com/blog/${id}`).then((res)=>{
         setData(res.data)
        })
       },[])
       const handleDelete=()=>{
        axios.delete(`https://shubhamblogapppp.herokuapp.com/delete/blog/${id}`).then((res)=>{
          
        }).catch((err)=>{
          console.log(err)
        })
        alert("Your blog has been deleted")
         navigate('/')
       }
       const getreviews=()=>{
        axios.get(`https://shubhamblogapppp.herokuapp.com/reviews/`).then((res)=>{
          console.log(res.data)
          setReviewDetails(res.data)
       })
      }
      
      useEffect(()=>{
        getreviews()
      },[reviews])
      const postReview=()=>{
        axios.post(`https://shubhamblogapppp.herokuapp.com/reviews/`,{
          name:name,
          review:reviews,
          blogId:id
        }).then(getreviews)
      } 
    
       
      let newarray=[]
    for(let i=0;i<reviewDetails.length;i++){
      if(reviewDetails[i].blogId===null){
        continue;
      }
      if(reviewDetails[i].blogId._id===id){
          newarray.push(reviewDetails[i])
      }
    }
    console.log(newarray)
  return (
    <div>
     
        <div className={styles.boxModel} key={data._id}>
        <h1>{data.description}</h1>
        <img src={data.imgUrl} alt={data.title}/>
        <p style={{textAlign:"justify"}}>{data.body}</p>
        <button onClick={()=>{setOpen(!open)}}>Delete Blog</button><button onClick={()=>{navigate(`/update/blog/${id}`)}}>Update Blog</button>
        
        </div>
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Are You Sure?
          Do you want to Delete This Blog?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <button onClick={handleDelete}>Yes</button> <button onClick={()=>{setOpen(!open)}}>No</button>
          </Typography>
        </Box>
      </Modal>
      <div className={styles.reviews}>
        <div>
          <label>Name</label>
          <br/>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> 
        <br/>
        <label>Review</label>
          <br/>
        <textarea type="text" value={reviews} onChange={(e)=>{setReview(e.target.value)}} /> 
        </div>


        <button style={{height:'30px',borderRadius:"10px",width:"200px"}}  onClick={postReview}>Post Review</button>

      </div>
      <div className={styles.boxcomment}>{newarray.map((item)=>(
        <div className={styles.comments} key={item._id}>
        <h5>{item.name}</h5>
        <p>{item.review}</p>
        </div>
      ))}</div>
    </div>
  )
}
