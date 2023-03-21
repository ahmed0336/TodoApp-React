import React, { useEffect, useState } from 'react'
import Header2 from './Components/Header2'
import img1 from './netfilx.jpg'
import img2 from './Group 602.png'
import img3 from './family-airport-Recovered2.jpg'
import './Calculator.css'
import { AiOutlineArrowLeft ,AiOutlineArrowRight } from "react-icons/ai";

import mobile_img from './mobile-img.png'

const Calculator = () => {


    useEffect(() => {

        upfunction()
        downfunction()

    }, [])


    const testinomialarray = [
        {
            name: "Ahmed",
            Review: "It was a great Experience!",
            description: "I have used your service for some years and always found it reliable and reasonable.Recently, two of your employees did a little extra for me.  When I was brought home on Sat., Jan. 20, a book slipped out of a side pocket of my bag and was left in the trunk.  When I realized what must have happened, I phoned the dispatcher on Monday morning.  Within an hour, she called to say that the driver had the book and that he would return it when in the area.I had it later in the day.Thanks to both people for their help."

        },
        {
            name: "Yaseen",
            Review: "Always Found It Reliable And Reasonable",
            description: "I have trusted Airflight Services on several occasions over the past 7 years to get me to the airport with no hitches or worries on my end. I do not travel a lot, but I do recognize and appreciate a good transportation service when I find it. Taxi provides excellent service with friendly interactions – and their fleet appears to be regularly maintained, which is something that I look for in public transportation. Thank you for providing this much-needed service!"

        },
        {
            name: "Adnan",
            Review: "I Find Their Service High Class",
            description: "As a person who likes to travel a lot, I have used many taxi companies and other community services but, unlike any other, Airflight has by far been the best. When the car arrived in front of my doorstep, I would expect a regular car that one might find on a common cab, but I ended up with a nice Lincoln SUV."

        }
    ]


    const jd = [
        {
            name: "Ahmed",
            job: "developer"
        },
        {
            name: "Yaseen",
            job: "businessman"
        },
        {
            name: "Adnan",
            job: "front0end"
        }
    ]





    const [counter, setcounter] = useState(-1)

    const [title, settitle] = useState('')
    const [job, setjob] = useState('')

    const [Review, setReview] = useState('')
    const [ReviewName, setReviewName] = useState('')





    console.log("counter==>", counter)



    const upfunction = () => {

        // setcounter(counter+1)
        // console.log("upfunction",counter)

        // console.log("testinomialarray.length",testinomialarray.length-1)


        if (counter < testinomialarray.length - 1) {
            setcounter(counter + 1)
            console.log("testinomialarray==>", testinomialarray)

            let filterTestonomialData = testinomialarray.filter((a, index) => index == (counter + 1))


            let filterJDData = jd.filter((a, index) => index == (counter + 1))



            settitle(filterJDData[0]?.name)
            setjob(filterJDData[0]?.job)

            // console.log("filterdata",filterdata[0].name)

            setReviewName(filterTestonomialData[0]?.name)
            setReview(filterTestonomialData[0]?.Review)


        }

    }

    const downfunction = () => {
        console.log("downfunction")

        if (counter > 0) {

            setcounter(counter - 1)

            let filterTestonomialData = testinomialarray.filter((a, index) => index == (counter - 1))

            let filterJDData = jd.filter((a, index) => index == (counter - 1))



            settitle(filterJDData[0].name)
            setjob(filterJDData[0].job)

            setReviewName(filterTestonomialData[0]?.name)
            setReview(filterTestonomialData[0]?.Review)



        }


    }

    const obj =

    {
        backlog: [
            { id: 0, task: "Task 0" },
            { id: 1, task: "Task 1" },
            { id: 2, task: "Task 2" },
            { id: 3, task: "Task 3" }
        ],
        toDo: [
            { id: 4, task: "Task 4" },
            { id: 5, task: "Task 5" },
            { id: 6, task: "Task 6" },
        ],
        ongoing: [
            { id: 7, task: "Task 7" },
            { id: 8, task: "Task 8" },
        ],
        done: [
            { id: 9, task: "Task 9" },
        ],

    }

    const[backlogstage,setbacklogstage]=useState(obj.backlog)
    const[toDostage,settoDostage]=useState(obj.toDo)
    const[ongoingstage,setongoingstage]=useState(obj.ongoing)
    const[donestage,setdonestage]=useState(obj.done)


    console.log("backlogstage",backlogstage)
    console.log("toDostage",toDostage)
    console.log("ongoingstage",ongoingstage)
    console.log("donestage",donestage)


    // console.log("mystate==>",ahmed)

    const keys = Object.keys(obj);

    console.log("full data object==>",keys)


    
  const RightFunction = (arrayName,id) =>{

    //     let backlog=obj.backlog
    // let toDo=obj.toDo
    // let ongoing=obj.ongoing
    // let done=obj.done
    console.log("RightFunction arrayName",arrayName)
    console.log("RightFunction id",id)

    const statusArray = obj[arrayName];


    console.log(statusArray)
      
    // yahan jis id pr click kr hy usko la rh hai
    const taskIndex = statusArray.findIndex(task => task.id === id)

    console.log("taskIndex",taskIndex)

// yeh wo object hai jisko addd krna hai nextarray me
    console.log("==>",statusArray[taskIndex])

    let newObj =statusArray[taskIndex]

    settoDostage([...toDostage, newObj]);

     let ahmed =backlogstage.filter((a,index)=> a.id  !== id)
     console.log("remove item",ahmed)
    setbacklogstage(ahmed)
    
  }


  const LeftFunction = (arrayName,id) =>{

    console.log("LeftFunction arrayName",arrayName)
    console.log("LeftFunction id",id)

    const statusArray = obj[arrayName];


    console.log("array of object==>",statusArray)
      
    // yahan jis id pr click kr hy usko la rh hai
    const taskIndex = statusArray.findIndex(task => task.id === id)

    console.log("taskIndex",taskIndex)

    let newObj =statusArray[taskIndex]

    setbacklogstage([...backlogstage, newObj])



     let ahmed =toDostage.filter((a,index)=> a.id  !== id)
     console.log("remove item",ahmed)

    settoDostage(ahmed)

  }

        // console.log("obj.backlof",obj?.backlog)


    //   for(let a of obj){

    //     console.log("obj data==>",a)
    //     let backlogdata=a.backlog.map((data,index)=>console.log("backlogdata==>",data))

    //     let donedata=a.done.map((data,index)=>console.log("donedata==>",data))

    //     let ongoinggdata=a.ongoing.map((data,index)=>console.log("ongoingdata==>",data))

    //     let toDo=a.toDo.map((data,index)=>console.log("toDo==>",data))

    //                   }







    return (
        <>

            {/* <div className={window.innerWidth == 768 ? "col-xl-5" : "col-md-5" }> */}
            {/* "navbar navbar-expand-lg navbar-dark bg-dark  sticky-top" */}


            <Header2 />


            <div className='containermy' >

                <div className='div-img1' >

                    <img className='div-img1__image1' src={img1} />
                </div>
                <div className='div-img2' >

                    <img className='div-img1__image2' src={img2} />
                </div>
                <div className='div-img3' >

                    <img className='div-img1__image3' src={img3} />
                </div>


            </div>


            {/* <section className='d-flex justify-content-center ' >
                <div className='calculator' >
                    <h1>calculator</h1>
                    <table className='table-body table table-bordered' >
                        <tbody >
                            <tr>
                                <th className='th-7 mx-2'value={9} >7</th>
                                <td className='th mx-2' >8</td>
                                <td className='th  mx-2' >9</td>
                                <td className='th  mx-2' >-</td>
                            </tr>
                            <tr>
                                <th className='th' >4</th>
                                <td className='th' >5</td>
                                <td className='th' >6</td>
                                <td className='th' >+</td>
                            </tr>
                            <tr>
                                <th className='th' >1</th>
                                <td className='th' >2</td>
                                <td className='th' >3</td>
                                <td className='th' rowSpan={2} >=</td>
                            </tr>
                            <tr>
                                <th className='th' >%</th>
                                <td className='th' >0</td>
                                <td className='th' >.</td>
                                
                            </tr>
                        </tbody>
                    

                </table>

            </div>

        </section>  */}

            <div className='poster' >

                <div className='poster__content' >
                    <div className='poster__content__title' >100% Contactless <br /> Valet Parking</div>
                    <div className='poster__content__subtitle' >We meet you <br /> directly at your  <br /> Terminal</div>
                    <p className='poster__content__paragraph' > Book online, then drive directly to your terminal. An LAX Valet Service <br />
                        representative will meet you at LAX, curbside, to valet your  vehicle. That's It! You're off to your flight! <br /> And now offering a complete suite of expedited VIP services to pair with your valet parking to enhance your airport travel.
                    </p>
                </div>
                <div className='poster__image' >

                    <img src={mobile_img} alt='img' className='poster__image__mobile-img' />
                </div>

            </div>

            {/* how it section */}

            <section>

                <div className='hiwsection' >

                    <div className='hiwsection__title' >
                        <h1 className='hiwsection__title__h1' >
                            Here is<br /> how it <br /> works.
                        </h1>
                    </div>

                    <div className='hiwsection__div1' >

                        <div className='hiwsection__div1__card1' >
                            <div className='hiwsection__div1__card1__title' >
                                01
                            </div>

                            <div className='hiwsection__div1__card1__para' >
                                book and prepay <br /> online for valet <br /> parking
                            </div>

                        </div>

                        <div className='hiwsection__div1__card2' >
                            <div className='hiwsection__div1__card1__title' >
                                02
                            </div>

                            <div className='hiwsection__div1__card1__para' >
                                when you are <br /> approaching <br /> lax,  text us at
                            </div>

                        </div>

                        <div className='hiwsection__div1__card3' >

                            <div className='hiwsection__div1__card1__title' >
                                03
                            </div>

                            <div className='hiwsection__div1__card1__para' >
                                we will meet <br /> you at your <br /> terminal, <br /> curbside, to <br /> valet your <br /> vehicle.
                            </div>

                        </div>

                    </div>


                    {/* <div className='hiwsection__div2' >
                        <h1>hello</h1>
                    </div> */}


                </div>

            </section>

            {/* how it section */}



            <div className='testonomial' >
                <div className='testonomial__left' >

                    <div className='card' >
                        <div className='card-body' >
                            {/* {
                               jd.map((data,index)=>{
                                return(
                                    <> */}
                            <h2>{title}</h2>
                            <p>{job}</p>
                            {/* </>
                                )
                               }) 
                            } */}

                        </div>

                    </div>
                </div>

                <div className='testonomial__center' >
                    <button type='button' onClick={() => upfunction()} >up</button>
                    <button type='button' onClick={() => downfunction()} >down</button>
                </div>

                <div className='testonomial__right' >
                    {/* {
                        testinomialarray.map((data, index) => {
                            return (
                                <> */}
                    <h2>{ReviewName}</h2>
                    <p>{Review}</p>
                    {/* </>
                            )
                        })
                    } */}


                </div>

            </div>



            <div className='d-flex' >

                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        Backlog
                    </div>
                    <ul className="list-group list-group-flush">
                       {
                        backlogstage?.map((data,index)=>{
                            return(
                                <>
                                <li className="list-group-item">{data?.task} <AiOutlineArrowLeft onClick={()=>LeftFunction("backlog",data.id )} /> <AiOutlineArrowRight onClick={()=>RightFunction("backlog",data.id)} /> </li>
                                </>
                            )
                        })
                       }

                      
                    </ul>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        To Do
                    </div>
                    <ul className="list-group list-group-flush">
                       {
                        toDostage?.map((data,index)=>{
                            return(
                                <>
                                <li className="list-group-item">{data?.task} <AiOutlineArrowLeft onClick={()=>LeftFunction("toDo",data.id )} /> <AiOutlineArrowRight onClick={()=>RightFunction()} /> </li>
                                </>
                            )
                        })
                       }

                      
                    </ul>
                </div>

                {/* <div className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        Ongoing
                    </div>
                    <ul className="list-group list-group-flush">
                       {
                        ongoingstage?.map((data,index)=>{
                            return(
                                <>
                                <li className="list-group-item">{data?.task} <AiOutlineArrowLeft onClick={()=>LeftFunction()} /> <AiOutlineArrowRight onClick={()=>RightFunction()} /> </li>
                                </>
                            )
                        })
                       }

                      
                    </ul>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        Done
                    </div>
                    <ul className="list-group list-group-flush">
                       {
                        donestage.map((data,index)=>{
                            return(
                                <>
                                <li className="list-group-item">{data?.task} <AiOutlineArrowLeft onClick={()=>LeftFunction()} /> <AiOutlineArrowRight onClick={()=>RightFunction()} /> </li>
                                </>
                            )
                        })
                       }

                      
                    </ul>
                </div> */}
               
            </div>
















        </>
    )
}

export default Calculator