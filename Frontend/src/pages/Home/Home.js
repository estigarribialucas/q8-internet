import { Container } from 'react-bootstrap';
import Testimonio1 from '../../components/img/Testimonio1.jpg';
import '../../styles/Styleshome.css';
import Card from 'react-bootstrap/Card';
import Planes from './Planes';
import Carrusel from './Carrusel';




function Home() {
    return (
        <Container>
            {/* Carousel de imagenes */}
            <Carrusel/>
            {/* Planes de internet */}
             <Planes/>
            {/* Linea divisoria */}
            <div className='linea'></div>
            {/* Comentarios */}
            <Card.Body>
                <Container className='testimonios'>
                    <h2 className='titulo'>Testimonios</h2>
                    <blockquote className="blockquote mb-0">
                        <img alt="" className='rounded-circle' style={{ width: '16rem' }} src={Testimonio1} />
                        <p className='my-3'>
                            {' '}
                            La verdad es un servicio exelente. Los chicos de soporte son super amables y atentos.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Comentario de Whatsapp <cite title="Source Title">Victoria Mejia</cite>
                        </footer>
                    </blockquote>
                </Container>
            </Card.Body>
            {/* Linea divisoria */}
            {/* <div className='linea'></div> */}



        </Container>
    );
}


// const Home = (props) => {
//     return (
// <h1>HOla</h1>
//     )
// }
export default Home;