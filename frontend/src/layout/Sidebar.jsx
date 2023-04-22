
import { Container, Row, Col, ListGroup } from "react-bootstrap"

import { Link } from "react-router-dom"

import './sidebar.css'

const Sidebar = () => {
    return (
        <Container className={'sidebar-container'}>
                <Row>
                    <Col>upper one</Col>
                </Row>
                <Row>
                    <ListGroup className={'menu-container'}>
                        <Link to='/'><ListGroup.Item>Home</ListGroup.Item></Link>
                        <Link to='/messages'><ListGroup.Item>Messages</ListGroup.Item></Link>
                    </ListGroup>
                </Row>
        </Container>
    )
}

export default Sidebar;