import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import CartPreview from './CartPreview';

function CartButton()
{
    const [show, setShow] = useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setShow(true)} className="me-4">
                Cart <i className="bi bi-cart-fill" />
            </Button>
            <Offcanvas placement='end' show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartPreview />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default CartButton;