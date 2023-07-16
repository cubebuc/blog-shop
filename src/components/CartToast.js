import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function CartToast({ item })
{
    const [show, setShow] = useState(true);

    return (
        <Toast show={show} onClose={() => setShow(false)} delay={2000} autohide className='m-2 p-1 text-bg-primary' style={{ opacity: 0.95 }}>
            <Toast.Body>
                <b>{item.name}</b> added to cart!
            </Toast.Body>
        </Toast >
    );
}

export default CartToast;