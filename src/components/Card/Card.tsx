import './Card.css'

type CardsProps = {
  title: string
  description?: string
}

export default function Card({ title, description }: CardsProps) {
  return (
    <article className="card_article">
      <h2 className="card_title">{title}</h2>
      {description && <p> {description}</p>}
    </article>
  )
}
