
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Header } from '../components/Header'

function PrivateRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem('u'))

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
    <Header />
      {!rest}
      <Component />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export default PrivateRoute