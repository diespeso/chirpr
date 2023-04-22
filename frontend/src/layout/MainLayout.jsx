import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const MainLayout = (props) => {
    
    return (
        <Container>
            <Row>
                <Col sm={2}><Sidebar></Sidebar></Col>
                <Col sm={8}>{props.children}</Col>
            </Row>
        </Container>
    )
};

export default MainLayout;