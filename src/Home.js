import React  from 'react'
import { useEffect, useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate ,Link, useParams } from 'react-router-dom';
import Header from './Components/Header';

const Home = () => {
    const params  =  useParams()
  console.log(params)

//   const {name} = useParams()
  
    const Navigate= useNavigate()
    
  const [name,setname]=useState('')


  const ahmedbtn = useRef('')
  const safdarbtn = useRef('')
  const inputref = useRef(null)
  const preref = useRef('')

  const according =useRef('')

  const helloworld = () => {

    console.log("ahmedbtn", ahmedbtn)
    console.log("ahmedbtn.current", ahmedbtn.current)

    console.log("safdar.current", safdarbtn.current)

    // console.log("inputref.current==>", inputref.current.value = "ahmed")

    inputref.current.focus()

    inputref.current.style.BackGroundColor = "black"






    ahmedbtn.current.style.color = "red"

    ahmedbtn.current.focus();

    safdarbtn.current.style.color = "blue"

    // console.log(according.current.click())

    // according.current.onClick(alert("hello baloch"))

    // according.current.onClick.


    Navigate(`/home2/${"2"}`)

  }

  useEffect(()=>{
 
    preref.current= name;

  },[name])



  const handleChange = (e) => {
    setname(e.target.value);
  }
  return (
    <>
    <Header />
    
      <h1>Home</h1>
       

      <input type="text" 
      value={name} 
      ref={inputref}
      
      onChange={handleChange}
      />

      <p ref={ahmedbtn} >ahmed </p>
      <p ref={safdarbtn} >safdar </p>
         
         <h1>{`my name is ${name} and useref ${preref.current}`}</h1>
 
      <Button onClick={helloworld} >hello</Button>

  
    </>
  )
}

export default Home