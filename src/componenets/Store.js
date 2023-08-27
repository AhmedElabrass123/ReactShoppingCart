import React from 'react'
import img1 from "../images/air2.png"
import {DataProducts} from "./DataProducts"
import StoreItem from './StoreItem'
import { Row } from 'react-bootstrap'
const Store = () => {
  return (
    <section className='store'>
        <div className='head'>
            <h2 className='text-primary'>My Store</h2>
        </div>
       <div className='container'>
        <Row>
            {DataProducts.map((pro)=>{
                return(
                <div className='col-lg-4 col-md-6 col-12' key={pro.id}>
                    <StoreItem {...pro}/>
                </div>  
                )
            })}
        </Row>
        </div>
    </section>
  )
}

export default Store