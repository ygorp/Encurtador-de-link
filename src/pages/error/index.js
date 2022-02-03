import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
  return(
    <div className='container-error'>
      <img src="notfound.png" alt="pagina de erro" />
      <h1>Página não encontarda!</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div>
  )
}