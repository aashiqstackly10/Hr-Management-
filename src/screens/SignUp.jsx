import { useState } from 'react'
import { Mail, Fingerprint, Eye, EyeOff, ChevronDown, MailCheck, Check } from 'lucide-react'
import { Phone, Btn, Field, Sheet } from '../ui'

export default function SignUp({ go }) {
  const [f, setF] = useState({ email: '', phone: '', company: '', pw: '', pw2: '' })
  const [show, setShow] = useState(false)
  const [agree, setAgree] = useState(false)
  const [sheet, setSheet] = useState(null)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const eye = (
    <button type="button" onClick={() => setShow(!show)} className="text-brand">
      {show ? <Eye size={20} /> : <EyeOff size={20} />}
    </button>
  )
  const otp = (e) => e.target.value && e.target.nextElementSibling?.focus()

  return (
    <Phone>
      <div className="px-8 pt-14 pb-8">
        <div className="mx-auto size-[60px] rounded-2xl bg-brand grid place-items-center text-white text-2xl font-bold border border-brand-dark">W</div>
        <h1 className="mt-3 text-center text-xl font-bold text-ink">Work Mate</h1>
        <p className="text-center text-xs text-slate-600">Register Using Your Credentials</p>

        <form className="mt-6 space-y-3.5" onSubmit={(e) => { e.preventDefault(); agree ? setSheet('verify') : setSheet('terms') }}>
          <Field label="Email" icon={Mail} type="email" placeholder="Enter Your Email" value={f.email} onChange={set('email')} />
          <div>
            <span className="text-xs text-slate-600">Phone Number</span>
            <div className="mt-1.5 flex items-center gap-2 h-[46px] px-3 rounded-xl border border-slate-400/60 bg-white focus-within:border-brand">
              <span className="text-sm">INA</span><ChevronDown size={18} className="text-brand" />
              <input placeholder="+62 0000 0000 0000" value={f.phone} onChange={set('phone')} className="flex-1 min-w-0 outline-none text-sm placeholder:text-slate-400" />
            </div>
          </div>
          <Field label="Company ID" icon={Mail} placeholder="Enter Company ID" value={f.company} onChange={set('company')} />
          <Field label="Password" icon={Fingerprint} type={show ? 'text' : 'password'} placeholder="My Password" value={f.pw} onChange={set('pw')} right={eye} />
          <Field label="Confirm Password" icon={Fingerprint} type={show ? 'text' : 'password'} placeholder="Confirm My Password" value={f.pw2} onChange={set('pw2')} right={eye} />

          <div className="flex items-center gap-2 text-xs">
            <button type="button" onClick={() => setAgree(!agree)}
              className={`size-5 rounded border border-brand grid place-items-center ${agree ? 'bg-brand text-white' : 'bg-white'}`}>
              {agree && <Check size={14} />}
            </button>
            <span>I agree with <b onClick={() => setSheet('terms')} className="text-brand cursor-pointer">terms & conditions</b> and <b onClick={() => setSheet('terms')} className="text-brand cursor-pointer">privacy policy</b></span>
          </div>
          <div className="pt-3"><Btn type="submit">Sign Up</Btn></div>
        </form>
        <p className="mt-14 text-center text-xs">Already have an account? <span className="text-brand">Sign in here</span></p>
      </div>

      <Sheet open={sheet === 'verify'} onClose={() => setSheet(null)} icon={MailCheck} title="Email Verification Sent!">
        <p className="mt-3 text-sm text-slate-700">A verification code will be sent to the email {f.email || 'Hello@work.com'} for your account verification process.</p>
        <div className="mt-5 flex justify-between">
          {[...Array(6)].map((_, i) => (
            <input key={i} maxLength={1} inputMode="numeric" placeholder="0" onChange={otp}
              className="size-[48px] rounded-lg border border-slate-200 text-center text-2xl text-ink outline-none focus:border-brand placeholder:text-slate-300" />
          ))}
        </div>
        <p className="mt-4 mb-5 text-left text-xs">Haven't received the verification code? <span className="text-brand font-medium">Resend it.</span></p>
        <Btn onClick={() => go('home', { welcome: true })}>Submit</Btn>
      </Sheet>

      <Sheet open={sheet === 'terms'} onClose={() => setSheet(null)} title="Terms & Conditions and Privacy Policy">
        <div className="mt-4 h-[430px] overflow-y-auto rounded bg-slate-50 p-3 text-left text-xs leading-5 text-slate-700 space-y-3">
          <p><b>Terms and Conditions:</b><br />Acceptance: By using the app, you agree to comply with all applicable terms and conditions.</p>
          <p>Usage: This app is for personal use only and may not be used for commercial purposes without permission.</p>
          <p>Account: You are responsible for the security of your account and all activities that occur within it.</p>
          <p>Content: You must not upload content that violates copyright, privacy, or applicable laws.</p>
          <p>Changes: We reserve the right to change the terms at any time and will notify you through the app or via email.</p>
          <p><b>Privacy Policy:</b><br />Data Collection: We collect personal data such as name, email, and location to improve our services.</p>
          <p>Security: We protect your data with appropriate security measures to prevent unauthorized access.</p>
        </div>
        <div className="mt-4 space-y-3">
          <Btn onClick={() => { setAgree(true); setSheet(null) }}>I Agree</Btn>
          <Btn variant="outline" onClick={() => { setAgree(false); setSheet(null) }}>Decline</Btn>
        </div>
      </Sheet>
    </Phone>
  )
}