import PropTypes from 'prop-types'
import { createContext, useContext } from 'react'
import { createBlogApi } from '../services/apiFirestore'

const BlogsContext = createContext()

export const BlogsProvider = ({ children }) => {
  const createBlog = async newBlog => {
    const data = await createBlogApi(newBlog)
    console.log(data)
  }

  return (
    <BlogsContext.Provider value={{ createBlog }}>
      {children}
    </BlogsContext.Provider>
  )
}

BlogsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useBlogs = () => useContext(BlogsContext)
