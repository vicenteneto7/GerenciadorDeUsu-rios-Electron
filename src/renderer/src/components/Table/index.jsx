import PropTypes from 'prop-types'
import { Thead, Table, Tr, Th, Tbody, Td } from './styles'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useState } from 'react'
import { ApiCI4 } from '../../services/api'

import { useNavigate } from 'react-router-dom'


export function TableComponent({ users, handleDelete }) {
  const [edit, setEdit] = useState(null)

  const navigate = useNavigate()



  function editUser(user) {
    navigate('/editar-usuario', { state: user })
  }

  
  return (
    <Table>
      <Thead>
        <Tr>
          <Th onlyWeb>ID</Th>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item) => (
          <Tr key={item.id}>
            <Td width="20%" onlyWeb>
              {item.id}
            </Td>
            <Td width="20%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>

            <Td alignCenter width="2%">
              <FaEdit onClick={() => editUser(item)} />
            </Td>
            <Td alignCenter width="2%" onClick={() => handleDelete(item.id)}>
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

TableComponent.propTypes = {
  users: PropTypes.object,
  handleDelete: PropTypes.func,
}
