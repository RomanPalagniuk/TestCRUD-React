import React  from 'react';
import {Form, Button, Container, Col, Row, Card} from "react-bootstrap";



 const Hot = ()=> {
    return (
        <div className="container">

        	 <img src="https://image.shutterstock.com/image-photo/hot-dog-mustard-ketchup-side-260nw-683413162.jpg" />

            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Hot Dog name" />
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="$1" />
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Some recipe or hot dog description." />
                </Form.Group>

                <Button variant="dark" size="lg" block type="submit">
                    Update
                </Button>
                <Button variant="danger" size="lg" block type="submit">
                    Delete
                </Button>
            </Form>
        </div>
    );
}

export default Hot;