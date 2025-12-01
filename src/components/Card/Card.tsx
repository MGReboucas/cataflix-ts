import { Link } from 'react-router-dom'
import './Card.css'

type CardsProps = {
  id: number
  title: string
  description?: string
  onDelete?: (id: number) => void
}

export default function Card({ id, title, description, onDelete }: CardsProps) {
  return (
    <article className="card_article">
      <h2 className="card_title">{title}</h2>
      {description && <p className="card_description"> {description}</p>}

      <div className="card_div">
        <Link to={`/form/${id}`}>Editar</Link>
        {onDelete && (
          <button type="button" onClick={() => onDelete(id)}>
            Excluir
          </button>
        )}
      </div>
    </article>
  )
}
