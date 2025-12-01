import { useParams, useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import './Form.css'
import { createItem, getItems, updateItem } from '../../services/List'

export default function Form() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState('')

  useEffect(() => {
    async function fetchData() {
      if (!isEdit) {
        setLoading(false)
        return
      }

      try {
        const items = await getItems()
        const itemToEdit = items.find(item => String(item.id) === id)

        if (!itemToEdit) {
          setError('Item não encontrado')
          return
        }
        setTitle(itemToEdit.title)
        setDescription(itemToEdit.description ?? '')
      } catch {
        setError('Erro ao carregar item')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id, isEdit])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setSuccess('')

    if (!title.trim()) {
      setError('Titulo é obrigatorio')
      return
    }
    setSubmitting(true)

    try {
      if (isEdit) {
        await updateItem(id as string, {
          title,
          description,
        })
        setSuccess('Item cadastrado com sucesso')
        setTitle('')
        setDescription('')
      } else {
        await createItem({
          title,
          description,
        })
        setSuccess('Item cadastrado com sucesso')
        setTitle('')
        setDescription('')
      }

      navigate('/')
    } catch {
      setError('Erro ao salvar o item, tente novamente')
    } finally {
      setSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="form-div">
        <p>Carregando ...</p>
      </div>
    )
  }

  return (
    <div className="form-div">
      <h2>{isEdit ? 'Editar item' : 'Novo item'}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title"></label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Digite o titulo do filme"
          />
        </div>

        <div className="form-control">
          <label htmlFor="description"></label>
          <textarea
            id="description"
            className="description"
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder="Digite a descrição do filme"
          />
        </div>

        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </div>
  )
}
