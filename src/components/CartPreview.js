import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button';

import CartItem from './CartItem';

function CartPreview()
{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() =>
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cart);
    }, []);

    useEffect(() =>
    {
        setTotal(cart.reduce((t, item) => t + item.price * item.quantity, 0));
    }, [cart]);

    function handleDecrementQuantity(item)
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingItem = cart.find(i => i.id === item.id);
        existingItem.quantity--;
        if (existingItem.quantity === 0)
            cart = cart.filter(i => i.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    }

    function handleIncrementQuantity(item)
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingItem = cart.find(i => i.id === item.id);
        existingItem.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    }

    return (
        <div className='m-1' style={{ zIndex: 100 }}>
            <Container className='border rounded-3 p-2 ps-3 pe-4 mb-3'>
                <Row>
                    <Col xs={3}>
                        <b>Total:</b>
                    </Col>
                    <Col xs={9} className='text-end'>
                        <b>${total}</b>
                    </Col>
                </Row>
            </Container>
            <Container>
                {
                    cart.map(item => (
                        <CartItem key={item.id} item={item} onDecrementQuantity={handleDecrementQuantity} onIncrementQuantity={handleIncrementQuantity} />
                    ))
                }
            </Container >
        </div >
    );
}

export default CartPreview;;