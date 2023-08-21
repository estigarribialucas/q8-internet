import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../../components/novedades/NovedadItem';
import '../../styles/Stylesnovedades.css';

const Novedades = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargaNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargaNovedades();
    }, []);

    return (
        <Container>
            <h3 className='descubri'>Noticias</h3>
            {
                loading ? (
                    <p>Cargando...</p>
                ): (
                    novedades.map(item => <NovedadItem key = {item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </Container>
    )
}
export default Novedades;