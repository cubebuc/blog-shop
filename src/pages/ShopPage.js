import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../components/ItemCard';
import shop from '../resources/shop.json';

function ShopPage()
{
    return (
        <MainLayout>
            <Row>
                {shop.items.map(item => (
                    <Col key={item.id} xs={12} md={5} lg={4} xxl={3}>
                        <ItemCard item={item} />
                    </Col>
                ))}
            </Row>
        </MainLayout>
    );
}

export default ShopPage;