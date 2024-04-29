import { useEffect, useState } from 'react'
import { Container1, Container2 } from './styles'
import { ApiCI4 } from '../../services/api'
import { TableComponent } from '../../components/Table'
import { Header } from '../../components/Header'
import { Container } from '../../components/Header/styles'

export function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      await ApiCI4.get('users')
        .then((payload) => {
          console.log(payload.data)

          setUsers(payload.data)

          console.log('deu certo')
        })
        .catch((error) => {
          console.log(`Erro ao buscar dados, erro: ${error}`)
        })
    }

    loadUsers()
  }, [])

  const handleDelete = async (id) => {
    await ApiCI4.delete(`/usuarios/${id}`)
      .then((data) => {
        console.log(data)

        console.log('deu certo aqui')
        const newArray = users.filter((user) => user.id !== id)
        console.log(newArray, 'erro')
        setUsers(newArray)
      })
      .catch((error) => {
        console.log('erro ao deletar, erro:', error)
      })
  }


  return (
    <Container1>
      <Container2>
        <TableComponent setUsers={setUsers} users={users} handleDelete={handleDelete} />
      </Container2>
    </Container1>
  )
}
