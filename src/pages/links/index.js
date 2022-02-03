import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color='#ffffff' />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color='#ffffff' />
          https://meulink.com.br
        </button>

        <button className='link-delete'>
          <FiTrash size={25} color='#FF5454' />
        </button>
        
      </div>
    </div>
  )
}
