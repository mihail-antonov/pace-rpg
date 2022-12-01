import {useState} from "react"
import {auth} from "../utils/firebase.jsx"
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom";

function Register() {

  const navigateTo = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

  if (error) {
    return (
      console.log('error: ', error)
    )
  }
  if (loading) {
    return (
      <p>loading</p>
    )
  }
  if (user) {
    navigateTo('/profile')
  }

  return (
    <div>
      <label htmlFor="email">Email
        <input id="email" name="email" onChange={(event) => setEmail(event.target.value)}/>
      </label>

      <label htmlFor="password">Password
        <input id="password" name="password" onChange={(event) => setPassword(event.target.value)}/>
      </label>

      <button onClick={() => createUserWithEmailAndPassword(email, password)}>Register?</button>
    </div>
  )
}

export default Register