const API_URL = 'http://localhost:3001'

export type Item = {
  id?: number
  title: string
  description: string
}

export async function getItems(): Promise<Item[]> {
  const response = await fetch(`${API_URL}/items`)
  if (!response.ok) {
    throw new Error('Erro ao criar item')
  }
  return response.json()
}

export async function createItem(data: Omit<Item, 'id'>): Promise<Item> {
  const response = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error('Erro ao criar item')
  }
  return response.json()
}

export async function updateItem(
  id: number,
  data: Omit<Item, 'id'>,
): Promise<Item> {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error('Erro ao atualizar item')
  }
  return response.json()
}

export async function deleteItem(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Erro ao deletar item')
  }
}

export { API_URL }
