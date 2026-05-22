import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../core/components/Logo'
import Navbar from '../../core/layout/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import BackgroundEffect from '../../core/components/BackgroundEffect'
import { AUTH_BASE_PATH } from '../../routes'
import { useAuth } from '../../context/AuthContext'

export default function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    signIn()
    navigate(AUTH_BASE_PATH, { replace: true })
  }

  return (
    <div className='relative min-h-screen bg-background'>
      <Navbar />
      <BackgroundEffect />

      <div className='relative z-10 flex flex-col items-center px-4 pb-16 pt-8 sm:pt-10'>
        <div className='w-full max-w-md'>
          <div className='mb-8 flex flex-col items-center text-center'>
            <Logo sizePreset='hero' />
            <h1 className='mt-6 text-balance text-2xl font-bold text-foreground'>Welcome back</h1>
            <p className='mt-2 text-sm text-muted'>Sign in with your workspace credentials.</p>
            <p className='mt-1 text-xs text-subtle'>
              Kitchen sink — leave fields blank or use anything; sign-in is a stub.
            </p>
          </div>

          <div className='relative'>
            <div className='animate-glow absolute inset-0 rounded-2xl opacity-75'></div>

            <div className='relative z-10 rounded-2xl border border-border-glass bg-surface/95 p-8 shadow-xl shadow-agilite-red/5 backdrop-blur'>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <div className='relative'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-placeholder'
                    />
                    <input
                      id='email'
                      type='email'
                      autoComplete='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='you@company.com'
                      className='block w-full rounded-lg border border-border-input bg-surface py-3 pl-10 pr-4 text-foreground shadow-sm outline-none placeholder:text-placeholder focus:border-transparent focus:ring-2 focus:ring-agilite-red'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='password' className='sr-only'>
                    Password
                  </label>
                  <div className='relative'>
                    <FontAwesomeIcon
                      icon={faLock}
                      className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-placeholder'
                    />
                    <input
                      id='password'
                      type='password'
                      autoComplete='current-password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                      className='block w-full rounded-lg border border-border-input bg-surface py-3 pl-10 pr-4 text-foreground shadow-sm outline-none placeholder:text-placeholder focus:border-transparent focus:ring-2 focus:ring-agilite-red'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full rounded-lg bg-agilite-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:ring-2 focus-visible:ring-agilite-red focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset'
                >
                  Sign in
                </button>
              </form>

              <p className='mt-6 text-center text-sm text-subtle'>
                Need help? Contact your administrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
