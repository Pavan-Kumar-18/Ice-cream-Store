import React from 'react'

const OrderPage = (props) => {
  const back =()=>{
    props.page("home")
  }
 
 
  return (
    <div>
        <h2 >Your Order Have Been Place Successfully With no :  {Math.ceil(Math.random()*100)}</h2>        <button onClick={back}>Back </button>
        
    </div>
  )
}

export default OrderPage
