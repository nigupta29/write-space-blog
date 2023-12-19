/* eslint-disable react-refresh/only-export-components */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from '../firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const loginWithEmailAndPwd = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }
  const signup = async newUser => {
    const { name, email, password } = newUser
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateName(name, user)
  }

  const updateName = async (name, user = currentUser) => {
    await updateProfile(user, { displayName: name })
  }

  const loginWithGoogle = async () =>
    await signInWithPopup(auth, googleProvider)

  const logout = async () => await signOut(auth)

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loginWithEmailAndPwd,
        signup,
        loginWithGoogle,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(AuthContext)
