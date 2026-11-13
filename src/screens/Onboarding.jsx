import { Phone, Btn } from '../ui'

export default function Onboarding({ go }) {
  return (
    <Phone bg="bg-white">
      <div className="h-[520px] bg-gradient-to-b from-[#7c5cff] to-white grid place-items-center px-8">
        <div className="w-full rounded-2xl bg-white p-5 shadow-xl -rotate-6">
          <p className="font-semibold">Today Task</p>
          <p className="text-xs text-slate-500">The tasks assigned to you for today</p>
          <div className="mt-3 h-24 rounded-xl bg-violet-100" />
        </div>
      </div>
      <div className="px-6 text-center -mt-2">
        <h1 className="text-[26px] leading-tight font-bold text-ink">Navigate Your Work Journey Efficient & Easy</h1>
        <p className="mt-3 text-sm text-slate-500">Increase your work management & career development radically</p>
        <div className="mt-8 space-y-3">
          <Btn onClick={() => go('signup')}>Sign In</Btn>
          <Btn variant="outline" onClick={() => go('signup')}>Sign Up</Btn>
        </div>
      </div>
    </Phone>
  )
}