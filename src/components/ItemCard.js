import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function onAddToCart(item)
{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(i => i.id === item.id);
    if (existingItem)
        existingItem.quantity++;
    else
        cart.push({ ...item, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
}

function ItemCard({ item })
{
    return (
        <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img src={item.image} height={200} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" onClick={() => onAddToCart(item)}>Add to Cart</Button>
                    <b>${item.price}</b>
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;