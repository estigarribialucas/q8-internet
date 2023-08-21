import Maps1 from "../../components/img/Maps1.jpg";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import '../../styles/Stylescobertura.css';

const Cobertura = (props) => {
    return (
        <Container className="Maps1">
            <Card border="dark" style={{ width: '58rem' }}>
                <Card.Header><h3>Cobertura actual</h3></Card.Header>
                <img alt="" className='img ' src={Maps1} />
                <Card.Body>
                    <Card.Title>Estado: EN EXPANCION</Card.Title>
                    <Card.Text>
                        Actualmente estamos con proyectos para poder llegar a tu casa para ofrecerte la mejor coneccion con la mejor estabilidad del mercado.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Cobertura;