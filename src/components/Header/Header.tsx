import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header_Div">
      <h1 className="titulo_catalogo">Meu catálogo</h1>

      <Link to="/form">
        <button type="button">Adocionar filme</button>
      </Link>
    </header>
  )
}
