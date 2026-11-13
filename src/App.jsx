import { useState } from 'react'
import Onboarding from './screens/Onboarding'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import Profile from './screens/Profile'
import WorkProfile from './screens/WorkProfile'

export default function App() {
  const [screen, setScreen] = useState('onboarding')
  const [welcome, setWelcome] = useState(false)
  const [user, setUser] = useState({
    name: 'Tonald Drump',
    email: 'Tonald@work.com',
    position: '',
    dob: '',
    done: false,
  })

  const go = (to, opts = {}) => {
    setWelcome(!!opts.welcome)
    setScreen(to)
  }

  const screens = {
    onboarding: <Onboarding go={go} />,
    signup: <SignUp go={go} />,
    home: <Home user={user} welcome={welcome} setWelcome={setWelcome} go={go} />,
    profile: <Profile user={user} go={go} />,
    workprofile: <WorkProfile user={user} setUser={setUser} go={go} />,
  }

  return (
    <div className="min-h-screen flex justify-center bg-neutral-200">
      <div className="relative w-full max-w-[390px] bg-white">
        {screens[screen]}
      </div>
    </div>
  )
}