import React  from 'react';
import  Card  from './Hcard';
import { Container, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

import hotDogsReduser from "../redusers/hotDogsReduser";

 const hotDogs = ({HotDogs})=> {
     console.log(HotDogs);

    return (
        <div className="container">
            <Container>


                <Row className="my-3">
                    <Col className="mx-1">
                        <Card />
                    </Col>
                    <Col className="mx-1">
                        <Card />
                    </Col>
                    <Col className="mx-1">
                        <Card />
                    </Col>
                    <Col className="mx-1">
                        <Card/>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col className="mx-1">
                        <Card />
                    </Col>
                    <Col className="mx-1">
                        <Card />
                    </Col>
                    <Col className="mx-1">
                        <Card />
                    </Col>
                    <Col className="mx-1">
                        <Card />
                    </Col>
                </Row>
               
            </Container>

        </div>
    );
}

const mapStateToProps = state => ({
   HotDogs: state.hotDogsReduser.HotDogs
});

export default connect (mapStateToProps, {})(hotDogs) ;