import { BadgeCheck } from 'lucide-react'

export const Phone = ({ children, bg = 'bg-[#faf9ff]' }) => (
  <div className="min-h-screen flex justify-center">
    <div className={`relative w-full max-w-[390px] min-h-screen overflow-hidden ${bg}`}>{children}</div>
  </div>
)

export const Btn = ({ children, variant = 'solid', ...p }) => (
  <button
    {...p}
    className={`w-full h-[50px] rounded-full text-sm font-semibold transition active:scale-[.98] ${
      variant === 'solid'
        ? 'text-white bg-gradient-to-b from-[#8b5cf6] to-[#5b2fe0] shadow-lg shadow-violet-300'
        : 'text-brand border border-brand bg-white'
    }`}
  >
    {children}
  </button>
)

export const Field = ({ label, icon: Icon, right, ...p }) => (
  <label className="block">
    <span className="text-xs text-slate-600">{label}</span>
    <div className="mt-1.5 flex items-center gap-3 h-[46px] px-3 rounded-xl border border-slate-400/60 bg-white focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/30">
      {Icon && <Icon size={18} className="text-brand shrink-0" />}
      <input {...p} className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder:text-slate-400" />
      {right}
    </div>
  </label>
)

export const Sheet = ({ open, onClose, icon: Icon, title, children }) =>
  open && (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[390px] bg-white rounded-t-[28px] px-4 pb-8 text-center">
        {Icon && (
          <div className="-mt-12 mx-auto mb-5 size-[100px] rounded-3xl bg-brand grid place-items-center text-white border border-brand-dark shadow-[0_24px_30px_-12px_rgba(124,92,255,.6)]">
            <Icon size={44} />
          </div>
        )}
        <h2 className="text-xl font-bold text-ink">{title}</h2>
        {children}
      </div>
    </div>
  )

export const Avatar = ({ size = 48, filled, round = true }) => (
  <div
    style={{ width: size, height: size }}
    className={`grid place-items-center shrink-0 text-2xl ${round ? 'rounded-full' : 'rounded-2xl'} ${filled ? 'bg-indigo-200' : 'bg-violet-100'}`}
  >
    {filled ? '🧑‍💻' : '🙂'}
  </div>
)

export const Verified = () => <BadgeCheck size={20} className="text-brand fill-brand/20" />