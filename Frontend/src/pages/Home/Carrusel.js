import Carousel from 'react-bootstrap/Carousel';
import Carrusel1 from '../../components/img/Carrusel1.jpg';
import Carrusel2 from '../../components/img/Carrusel2.jpg';
import Carrusel3 from '../../components/img/Carrusel3.jpg';
import Carrusel4 from '../../components/img/Carrusel4.jpg';
import Carrusel5 from '../../components/img/Carrusel5.jpg';
import '../../styles/Styleshome.css'

const Carrusel = (props) => {
    return (
        <div className='Carrusel'>
            <Carousel>
                <Carousel.Item>
                    <img alt="" className='imgcarrusel img-fluid ' src={Carrusel1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" className='imgcarrusel img-fluid' src={Carrusel2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" className='imgcarrusel img-fluid' src={Carrusel3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" className='imgcarrusel img-fluid' src={Carrusel4} />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" className='imgcarrusel img-fluid' src={Carrusel5} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carrusel;