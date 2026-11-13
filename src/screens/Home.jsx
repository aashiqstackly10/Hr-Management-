import { MessageSquare, Bell, Video, Clock, Zap, House, CalendarDays, ClipboardList, Receipt, Layers, UserRound } from 'lucide-react'
import { Avatar, Verified, Sheet, Btn } from '../ui'

const Empty = ({ title, text }) => (
  <div className="py-6 text-center">
    <div className="mx-auto mb-4 size-24 rounded-xl bg-violet-100" />
    <p className="font-semibold text-ink">{title}</p>
    <p className="mt-1 px-2 text-[11px] text-slate-400">{text}</p>
  </div>
)

const Card = ({ title, count, sub, children }) => (
  <section className="mx-3 mt-3 rounded-xl bg-white p-4">
    <h2 className="font-semibold text-ink">{title} {count && <span className="ml-1 rounded bg-violet-100 px-1.5 text-xs text-brand">{count}</span>}</h2>
    <p className="text-xs text-slate-500">{sub}</p>
    <div className="mt-3 space-y-3">{children}</div>
  </section>
)

const Meeting = ({ name }) => (
  <div className="rounded-xl border border-slate-200 p-3">
    <div className="flex items-center gap-2">
      <span className="grid size-7 place-items-center rounded-full bg-brand text-white"><Video size={14} /></span>
      <span className="flex-1 text-sm font-medium">{name}</span>
      <span className="flex items-center gap-1 text-[11px] text-slate-400"><Clock size={12} />01:30 AM - 02:00 AM</span>
    </div>
    <div className="mt-3 flex items-center justify-between">
      <div className="flex -space-x-1.5">{['bg-pink-200', 'bg-green-200', 'bg-sky-200'].map((c) => <span key={c} className={`size-6 rounded-full border-2 border-white ${c}`} />)}</div>
      <button className="rounded-full bg-brand px-4 py-1.5 text-[11px] font-medium text-white">Join Meet</button>
    </div>
  </div>
)

export default function Home({ user, welcome, go, setWelcome }) {
  const nav = [House, CalendarDays, ClipboardList, Receipt, Layers]
  return (
    <div className="min-h-screen bg-[#f1f1f7] pb-24">
      <header className="flex items-center gap-3 bg-white px-3 pb-3 pt-12">
        <button onClick={() => go('profile')}><Avatar filled={user.done} /></button>
        <div className="flex-1">
          <p className="flex items-center gap-1 text-sm font-semibold text-ink">{user.name} <Verified /></p>
          <p className="text-xs text-brand">{user.done ? user.position : user.email}</p>
        </div>
        {[MessageSquare, Bell].map((I, i) => <span key={i} className="grid size-10 place-items-center rounded-full bg-violet-100 text-brand"><I size={18} /></span>)}
      </header>

      <div className="mx-3 mt-3 rounded-xl bg-brand p-4 text-white">
        <h2 className="text-lg font-semibold">My Work Summary</h2>
        <p className="text-xs opacity-90">Today task & presence activity</p>
      </div>

      {user.done ? (
        <>
          <Card title="Today Meeting" count="2" sub="Your schedule for the day"><Meeting name="Townhall Meeting" /><Meeting name="Dashboard Report" /></Card>
          <Card title="Today Task" count="1" sub="The tasks assigned to you for today">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="flex items-center gap-2 text-sm font-medium"><span className="grid size-7 place-items-center rounded-full bg-brand text-white"><Zap size={14} /></span>Wiring Dashboard Analytics</p>
              <div className="mt-2 flex gap-2 text-xs"><span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">In Progress</span><span className="rounded-full bg-red-500 px-3 py-1 text-white">High</span></div>
              <div className="mt-3 h-1.5 rounded-full bg-slate-100"><div className="h-full w-[88%] rounded-full bg-brand" /></div>
            </div>
          </Card>
        </>
      ) : (
        <>
          <Card title="Today Meeting" sub="Your schedule for the day"><Empty title="No Meeting Available" text="It looks like you don't have any meetings scheduled at the moment. This space will be updated as new meetings are added!" /></Card>
          <Card title="Today Task" sub="The tasks assigned to you for today"><Empty title="No Tasks Assigned" text="It looks like you don't have any tasks assigned to you right now. Don't worry, this space will be updated as new tasks become available." /></Card>
        </>
      )}

      <nav className="fixed bottom-0 left-1/2 flex h-[76px] w-full max-w-[390px] -translate-x-1/2 justify-around bg-[#1f2023] pt-4 text-white/70">
        {nav.map((I, i) => <I key={i} size={24} className={i === 0 ? 'text-white' : ''} />)}
      </nav>

      <Sheet open={welcome} onClose={() => setWelcome(false)} icon={UserRound} title="Welcome To Work Mate!">
        <p className="mt-3 mb-6 text-sm text-slate-700">To enhance your user experience, please set up your profile first. This will help us tailor the app to your needs and ensure you get the most out of its features!</p>
        <div className="space-y-3">
          <Btn onClick={() => { setWelcome(false); go('workprofile') }}>Set Up My Profile</Btn>
          <Btn variant="outline" onClick={() => setWelcome(false)}>Explore The App First</Btn>
        </div>
      </Sheet>
    </div>
  )
}