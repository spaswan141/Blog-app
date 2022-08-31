import axios from "axios";
import { useEffect, useState } from "react";
import "./write.css";
import {useParams,useNavigate} from "react-router-dom"

export default function Updateblog() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [url,setUrl]=useState("")
    const [body,setBody]=useState("")
    useEffect(()=>{
        axios.get(`https://shubhamblogapppp.herokuapp.com/blog/${id}`).then((res)=>{
         setData(res.data)
        })
       },[])
       
  const handleUpdate=()=>{
    const payload={
      title:title,
      description:description,
      imgUrl:url,
      body:body,
    }
    if(payload.title=="" || payload.description=="" || payload.imgUrl=="" || payload.body=="" ){
      alert("Please Fill All the information")
    }else{
      axios.put(`https://shubhamblogapppp.herokuapp.com/update/blog/${id}`,payload)
      alert("Your Blog Has been Successfully Updated")
       navigate(`/blog/${id}`)
    }
   
  }


  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2016-06-28-1467153097-7249060-Blogpost.jpg&f=1&nofb=1"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
         
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            required
            onChange={(e)=>{setTitle(e.target.value)}}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
         
         <input
           className="writeInput"
           placeholder="Description"
           type="text"
           value={description}
           required
           onChange={(e)=>{setDescription(e.target.value)}}
           autoFocus={true}
         />
       </div>
       <div className="writeFormGroup">
         
         <input
           className="writeInput"
           placeholder="Paste Your Image URL here....."
           type="text"
           value={url}
           required
           onChange={(e)=>{setUrl(e.target.value)}}
           autoFocus={true}
         />
       </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={body}
            required
            onChange={(e)=>{setBody(e.target.value)}}
            autoFocus={true}
          />
        </div>
        <button  onClick={handleUpdate} className="writeSubmit" type="submit">
          Update Your Blog
        </button>
      </form>
    </div>
  );
}