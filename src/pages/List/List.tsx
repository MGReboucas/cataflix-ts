import { useEffect, useState } from 'react'
import './List.css'
import Card from '../../components/Card/Card'
import { getItems, deleteItem } from '../../services/List'
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

  async function handleDelete(id: number) {
    try {
      await deleteItem(id)
      setItems(prevItems => prevItems.filter(item => item.id !== id))
    } catch {
      setError('Erro ao deletar item')
    }
  }

  if (loading) {
    return (
      <div className="list-wrapper">
        <p>Carregando...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="list-wrapper">
        <p>{error}</p>
      </div>
    )
  }
  return (
    <div className="list-wrapper">
      <h2 className="list-title">Bem-vindo ao catálogo!</h2>
      <div className="list-conteiner">
        {items.map(item => {
          const cardKey = item.id ?? `item-${item.title}`
          return (
            <Card
              key={cardKey}
              id={item.id!}
              title={item.title}
              description={item.description}
              onDelete={handleDelete}
            />
          )
        })}
      </div>
    </div>
  )
}
