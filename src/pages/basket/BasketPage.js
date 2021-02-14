import React from 'react';
import { BasketItem , Total} from '../../components';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../features/basketSlice';
import './BasketPage.css';

export const BasketPage = () => {
    const basket = useSelector(selectBasket);
    return (
        <div className="basketpage">
            <div className="basketpage__leftSide">
                {(basket?.length === 0) ? (
                    <div className="basketpage__emptybasket">
                        <h1>No hay productos en el carrito</h1>
                    </div>
                ) : (
                    <div className="basketpage__products">
                        <h1>Carrito de compras </h1>
                    {basket?.map(item => (
                        <BasketItem key={item.id} {...item} />
                    ))}
                </div>
                )}
            </div>
            {basket?.length > 0 && (
            <div className="basketpage__rightSide">
                    <Total />
            </div>
            )}   

            
        
        </div >
    )
}
