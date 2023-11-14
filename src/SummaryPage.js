import React from 'react'
import { useEffect } from 'react'

const SummaryPage = (props) => {
    const Back =()=>{
        props.page("home")
    }
    useEffect(()=>{
       let iceCreamdata =JSON.parse( localStorage.getItem("cart"))
       for(let i in iceCreamdata){
        var name = iceCreamdata[i][0]
        var quantity = iceCreamdata[i][1]
        const DIvdata = document.getElementById("div")
        DIvdata.append(name +":" + quantity)
       }
    })
    const order=()=>{
        props.order("orderPage")
    }
  return (
    <div className='orders'>
        <h2 className='summary'>Sumary items</h2>
      <li id='div'></li>
      <button className="btn btn-success" onClick={Back} >Back to main Page </button>
      <button className="continue btn btn-success" onClick={order} >Order Now </button>

    </div>
  )
}

export default SummaryPage
