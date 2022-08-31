import { useState } from "react";
import "./write.css";
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Write() {
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [url,setUrl]=useState("")
    const [body,setBody]=useState("")
    const handleSubmit=()=>{
      const payload={
        title:title,
        description:description,
        imgUrl:url,
        body:body,
      }
        axios.post(`https://shubhamblogapppp.herokuapp.com/create/blog`,payload)
        alert("Your Blog Has been Successfully Posted")
        navigate('/')
      }
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iwriter.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F01%2Fwriting-blogs-748x335.jpeg&f=1&nofb=1"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
         
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            autoFocus={true}
            required
          />
        </div>
        <div className="writeFormGroup">
         
         <input
           className="writeInput"
           placeholder="Description"
           type="text"
           value={description}
           onChange={(e)=>{setDescription(e.target.value)}}
           autoFocus={true}
           required
         />
       </div>
       <div className="writeFormGroup">
         
         <input
           className="writeInput"
           placeholder="Paste Your Image URL here....."
           type="text"
           value={url}
           onChange={(e)=>{setUrl(e.target.value)}}
           autoFocus={true}
           required
         />
       </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={body}
            onChange={(e)=>{setBody(e.target.value)}}
            autoFocus={true}
            
          />
        </div>
        <button onClick={handleSubmit} className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}