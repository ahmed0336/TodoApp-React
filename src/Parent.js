import React, { useEffect, useState } from 'react'
import Child from './Components/Child'

const Parent = () => {

    const country = [1, 3, 4, 5]

    const [store, setstore] = useState([])

    const [inputvalue, setinputvalue] = useState('')
    const [errormsg, seterrormsg] = useState("")

    const [toglebtn, settoglebtn] = useState(true)

    const [edititem, setedititem] = useState(null)



    console.log("my store==>", store)
    // onClick={(e)=> setinputvalue(e.target.value)} 

    const additem = () => {

        if (inputvalue == "") {
            seterrormsg("Please Enter your Todo List ")
        }

        else if (inputvalue !==  "" && !toglebtn) {

            // console.log("input inside edit function",inputvalue)

            console.log("baloch==>", edititem)
              
            let getoldtodoelement= [...store]

            console.log("update continue",getoldtodoelement)
               
            getoldtodoelement[edititem] =inputvalue

            settoglebtn(true)
            setstore(getoldtodoelement)
             


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

            localStorage.setItem("todo", [...store, inputvalue])


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

    const something=(event)=> {
        if (event.keyCode === 13) {
            console.log('enter')
            additem()
        }
    }


    return (
        <>
            {/* <div className='d-flex' > */}
            <div className='father' >


                <div className='form-todo' >


                    <p>My TodoApp</p>
                    <p style={{ color: "red" }} >{
                        errormsg}
                    </p>

                    <input type="text" value={inputvalue} onKeyDown={(e) => something(e)} onChange={(e) => setinputvalue(e.target.value)} />
                    {
                        toglebtn == true ?
                            <button type="button" className='plusbtn' onClick={additem} >+</button> : <button type="button" className='plusbtn' onClick={additem}  >edit</button>
                    }


                    <ul className='ultag' >
                        {
                            store?.map((el, index) => {
                                return (
                                    <>

                                        <Child  index={index} data={el} btn={toglebtn} del={deletefunction} edit={eiditfunction} />

                                    </>
                                )
                            })


                        }

                    </ul>

                </div>

            </div>




        </>
    )
}

export default Parent