import React, { Component } from 'react'
import blogs from '../data/data'
import Search from './Search'
import CreateBlog from './CreateBlog'
import Blogs from './Blogs'




// let searchIt = (term)=>(item)=> item.subject.toLowerCase().includes(term.toLowerCase())
class App extends Component{
    constructor(){
        super()
        this.state = {
            blogs,
            searchTerm:''
        }

        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(id){
        const updatedBlogs = this.state.blogs.filter((item)=>item.objectId !== id)
        this.setState({blogs:updatedBlogs})//use setState to update state
        console.log('delete item with id',id)
    };

    onUpDate(id){
        console.log(id)
    }

    handleChange=(event)=>{
        this.setState({searchTerm:event.target.value},()=>{
            console.log(this.state.searchTerm)
        })
    };

    handleCreateBlogSubmit=(event,blog)=>{
        event.preventDefault()
        
        let updatedBlogs = [blog,...this.state.blogs]

        this.setState({blogs:updatedBlogs})

    }

    
    
    render(){
        // console.log(this.state.blogs)
        // console.log('original array ' ,blogs)
        return(
            <div style={{marginTop:'100px',display:'flex',justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Search 
                handleChange = {this.handleChange}
                searchTerm = {this.state.searchTerm}
                />

                <CreateBlog
                handleCreateBlogSubmit = {this.handleCreateBlogSubmit}
                />
                <Blogs
                blogs= {this.state.blogs}
                searchTerm = {this.state.searchTerm}
                onDelete = {this.onDelete}
                onUpDate={this.onUpDate}
                />
            </div>
        )
    }
}
                        




export default App

