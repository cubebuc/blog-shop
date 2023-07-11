import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from '../components/Navbar';

function MainLayout({ children })
{
    return (
        <div>
            <Navbar />
            <Container className='mt-4'>{children}</Container>
        </div>
    );
}

export default MainLayout;