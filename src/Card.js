import React, { useEffect, useState } from 'react'
import './App.css';
import OrderPage from './OrderPage';

const Card = (props) => {

 const [data, setData] = useState([])


  useEffect(()=>{
   async function APiData(){
    try{
        const Fetch = await fetch("http://localhost:3000/APIData")
        if(Fetch.ok){
      const Data = await Fetch.json()
      setData(Data)
        }

    }catch(error){
console.log(error)
    }
   }
   APiData()
  },[])

const collect =(event)=>{
 if(localStorage.getItem("cart")===null){
 var cart ={}
 }else{
       cart = JSON.parse(localStorage.getItem("cart"))
 }
 var name = event.target.id
 if(cart[name]==undefined){
var quantity = 1
cart[name]=[quantity, name]
 }else{
  quantity= cart[name][0] +1
  cart[name] [0] =quantity
 
 }
 localStorage.setItem("cart", JSON.stringify(cart))

}
const gotosummary=()=>{
  props.info("summarypage")
}
  return (
        <div >
           <h2 className='title'>Ice Cream Store</h2>
          <div className='card-container'>
            {
              
                data.map((items)=>(
            <div className='cards'>
           <div className="cardw" style={{width: "18rem"}}>
            <img src={items.imageUrl} data-testid="images" className="card-img-top card-image" alt="..."/>
            <h5 className="card-title">{items.name}</h5>
           <p className="card-text description">{items.description}</p>
           <a onClick={collect} className="btn btn-primary" id={items.name}>ADD</a>
         </div>
        </div>
    ))
       }
       </div>
        <button className="btn btn-success" onClick={gotosummary}>Continue</button>
    </div>
  )
}

export default Card
