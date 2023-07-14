import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CartButton()
{
    const [show, setShow] = useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setShow(true)} className="me-4"> Cart </Button>
            <Offcanvas placement='end' show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Cart is empty.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default CartButton;;;;