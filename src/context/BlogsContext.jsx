import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { createBlogApi, getBlogsApi } from '../services/apiFirestore'

const BlogsContext = createContext()

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState([])

  const createBlog = async newBlog => {
    const data = await createBlogApi(newBlog)
    setBlogs(state => [data, ...state])
  }

  const getBlogs = async () => {
    setLoading(true)
    const data = await getBlogsApi()
    setBlogs(data)
    setLoading(false)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <BlogsContext.Provider value={{ loading, blogs, createBlog }}>
      {children}
    </BlogsContext.Provider>
  )
}

BlogsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useBlogs = () => useContext(BlogsContext)
