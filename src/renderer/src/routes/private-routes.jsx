
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem('u'))

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      {!rest}
      <Component />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export default PrivateRoute