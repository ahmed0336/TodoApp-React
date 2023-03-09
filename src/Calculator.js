import React from 'react'
import Header2 from './Components/Header2'
import img1 from './netfilx.jpg'
import img2 from './Group 602.png'
import img3 from './family-airport-Recovered2.jpg'
import './Calculator.css'

import mobile_img from './mobile-img.png'

const Calculator = () => {



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

                    <img src={mobile_img} alt='img' className='poster__image__mobile-img'  />

                </div>

            </div>









        </>
    )
}

export default Calculator