import './App.css'

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Hooks
import { useAuth } from './hooks/useAuth'

//Pages
import Home from './pages/Auth/Login'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const { auth, loading } = useAuth()

  console.log(loading)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!auth ? <Home /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
