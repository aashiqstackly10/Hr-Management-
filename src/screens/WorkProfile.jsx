import { useState } from 'react'
import { ChevronLeft, ChevronDown, User, CalendarDays, IdCard, Upload, UserRound } from 'lucide-react'
import { Avatar, Btn, Field, Sheet } from '../ui'

export default function WorkProfile({ user, setUser, go }) {
  const [f, setF] = useState({ first: user.name.split(' ')[0], last: user.name.split(' ')[1] || '', dob: user.dob || '', position: user.position || '' })
  const [sheet, setSheet] = useState(null)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const save = () => {
    setUser({ ...user, name: `${f.first} ${f.last}`, dob: f.dob, position: f.position, done: true })
    setSheet('done')
  }

  return (
    <div className="min-h-screen bg-[#f1f1f7] pb-28">
      <header className="relative flex h-24 items-end justify-center bg-white pb-3 shadow-sm">
        <button onClick={() => go('profile')} className="absolute bottom-2.5 left-6 grid size-9 place-items-center rounded-full bg-violet-100 text-brand"><ChevronLeft size={20} /></button>
        <h1 className="font-semibold text-ink">My Work Profile</h1>
      </header>

      <section className="mx-3 mt-3 rounded-xl bg-white p-4">
        <h2 className="font-semibold text-ink">Personal Data Information</h2>
        <p className="text-xs text-slate-500">Your personal data information</p>
        <div className="relative mx-auto mt-4 w-fit">
          <Avatar size={100} filled={!!f.position} round={false} />
          <span className="absolute -right-3 -top-3 grid size-8 place-items-center rounded-full bg-brand text-white"><Upload size={16} /></span>
        </div>
        <p className="mt-3 text-center text-xs font-medium">Upload Photo</p>
        <p className="mb-4 text-center text-[10px] text-slate-400">Format should be in .jpeg .png atleast<br />800×800px and less than 5MB</p>

        <div className="space-y-3.5">
          <Field label="First Name" icon={User} placeholder="Tonald" value={f.first} onChange={set('first')} />
          <Field label="Last Name" icon={User} placeholder="Drump" value={f.last} onChange={set('last')} />
          <Field label="Date of Birth" icon={CalendarDays} type="date" value={f.dob} onChange={set('dob')} />
          <label className="block">
            <span className="text-xs text-slate-600">Position</span>
            <div className="relative mt-1.5 flex h-[46px] items-center gap-3 rounded-xl border border-slate-400/60 bg-white px-3">
              <IdCard size={18} className="text-brand" />
              <select value={f.position} onChange={set('position')} className="flex-1 appearance-none bg-transparent text-sm outline-none">
                <option value="">Select Position</option>
                <option>Junior Full Stack Developer</option>
                <option>Senior Full Stack Developer</option>
                <option>UI/UX Designer</option>
                <option>Project Manager</option>
              </select>
              <ChevronDown size={18} className="pointer-events-none text-brand" />
            </div>
          </label>
        </div>
      </section>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 bg-white/90 px-4 pb-6 pt-3 backdrop-blur">
        <Btn onClick={() => setSheet('confirm')}>Update Profile</Btn>
      </div>

      <Sheet open={sheet === 'confirm'} onClose={() => setSheet(null)} icon={UserRound} title="Update Profile">
        <p className="mt-3 mb-6 text-sm text-slate-700">Are you sure you want to update your profile? This will help us improve your experience and provide personalized features.</p>
        <div className="space-y-3">
          <Btn onClick={save}>Yes, Update Profile</Btn>
          <Btn variant="outline" onClick={() => setSheet(null)}>No, Let me check</Btn>
        </div>
      </Sheet>
      <Sheet open={sheet === 'done'} onClose={() => setSheet(null)} icon={UserRound} title="Profile Updated!">
        <p className="mt-3 mb-6 px-4 text-sm text-slate-700">Your profile has been successfully updated. We're excited to see you take this step!</p>
        <Btn onClick={() => go('profile')}>Visit My Profile</Btn>
      </Sheet>
    </div>
  )
}