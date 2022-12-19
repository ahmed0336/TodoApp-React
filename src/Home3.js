import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Components/Header';

const Home3 = () => {

  const Navigate = useNavigate()
  const paramswala = useParams()
  const { name } = useParams()
  const { ID } = useParams()

  console.log("geting params name=>", paramswala)
  const Gonext = () => {
    // useNavigate(``)
  }

  const backbtn = () => {
    Navigate(`/home2/${ID}`)

  }




  const studentdata = [1, 2, 3, 4]

  const [oldarray, setoldarray] = useState()

  const [ahmed, setahmed] = useState(false)

  console.log("oldarray", oldarray)

  const [reversearray, setreversearray] = useState([])

  const reversefunction = (e) => {

    setahmed(true)

    console.log("student==>", e)


    let reverse = e;

    setoldarray(reverse)

    console.log(reverse, "original array==>")

    console.log(reverse.length, "length of mydata")

    let result = []


    reverse.map((abc, index) => {

      result.push(reverse[reverse.length - abc])




    })

    console.log("reversed data ==>", result)

    setreversearray(result)
    return result

  }


  return (
    <>
      <Header />
      <div>{`My name is ${name}`} </div>

      <div className='d-flex   justify-content-around  flex-column    flex-md-row text-center ' >
        <div className='one bg-dark w-40 ' >
          ahmed
        </div>
        <div className='two bg-primary w-40 ' >
          ilyas
        </div>

        


      </div>

      {
        ahmed ?


          <>



            <p className='d-flex justify-content-space-around  clearfix' >
              <h1 className='float-left' > Array Element</h1>

              {
                oldarray.map((s) => {
                  return (
                    <>

                      <span  >
                        {s}
                      </span>

                    </>
                  )

                })

              }



            </p>

            <p className='d-flex justify-content-space-around ' >
              <h1>Reverse Array Element</h1>
              {
                reversearray.map((s) => {
                  return (
                    <>


                      <span >
                        {s}
                      </span>

                    </>
                  )

                })

              }

            </p>

          </>
          : ""



      }

      <div className='clearfix ' >
        <div className='float-left' >
          <Button onClick={backbtn} >BACK</Button>
        </div>

        <div className='float-right' >
          <Button onClick={() => reversefunction(studentdata)} >Reverse Array</Button>
        </div>

      </div>








    </>
  )
}

export default Home3