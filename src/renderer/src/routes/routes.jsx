import { Route, Routes } from 'react-router-dom'

import { Login } from '../pages/Login/index.jsx'
import { Cadastro } from '../pages/Cadastro/index.jsx'
import { Home } from '../pages/Home/index.jsx'
import PrivateRoute from './private-routes.jsx'
import { FirstLogin } from '../pages/FirstLogin/index.jsx'
import { EditUser } from '../components/EditUser/index.jsx'

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar-usuario" element={<Cadastro />} />
      <Route path="/first-login" element={<FirstLogin />} />
      <Route path="/" element={<PrivateRoute component={Home} />} />
      <Route path="/editar-usuario" element={<PrivateRoute component={EditUser} />} />

    </Routes>
  )
}

export default MyRouter
