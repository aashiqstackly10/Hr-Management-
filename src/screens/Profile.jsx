import { ChevronLeft, ChevronRight, Mail, ShieldCheck, User, Folder, Banknote, Crown, Settings, Code, FileText, LogOut } from 'lucide-react'
import { Avatar, Verified } from '../ui'

const Group = ({ title, items, go }) => (
  <section className="mt-5 px-4">
    <h3 className="mb-2 text-xs font-semibold text-slate-700">{title}</h3>
    <div className="space-y-4 rounded-2xl bg-[#f3f4f8] p-4">
      {items.map(([I, label, to, color]) => (
        <button key={label} onClick={() => to && go(to)} className="flex w-full items-center gap-3 text-left text-xs text-slate-700">
          <I size={18} className={color || 'text-brand'} /><span className="flex-1">{label}</span>
          {to !== null && <ChevronRight size={18} className="text-slate-400" />}
        </button>
      ))}
    </div>
  </section>
)

export default function Profile({ user, go }) {
  return (
    <div className="min-h-screen bg-white pb-8">
      <div className="relative h-[180px] bg-brand">
        <button onClick={() => go('home')} className="absolute left-4 top-12 grid size-8 place-items-center rounded-full bg-white text-brand"><ChevronLeft size={20} /></button>
        <h1 className="pt-12 text-center font-semibold text-white">My Profile</h1>
        <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-2xl border-2 border-white bg-white"><Avatar size={116} filled={user.done} round={false} /></div>
      </div>
      <div className="-mt-6 rounded-t-3xl bg-white pt-[78px] text-center">
        <p className="flex items-center justify-center gap-1.5 text-lg font-bold text-ink">{user.name} <Verified /></p>
        <p className="text-xs text-brand">{user.done ? user.position : user.email}</p>
      </div>

      {user.done && <Group title="CONTACT" go={go} items={[[Mail, user.email, null], [ShieldCheck, 'Taman Anggrek', null]]} />}
      <Group title="ACCOUNT" go={go} items={[
        [User, user.done ? 'Personal Data' : 'My Work Profile', 'workprofile'],
        [Folder, 'Office Assets', ''], [Banknote, 'Payroll & Tax', ''], [Crown, 'Roles', ''],
      ]} />
      <Group title="SETTINGS" go={go} items={[
        [Settings, 'Change Password', ''], [Code, 'Versioning', ''], [FileText, 'FAQ and Help', ''],
        [LogOut, 'Logout', 'onboarding', 'text-red-500'],
      ]} />
    </div>
  )
}