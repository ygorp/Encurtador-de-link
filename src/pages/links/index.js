import { useState, useEffect } from 'react'
import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSave } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@encurtaLink')

      if (result.length === 0) {
        console.log('LISTA VAZIA')
      }
      setMyLinks(result);
    }

    getLinks();

  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#ffffff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      { myLinks.map( link => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={ () => handleOpenLink(link)}>
            <FiLink size={18} color="#ffffff" />
            {link.long_url}
          </button>

          <button className="link-delete">
            <FiTrash size={25} color="#FF5454" />
          </button>
        </div>
      ))}

        { showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false) }
            content={data}
          />
        ) }

    </div>
  )
}
