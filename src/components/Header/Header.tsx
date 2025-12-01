import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="titulo_catalogo">Meu catálogo</h1>

      <Link to="/form">
        <button className="botao_adicionar" type="button">
          Adicionar filme
        </button>
      </Link>
    </header>
  )
}
