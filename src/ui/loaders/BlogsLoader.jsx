import BlogsLoaderItem from './BlogsLoaderItem'

const BlogsLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <BlogsLoaderItem key={index} />
      ))}
    </div>
  )
}

export default BlogsLoader
