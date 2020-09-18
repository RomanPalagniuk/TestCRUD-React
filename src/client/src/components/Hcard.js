import React  from 'react';
import { Card, Button } from 'react-bootstrap';

const Hcard = ()=> {
    return (

            <Card >
                <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/hot-dog-mustard-ketchup-side-260nw-683413162.jpg" />
                <Card.Body>
                    <Card.Title>Hot Dog name</Card.Title>

                    <Card.Text>
                        Some recipe or hot dog description.
                    </Card.Text>
                    <Button variant="dark" size="lg" block href="/hotdog">Edit</Button>
                </Card.Body>
            </Card>

    );
}

export default Hcard;