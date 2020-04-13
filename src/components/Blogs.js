import React, { Component } from 'react'
import {searchIt} from '../service/search'
import BlogItem from './BlogItem'
import blogs from '../data/data'


const Blogs = (props)=>{
  return(
    <div>
      {props.blogs.filter(searchIt(props.searchTerm))
        .map((blogs,idx)=>{
          return(
          <BlogItem
          key ={blogs.objectId}
          onDelete={props.onDelete}
          onUpDate={props.onUpDate}
          blogs = {blogs}
          />
          )
      })}
    </div>
  )
}




export default Blogs
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 