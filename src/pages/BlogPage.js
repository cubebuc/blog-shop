import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function BlogPage()
{
    return (
        <MainLayout>
            <h1 className='mb-4'>Blog</h1>
            <Stack gap={3}>
                <Container className='bg-primary-subtle rounded p-3'>
                    <h2>First</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta laudantium, ad natus rerum nesciunt quaerat nisi ab molestias assumenda distinctio repellendus quos ducimus perspiciatis autem nam, nobis hic labore veritatis error cumque at officiis! Perspiciatis consectetur nihil soluta! Fugiat dolore repudiandae id nisi asperiores alias optio nemo in rem cum.</p>
                </Container>
                <Container className='bg-primary-subtle rounded p-3'>
                    <h2>Second</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta laudantium, ad natus rerum nesciunt quaerat nisi ab molestias assumenda distinctio repellendus quos ducimus perspiciatis autem nam, nobis hic labore veritatis error cumque at officiis! Perspiciatis consectetur nihil soluta! Fugiat dolore repudiandae id nisi asperiores alias optio nemo in rem cum.</p>
                </Container>
            </Stack>
        </MainLayout>
    );
}

export default BlogPage;;