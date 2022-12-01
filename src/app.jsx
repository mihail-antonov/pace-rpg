import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {auth} from "./utils/firebase.jsx"

// Pages
import Register from "./auth/register.jsx"
import Login from "./auth/login.jsx"
import Profile from "./auth"
import {useAuthState} from "react-firebase-hooks/auth"

function App() {

  const [user, loading, error] = useAuthState(auth)

  console.log('user: ', user)
  console.log('loading: ', loading)
  console.log('error: ', error)

  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
