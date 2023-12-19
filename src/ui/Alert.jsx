import PropTypes from 'prop-types'

const Alert = ({ type, message }) => {
  const alertStyle = `alert${type ? ` alert-${type}` : ''}`

  return (
    <div role="alert" className={alertStyle}>
      <i className="fas fa-exclamation-triangle"></i>
      <span>{message}.</span>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'success']),
}

export default Alert
