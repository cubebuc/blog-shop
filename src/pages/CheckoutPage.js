import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CheckoutPage()
{
    return (
        <MainLayout>
            <h1>Checkout</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Shipping Address</h3>
                        <hr />
                        <form>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <input type='text' className='form-control' id='name' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Address</label>
                                <input type='text' className='form-control' id='address' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='city' className='form-label'>City</label>
                                <input type='text' className='form-control' id='city' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='state' className='form-label'>State</label>
                                <input type='text' className='form-control' id='state' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='zip' className='form-label'>Zip</label>
                                <input type='text' className='form-control' id='zip' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='country' className='form-label'>Country</label>
                                <input type='text' className='form-control' id='country' />
                            </div>
                        </form>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Payment</h3>
                        <hr />
                        <form>
                            <div className='mb-3'>
                                <label htmlFor='card-name' className='form-label'>Name on Card</label>
                                <input type='text' className='form-control' id='card-name' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='card-number' className='form-label'>Card Number</label>
                                <input type='text' className='form-control' id='card-number' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='card-expiration' className='form-label'>Expiration</label>
                                <input type='text' className='form-control' id='card-expiration' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='card-cvv' className='form-label'>CVV</label>
                                <input type='text' className='form-control' id='card-cvv' />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
}

export default CheckoutPage;