import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../selectors/getProductById'

export const ProductScreen = () => {

    const { productId } = useParams();
    const navigate = useNavigate();
    const product = useMemo(() => getProductById(productId), [productId]);

    if (!product) {
        return <Navigate to="/" />
    }

    const {
        id,
        url,
        name,
        description,
        price
    } = product;


    const handleReturn = () => {
        navigate(-1)
    }


    return (
        <div className='presentation-produc animate__animated animate__fadeInLeft'>
            <div className='presentation presentation-produc-image'>
                <img src={url} alt={name} />
            </div>
            <div className='presentation presentation-produc-info'>
                <h2>{name}</h2>
                <hr/>
                <p>{description}</p>
                <hr/>
                <span>${price}</span>
                <hr/>
                <button 
                onClick={handleReturn}
                >
                    Back
                </button>
            </div>

        </div>
    )
}
