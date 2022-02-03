import './menu.css';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu() {
  return(
    <div className='menu'>
      <a className='social' href="https://api.whatsapp.com/send?phone=5527988116981">
        <BsWhatsapp color='green' size={24} />
      </a>

      <a className='social' href="https://instagram.com/homecellsd?utm_medium=copy_link">
        <BsInstagram color='violet' size={24} />
      </a>
      <Link className='menu-item' to="/links">
        Meus Links
      </Link>
    </div>
  )
}