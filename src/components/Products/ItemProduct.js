import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './products.css'

export const ItemProduct = ({ id, url, name, description, price }) => {

    const navigate = useNavigate();


    const handleProductScreen = () =>{
        // console.log('handleLogin');
        navigate(`/product/${id}`)
      }

    return (
        <div className='card animate__animated animate__fadeIn'
        onClick={handleProductScreen}
        >
            <img src={url} alt="imagen del producto" />
            <h4 className='title'>{name}</h4>
            <p><b className='price' >${price}</b></p>
        </div>
    )
}
