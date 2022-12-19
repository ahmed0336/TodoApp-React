import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'

const Header = () => {
  const params =  useParams()
  console.log("my params==>",params)
  const [togglebtn,settogglebtn]=useState(false)

  const togglefun =() =>{
    settogglebtn(!togglebtn)
  }


  return (
    <>
  <div className='wraper   ' >


<NavLink className={'navlink'}  to={"/"} style={({isActive})=>{return ({color:isActive ? 'red'  : ""})}} >Home </NavLink>
<NavLink className={'navlink'} to={`/home2/${"2"}`} style={({isActive})=>{return ({color:isActive ? 'red' : ""})}} >Home 2</NavLink>
<NavLink className={'navlink'} to={`/home3/${"2"}/${'yaseen'}`} style={({isActive})=>{return ({color:isActive ? 'red' : ""})}}  >Home 3</NavLink>



</div>
<div className='toglebtn' style={{position:"absolute",width:"100%",top:"0px",background:"royalblue"}} >


 <Button onClick={togglefun} variant="primary" style={{width:"90px",float:"right",paddingRight:"2px",background:"none",border:"none"}}  size='sm'>x</Button>
 </div> 
 <div className='mobilenav  '  >
    {
        togglebtn ? <>
        
        
  
 <NavLink className={'navlink'}  to={"/"} style={({isActive})=>{return ({color:isActive ? 'red'  : ""})}} >Home </NavLink>
<NavLink className={'navlink'} to={`/home2/${"2"}`} style={({isActive})=>{return ({color:isActive ? 'red' : ""})}} >Home 2</NavLink>
<NavLink className={'navlink'} to={`/home3/${"2"}/${'yaseen'}`} style={({isActive})=>{return ({color:isActive ? 'red' : ""})}}  >Home 3</NavLink>

</> : ""
 

 
    }
 </div>

    </>
  )
}

export default Header