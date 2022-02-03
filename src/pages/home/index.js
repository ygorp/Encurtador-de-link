import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu';
import LinkItem from '../../components/LinkItem';

export default function Home() {
  const [link, setLink] = useState('');
  const []

  function clickLink() {
    alert("MEU LINK " + link)
  }


  return(
  <div className="container-home">
    
    <div className="logo">
      <img src="/Logo.png" alt="" />
      <h1>EncurtaLink</h1>
      <span>Cole seu link para encurtar</span>
    </div>

    <div className="area-input">
      <div>
        <FiLink size={24} color="#ffffff" />
        <input placeholder='Cole seu link aqui' value={link} onChange={ (e) => setLink(e.target.value) } />
      </div>

      <button onClick={clickLink}>Encurtar Link</button>

    </div>

    <Menu/>

    <LinkItem/>

  </div>

  )
}