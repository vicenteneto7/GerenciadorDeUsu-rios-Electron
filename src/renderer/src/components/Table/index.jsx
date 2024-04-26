import PropTypes from 'prop-types'
import { Thead, Table, Tr, Th, Tbody, Td } from './styles'
import { FaTrash, FaEdit } from 'react-icons/fa'

export function TableComponent({ users }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th onlyWeb>ID</Th>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th position={'fixed'}>Actions</Th>
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
              <FaEdit />
            </Td>
            <Td alignCenter width="2%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

TableComponent.propTypes = {
  children: PropTypes.object
}
