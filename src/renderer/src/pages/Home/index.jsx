import { useEffect, useState } from 'react'
import { Container1, Li, Ul } from './styles'
import { ApiCI4 } from '../../services/api'

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
      kkkkkkkk
      <Ul style={{ background: 'red' }}>
      {users.map((user) => (
            <Li key={user.id}>
              {user.id} - {user.email} - {user.name}
            </Li>
          ))}
      </Ul>
    </Container1>
  )
}
