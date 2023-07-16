import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToastContainer from 'react-bootstrap/ToastContainer';

import MainLayout from '../layouts/MainLayout';
import ItemCard from '../components/ItemCard';
import CartToast from '../components/CartToast';
import shop from '../resources/shop.json';

function ShopPage()
{
    const [notifications, setNotifications] = useState([]);

    function onAddToCart(item)
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingItem = cart.find(i => i.id === item.id);
        if (existingItem)
            existingItem.quantity++;
        else
            cart.push({ ...item, quantity: 1 });

        localStorage.setItem('cart', JSON.stringify(cart));
        setNotifications([...notifications, item]);
    }

    return (
        <MainLayout>
            <Row>
                {shop.items.map(item => (
                    <Col key={item.id} xs={12} md={5} lg={4} xxl={3}>
                        <ItemCard item={item} onAddToCart={onAddToCart} />
                    </Col>
                ))}
            </Row>

            <ToastContainer position="top-end" className="mt-5 p-3 position-fixed">
                {notifications.map((notification, index) => (
                    <CartToast key={index} item={notification} />
                ))}
            </ToastContainer>
        </MainLayout>
    );
}

export default ShopPage;