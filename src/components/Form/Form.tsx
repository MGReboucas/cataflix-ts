import type { FormEvent } from 'react'
import { useState } from 'react'
import './Form.css'
import { createItem } from '../../services/List'

export default function Form() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState('')

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
      await createItem({
        title,
        description,
      })

      setSuccess('Item cadastrado com sucesso')
      setTitle('')
      setDescription('')
    } catch {
      setError('Erro ao salvar o item, Tente novamente')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="form-div">
      <h2 className="">Novo Item</h2>

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
