import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '../../ui/Avatar'
import { formatShortPostingTime } from '../../utils/helperFuntions'

const BlogsListItem = ({ item }) => {
  const {
    id,
    author: { name },
    title,
    subtitle,
    tag,
    imageUrl,
    createdAt,
  } = item

  return (
    <article className="overflow-hidden rounded-xl bg-base-100 shadow-md transition-all duration-300 hover:drop-shadow-lg">
      <Link to={`/blogs/${id}`}>
        <div className="flex flex-col md:flex-row">
          <img
            src={imageUrl}
            alt={title}
            className="h-56 w-full object-cover md:order-2 md:h-auto md:w-1/4"
          />
          <div className="flex min-h-[300px] flex-grow flex-col justify-between gap-4 p-5">
            <div className="space-y-2">
              <span className="badge badge-secondary badge-outline badge-lg">
                {tag}
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
              <h3 className="text-lg text-gray-600">{subtitle}</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={name} />
                <span className="font-medium text-gray-700">{name}</span>
              </div>
              <div className="text-sm text-gray-500">
                {formatShortPostingTime(createdAt)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

BlogsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    tag: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired, // Assuming createdAt is a string representing the timestamp
  }).isRequired,
}

export default BlogsListItem
