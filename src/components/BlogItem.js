import React from 'react'
import Button from './Button'

let BlogItem = ({onDelete,onUpDate,blogs:{title,author,subject,article,objectId}})=>{
    return(
        <div key={objectId} className="ui card" style={{width:"75%",padding:"20px"}}>
            <div className="content">
                <div className="header">Title: {title}</div>
                <br/>
                <div className="meta">Author:{author}</div>
                <div className="meta">Subject: {subject}</div>
                <hr/>
                <div className="description">{article}</div>
               
                <Button 
                className='ui primary button' 
                onClick={()=>{
                    return onDelete(objectId)
                        }} 
                style={{margin:"10px 15px"}}
                >Delete
                </Button>
                
                <Button 
                className='ui primary button' 
                onClick={()=>{
                    return onUpDate(objectId)
                        }} 
                style={{margin:"10px 15px",color:'green'}}
                >update
                </Button>
            </div>
        </div>
       
    )
}

export default BlogItem