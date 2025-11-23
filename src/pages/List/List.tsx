import { useEffect, useState } from 'react'
import './List.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import { getItems } from '../../services/List'
import type { Item } from '../../services/List'

export default function List() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getItems()
        setItems(data)
      } catch (err) {
        setError('Erro ao carregar Itens')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="list">
        <Header />
        <p>Carregando...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="list">
        <Header />
        <p>{error}</p>
      </div>
    )
  }
  return (
    <div className="list">
      <Header />
      <h2>Lista de itens</h2>
      <div>
        {items.map(item => {
          const cardKey = item.id ?? `item-${item.title}`
          return (
            <Card
              key={cardKey}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}
