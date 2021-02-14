import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../features/basketSlice';
import './Card.css';
export const Card = ({id,title, image}) => {
    const dispatch = useDispatch()

    const addItem = ()=>{
        let item = {
            id:id,
            name:title,
            photo:image,
            cantidad:1
        }
        dispatch(addToBasket(item))
    }
    return (
        <div className="card">
            <div className="card_info">
                <p>{title}</p>
                <img  src={image} alt="foto"/>
            </div>
            <div className="card__buyOptions">
                <button  onClick={addItem}
                color="primary">Agregar a carrito</button>
            </div>


        </div>
    )
}
