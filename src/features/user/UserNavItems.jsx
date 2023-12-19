import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import useMoveToHome from '../../hooks/useMoveToHome'
import Avatar from '../../ui/Avatar'

const UserNavItems = () => {
  const {
    currentUser: { displayName },
    logout,
  } = useAuth()

  const moveHome = useMoveToHome()

  const handleLogout = () => {
    logout()
    moveHome()
  }

  return (
    <div className="flex-none gap-2">
      <Link to="/users/create-blog" className="btn btn-ghost">
        <i className="fa-solid fa-pen-nib"></i>
        Write
      </Link>
      <div className="dropdown dropdown-end">
        <button className="btn btn-circle btn-ghost">
          <Avatar name={displayName} />
        </button>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box border border-base-200 bg-base-100 p-2 shadow-xl"
        >
          <li className="menu-title mb-3 border-b border-base-300 text-base-content">
            {displayName}
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserNavItems
