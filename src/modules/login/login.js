import React, { useState } from 'react'
import Logo from '../../core/components/Logo'
import Navbar from '../../core/layout/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import BackgroundEffect from '../../core/components/BackgroundEffect'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='relative min-h-screen bg-white dark:bg-gray-950'>
      <Navbar />
      <BackgroundEffect />

      <div className='relative z-10 flex flex-col items-center px-4 pb-16 pt-8 sm:pt-10'>
        <div className='w-full max-w-md'>
          <div className='mb-8 flex flex-col items-center text-center'>
            <Logo sizePreset='hero' />
            <h1 className='mt-6 text-balance text-2xl font-bold text-gray-800 dark:text-white'>Welcome back</h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>Sign in with your workspace credentials.</p>
          </div>

          <div className='relative'>
            <div className='absolute inset-0 animate-glow rounded-2xl opacity-75'></div>

            <div className='relative z-10 rounded-2xl border border-white/30 bg-white/95 p-8 shadow-xl shadow-agilite-red/5 backdrop-blur dark:border-gray-800/70 dark:bg-gray-900/90'>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <div className='relative'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500'
                    />
                    <input
                      id='email'
                      type='email'
                      autoComplete='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='you@company.com'
                      required
                      className='block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-agilite-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500'
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
                      className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500'
                    />
                    <input
                      id='password'
                      type='password'
                      autoComplete='current-password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                      required
                      className='block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-agilite-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500'
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full rounded-lg bg-agilite-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:ring-2 focus-visible:ring-agilite-red focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950'
                >
                  Sign in
                </button>
              </form>

              <p className='mt-6 text-center text-sm text-gray-500 dark:text-gray-400'>Need help? Contact your administrator.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
