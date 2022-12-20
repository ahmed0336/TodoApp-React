import React, { useEffect, useState } from 'react'
import Child from './Components/Child'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FiPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillCloseCircle } from "react-icons/ai";






const Parent = () => {

    const country = [1, 3, 4, 5]

    const [store, setstore] = useState([])

    const [inputvalue, setinputvalue] = useState('')
    const [errormsg, seterrormsg] = useState("")

    const [toglebtn, settoglebtn] = useState(true)

    const [edititem, setedititem] = useState(null)

    const localStoragedata=JSON.parse(localStorage.getItem('todo'))

    console.log("localStoragedata",localStoragedata)
     
    const[ahmedbaloch,setahmedbaloch]=useState([])

    console.log("ahmed==>",ahmedbaloch)
    

    // useEffect(()=>{
    //     mylocalstoreg()
    //     const localStoragedata = localStorage.getItem('todo');
    //     console.log("localStoragedata==>",localStoragedata)
    //     setahmedbaloch(localStoragedata)
    // },[ahmedbaloch])

    const [show, setshow] = useState(false)
   


    console.log("my store==>", store)
    // onClick={(e)=> setinputvalue(e.target.value)} 

    const additem = () => {


        if (inputvalue == "") {
            seterrormsg("Please Enter your Todo List ")
        }

        else if (inputvalue !== "" && !toglebtn) {

            console.log("baloch==>", edititem)

            let getoldtodoelement = [...store]

            console.log("update continue", getoldtodoelement)

            getoldtodoelement[edititem] = inputvalue


            settoglebtn(true)
            setstore(getoldtodoelement)

            setinputvalue('')

            localStorage.setItem("todo",JSON.stringify([...getoldtodoelement]))


            // setstore(() => {
            //     store.map((el, c) => {


            //         if (edititem === c) {
            //             return { ...el,inputvalue }
            //         }
            //         return el
            //     })
            // })

            // settoglebtn(false)

            // setinputvalue('')

            // setedititem(null)




        }
        else {

            setstore(() => {
                return [...store, inputvalue]



            })

            localStorage.setItem("todo",JSON.stringify([...store, inputvalue]))


            setinputvalue('')


        }



    }

    const deletefunction = (index) => {

        console.log("getting id==>", index)

        let ahmed = store.filter((a, id) => {
            return id !== index
        })

        setstore(ahmed)

    }


    const eiditfunction = (a, b) => {

        console.log("index of select item==>", a, "btn value", b)
        let editid = store.filter((data, index) => {
            return a === index
        })

        console.log("click itme and store item equal and return", editid)

        settoglebtn(false)
        setinputvalue(editid)


        setedititem(a)






    }

    console.log("edit item==>", edititem)



    // const edittodo = () =>{
    //     setstore(() => {
    //         return [...store, inputvalue]

    //     })

    //     localStorage.setItem("todo", [...store, inputvalue])


    //     setinputvalue('')

    // }

    const something = (event) => {
        if (event.keyCode === 13) {
            console.log('enter')
            additem()
        }
        else if (event.keyCode === 8) {

            console.log("backspace==>", event.keyCode)
        }


    }


    const predata = () => {

        
        // settodostate(localStoragetodo)
        setshow(true)


    }

    const handleClose = () => {
        // settodostate(localStoragetodo)
        setshow(false)
    }


    return (
        <>
            {/* <div className='d-flex' > */}
            <div className='father' >

                <Scrollbars style={{ width: 300, height: 500 }}>
                    <div className='form-todo' >


                        <p>Welcome To My TodoApp</p>
                        <button onClick={predata} >check History</button>
                        <p style={{ color: "red" }} >{
                            errormsg}
                        </p>

                        <div className='d-flex justify-content-between' >
                            <input maxLength={20} type="text" value={inputvalue} onKeyDown={(e) => something(e)} onChange={(e) => setinputvalue(e.target.value)} />
                            {
                                toglebtn == true ?
                                    <button type="button" className='plusbtn' onClick={additem} ><FiPlus /></button> : <button type="button" className='plusbtn' onClick={additem}  ><FiEdit /></button>
                            }

                        </div>


                        <ul className='ultag' >
                            {
                                store?.map((el, index) => {
                                    return (
                                        <>

                                            <Child index={index} data={el} btn={toglebtn} del={deletefunction} edit={eiditfunction} />

                                        </>
                                    )
                                })


                            }

                        </ul>





                    </div>

                </Scrollbars>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >

                    <Modal.Title>Your TodoApp History</Modal.Title>
                    <AiFillCloseCircle fontSize={30} onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    {/* <p>hello baloch</p> */}

                    {
                       localStoragedata.length > 0 ? 
                             
                       localStoragedata?.map((data,index)=>{
                                return(
                                    <>
                                     <h3>{data}</h3>
                                    </>
                                )
                             }): <p>no data found</p>
                                   
                             }
                </Modal.Body>
                <Modal.Footer>
                  
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Parent