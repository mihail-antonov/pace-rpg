import {useState} from "react"
import {auth} from "../utils/firebase.jsx"
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom";

function Login() {

  const navigateTo = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth)

  if (error) {
    console.log('error: ', error)
  }
  if (loading) {
    console.log('loading: ', loading)
  }
  if (user) {
    console.log('user: ', user)
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

      <button onClick={() => signInWithEmailAndPassword(email, password)}>Login!</button>
      <button onClick={() => signInWithGoogle()}>Login with Gulugulu!</button>
    </div>
  )
}

export default Login