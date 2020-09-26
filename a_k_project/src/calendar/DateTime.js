import React from 'react';
import { Container ,Row ,Col} from 'reactstrap';
import Calendar from './Calendar';
import Mainclock from './Mainclock'

const DateTime = () => {
    return ( 
        <>
            <Container>
                <Row>
                    <Col md={5}><Mainclock/></Col>

                    <Col md={14}>   <Calendar/> </Col>
                </Row>
            </Container>

        </>
     );
}
 
export default DateTime;