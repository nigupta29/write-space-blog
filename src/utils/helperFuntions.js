export const formatShortPostingTime = postingTime => {
  const currTime = new Date(postingTime)
  const options = { weekday: 'long', month: 'short', day: 'numeric' }
  return currTime.toLocaleDateString(undefined, options)
}

export const formatLongPostingTime = postingTime => {
  const currTime = new Date(postingTime)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return currTime.toLocaleDateString(undefined, options)
}

// Error messages for both registration and login
export const errorMessages = {
  emptyFields: 'Please fill in all the required fields.',
  invalidEmail: 'Invalid email address. Please enter a valid email.',
  passwordLength: 'Password should be at least 6 characters long.',
  passwordMismatch: 'Passwords do not match. Please check and try again.',
  registrationFailed: 'Registration failed. Please try again later.',
  googleAuthFailed: 'Google Auth Failed! Please try again later.',
  emailInUse:
    'The provided email address is already in use. Please use a different email.',
  loginFailed:
    'Login failed. Please check your email and password and try again.',
  userNotFound: 'No user found with the provided email address.',
  wrongPassword: 'Incorrect password. Please try again.',
}

// Email validation
export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Scroll to the top of the page with smooth animation
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
