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

  return (
    <Container1>
      <Header />
      <Container2>
        <TableComponent users={users} />
      </Container2>
    </Container1>
  )
}
