import React from 'react'
import CreateBlog from '../Pages/CreateBlog'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import UpdateBlog from '../Pages/UpdateBlog'
import { SingleBlog } from '../Pages/SingleBlog'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog/:id" element={<SingleBlog/>}/>
            <Route path="/create/blog" element={<CreateBlog/>}/>
            <Route path="/update/blog/:id" element={<UpdateBlog/>}/>
           
        </Routes>
    </div>
  )
}

export default MainRoute