import React from 'react'
import Card from './Card'

const Home = (props) => {
  return (
    <div className='container'>
        <div className='card'>
             <Card info={props.data}/>
             </div>
     
      
    </div>
  )
}

export default Home
