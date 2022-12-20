import React, { useState } from 'react'

const Child = ({data,index,del,edit,btn}) => {

    // console.log("data==>",data)
    // console.log("delete==>",index)

    

    // console.log(baloch)
    console.log("btn value",btn)

  return (
    <>
{/* 
    <div className='d-flex'>

    <p  ></p> */}
    {/* <div className='items' > */}

    
    

    <li className='mx-4' key={index} style={{listStyle:"none"}} >
    {data} 
    <button type="button" className='dltbtn' onClick={()=>{edit(index,btn)}}  >eidit</button>
    <button type="button" className='dltbtn' onClick={()=>{del(index)}}  >delete</button>
    
 
    </li>

  

    {/* </div> */}


   
    </>
  )
}

export default Child