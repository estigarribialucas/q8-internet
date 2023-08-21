
import '../../styles/Stylesfooter.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className='Linea'></div>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><p className="nav-link px-2 text-muted">Internet is Future</p></li>
      </ul>
      <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
    </footer>
  )
}
export default Footer;