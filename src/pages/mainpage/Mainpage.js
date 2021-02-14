import React , {useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import axios from  'axios';
import { Card } from '../../components';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Mainpage.css'
import {selectBasket }  from '../../features/basketSlice';
import { useSelector } from 'react-redux';
export const Mainpage = () => {
    const basket = useSelector(selectBasket);
    const [products , setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('pizza');
    
    useEffect(async ()=>{
    const response =await  axios.get(`https://api.spoonacular.com/food/products/search?query=${newProduct}&number=12&apiKey=${process.env.REACT_APP_APIKEY}`);
    setProducts(response.data.products);
    },[newProduct]);

    const seeChange =(e)=>{
        setNewProduct(e.target.value);
    }
    

    return (
        <div className="mainpage">
                <div className="mainpage__title">
                    <h2>Escoge lo que anhela tu corazón 😋</h2>
                </div>
            
            <div className="mainpage__buttons">
                <div className="mainpage__dropdown">
                    <select onChange={seeChange}>
                        <option value="pizza" >Pizza</option>
                        <option value="bread" >Panes</option>
                        <option value="eggs" >Huevos</option>
                        <option value="chicken" >Pollo</option>
                        <option value="icecream" >Helado</option>
                    </select>
                </div>
                    <div className="mainpage__basketButton">
                        <Link to="/basket">Ver carrito <ShoppingBasketIcon fontSize="large" 
                        className="basketIcon" /> ({basket.length})</Link>
                    </div>
            </div>


                <div className="mainpage__content">
                    {products.map(product => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
        </div>
    )
}
