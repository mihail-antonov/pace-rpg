import {auth} from "../utils/firebase.jsx"
import {useAuthState, useSignOut} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom"

function Profile() {

  const [user, loading, error] = useAuthState(auth)
  const [signOut, loadingLogout, errorLogout] = useSignOut(auth)
  const navigateTo = useNavigate()

  async function signUserOut() {
    const success = await signOut()

    if (success) {
      navigateTo('/login')
    }
  }

  if (error) {
    return (
      console.log('error: ', error)
    )
  }
  if (loading) {
    return (
      console.log('loading: ', loading)
    )
  }

  return (
    <div>
      <h1>Good evening, {user.displayName || 'stranger'}</h1>
      <button onClick={signUserOut}>Logout?</button>
    </div>
  )
}

export default Profile