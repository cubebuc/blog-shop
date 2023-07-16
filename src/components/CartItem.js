import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button';

function CartItem({ item, onDecrementQuantity, onIncrementQuantity })
{
    const [quantity, setQuantity] = useState(item.quantity);

    function decrementQuantity()
    {
        onDecrementQuantity(item);
        setQuantity(quantity - 1);
    }

    function incrementQuantity()
    {
        onIncrementQuantity(item);
        setQuantity(quantity + 1);
    }

    function removeItem()
    {
        for (let i = 0; i < quantity; i++)
            onDecrementQuantity(item);
        setQuantity(0);
    }

    return (
        <Row key={item.id} className='border rounded-3 p-2 my-2 align-items-center'>
            <Col xs={3} className='p-0'>
                <Ratio aspectRatio='1x1'>
                    <img className='rounded-1' src={item.image} alt={item.name} />
                </Ratio>
            </Col>
            <Col xs={9} className='px-3'>
                <Row className='mb-2'>
                    <Col xs={6}>
                        <b>{item.name}</b>
                    </Col>
                    <Col xs={6} className='text-end'>
                        <b>${item.price}</b>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}>
                        <Button variant='outline-danger' size='sm' className='ms-2' style={{ width: '1.9rem' }} onClick={decrementQuantity}><b>–</b></Button>
                        <span className='mx-2'><b>{quantity}</b></span>
                        <Button variant='outline-success' size='sm' className='me-2' style={{ width: '1.9rem' }} onClick={incrementQuantity}><b>+</b></Button>
                    </Col>
                    <Col xs={3} className='text-end'>
                        <Button variant='outline-danger' size='sm' className='ms-2' style={{ width: '1.9rem' }} onClick={removeItem}><b>×</b></Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default CartItem;