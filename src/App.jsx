import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateBlog from './pages/CreateBlog'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AppLayout from './ui/AppLayout'
import PageNotFound from './ui/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="users">
            <Route path="create-blog" element={<CreateBlog />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
