import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/basketSlice';
import './BasketItem.css';


export const BasketItem = ({id, name, photo, cantidad}) => {
    
    const dispatch = useDispatch();
    const deleteItem = ()=> {
        console.log("borrando este");
        dispatch(removeItem(id))
    }
    return (
        <div className="basketitem">
            <div className="basketitem-image">
                <img src={photo} alt="fotoproducto"/>
            </div>
            <div className="basketitem-info">
            <p>{name}</p>
            <p>Cantidad: {cantidad}</p>
            </div>
            <div className="basketitem-button">
                <button onClick={deleteItem}>Retirar de carrito</button>
            </div>
        </div>
    )
}


