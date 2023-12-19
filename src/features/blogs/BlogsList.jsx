import { useBlogs } from '../../context/BlogsContext'
import BlogsLoader from '../../ui/loaders/BlogsLoader'
import BlogsListItem from './BlogsListItem'

const BlogsList = () => {
  const { loading, blogs } = useBlogs()

  if (loading) return <BlogsLoader />

  return (
    <div className="my-10 grid grid-cols-2 gap-10 xl:grid-cols-3">
      {blogs?.map(item => (
        <BlogsListItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default BlogsList
