import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemCard({ item, onAddToCart })
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