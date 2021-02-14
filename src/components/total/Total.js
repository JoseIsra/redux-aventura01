import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../features/basketSlice';
import './Total.css';
export const Total = () => {
    const basket = useSelector(selectBasket);
    return (
        <div className="total">
            <p>Tienes {basket.length} productos</p>
        </div>
    )
}
