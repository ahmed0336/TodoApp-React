import React, { useState } from 'react'
import { FiTrash2} from "react-icons/fi";
import { FiEdit} from "react-icons/fi";

const Child = ({ data, index, del, edit, btn }) => {

  // console.log("data==>",data)
  // console.log("delete==>",index)



  // console.log(baloch)
  console.log("btn value", btn)

  return (
    <>
      {/* 
    <div className='d-flex'>

    <p  ></p> */}
      {/* <div className='items' > */}




      <li key={index} className="mt-2" style={{ listStyle: "none" }} >


        <span className='d-flex justify-content-between' >
          <div>
            {data}
          </div>

          <div>

            <button type="button" className='dltbtn mx-2' onClick={() => { edit(index, btn) }}  ><FiEdit /></button>
            <button type="button" className='dltbtn mx-2' onClick={() => { del(index) }}  ><FiTrash2 /></button>
          </div>

        </span>



      </li>



      {/* </div> */}



    </>
  )
}

export default Child