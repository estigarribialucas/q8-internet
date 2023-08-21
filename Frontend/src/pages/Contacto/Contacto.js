import { Container } from 'react-bootstrap';
import '../../styles/Stylescontacto.css';
import Form from 'react-bootstrap/Form';
import { BiMailSend } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Ayudas from './Ayudas';

const Contacto = (props) => {

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] =useState(initialForm);

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <div>
        <Container className='formulario'>
            <Form action="/contacto" method="post" onSubmit={handleSubmit} >
                <h3 className='titulocontacto'>Contacto <BiMailSend/></h3>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"  name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Nombre Apellido'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" name="mensaje" placeholder='Hola, quisiera contactarme para ...' value={formData.mensaje} onChange={handleChange} rows={3} />
                </Form.Group>
                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
                <Button className='me-md-2' type="submit" value="Send" variant="outline-dark">Enviar</Button>{' '}
                </div>
            </Form>
        </Container>
        <Ayudas/>
        </div>
    )
}
export default Contacto;