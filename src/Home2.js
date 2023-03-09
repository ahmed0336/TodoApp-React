import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams ,NavLink } from 'react-router-dom';
import Header from './Components/Header';
const Home2 = () => {

    const params = useParams()
    const { ID } = useParams()


    //    console.log("id is ==>",params.ID)

    const Navigate = useNavigate()
    // console.log("parms ==>",params)


    useEffect(() => {
        // console.log("parms ==>",params.ID)


        if (params.ID == "2") {
            console.log("id is ==>", params.ID)
        }
        else {
            console.log("id not found")
        }

    }, [0])

    // State with list of all checked item
    const [checkedArray, setChecked] = useState([]);
    const checkList = ["Apple", "Banana", "Tea", "Coffee"];

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checkedArray];
        if (event.target.checked) {
            updatedList = [...checkedArray, event.target.value];
        } else {
            updatedList.splice(checkedArray.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);



    };

    // Generate string of checked items
    const checkedItems = checkedArray.length
        ? checkedArray.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
        checkedArray.includes(item) ? "checked-item" : "not-checked-item";


    // console.log("my array==>",allselect)

    const nextbtn = () => {
        Navigate(`/home3/${ID}/${"ahmed"}`)

    }

    const backbtn = () => {
        Navigate(`/`)

    }


    return (
        <>
           
            {
                ID == "2" ?

                    <>
                    <Header />
                        <h1>Home2</h1>
                        <div className="app">
                            <div className="checkList">
                                <div className="title">Your CheckList:</div>
                                <div className="list-container">
                                    {checkList.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                {`Items checked are: ${checkedItems}`}
                            </div>
                        </div>

                        <Button onClick={nextbtn} >next</Button>

                        <Button onClick={backbtn} >back</Button>

                    </>

                    : 
                    <h1>not found</h1>


            }



        </>
    )
}

export default Home2