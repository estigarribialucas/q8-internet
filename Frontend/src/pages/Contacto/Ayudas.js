import { FaHandshake } from 'react-icons/fa';
import { PiDownloadBold } from 'react-icons/pi';
import { BsModem } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { CiDiscount1 } from 'react-icons/ci';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../styles/Stylescontacto.css';
import { Link } from 'react-router-dom';
import { CardImg } from 'react-bootstrap';
import icono from '../../components/img/icono.png'



const Ayudas = (props) => {
    return (
        <CardGroup className='Planes'>
            <Card className='mx-auto border-secondary'>
                <Card.Header className='bg-success-subtle'>¿Sos parte de Q8?</Card.Header>
                <Card.Body>
                    <Card.Text className='text-muted '>
                        Gestioná todos tus servicios en la App de Q8
                    </Card.Text>
                    <div className='linea1'></div>
                    <CardImg src={icono} />
                </Card.Body>
                <Card.Footer className='bg-success-subtle'>
                    <Link className='NavB' to="/Contacto"><FaHandshake /> Solicitar</Link>
                </Card.Footer>
            </Card>
            <Card className='mx-auto border-secondary'>
                <Card.Header className='bg-success-subtle'>INTERNET 60 MEGAS</Card.Header>
                <Card.Body>
                    <Card.Title>$3000 final por mes</Card.Title>
                    <Card.Text className='text-muted '>
                        Primeros 6 meses con descuento de $4500 a $3000.
                    </Card.Text>
                    <div className='linea1'></div>
                    <Card.Text>
                        <PiDownloadBold /> Velocidad de bajada hasta 60 Megas<br />
                        <FiMonitor /> Televisión sin cargo por 6 meses<br />
                        <BsModem /> Módem WiFi<br />
                        <CiDiscount1 /> Descuento Conexión Total<br />
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-success-subtle'>
                    <Link className='NavB' to="/Contacto"><FaHandshake /> Solicitar</Link>
                </Card.Footer>
            </Card>
            <Card className='mx-auto border-secondary'>
                <Card.Header className='bg-success-subtle'>INTERNET 100 MEGAS</Card.Header>
                <Card.Body>
                    <Card.Title>$4500 final por mes</Card.Title>
                    <Card.Text className='text-muted '>
                        Primeros 6 meses con descuento de $5500 a $4500.
                    </Card.Text>
                    <div className='linea1'></div>
                    <Card.Text>
                        <PiDownloadBold /> Velocidad de bajada hasta 100 Megas<br />
                        <FiMonitor /> Televisión sin cargo por 12 meses<br />
                        <BsModem /> Módem WiFi<br />
                        <CiDiscount1 /> Descuento Conexión Total<br />
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-success-subtle'>
                    <Link className='NavB' to="/Contacto"><FaHandshake /> Solicitar</Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}
export default Ayudas;