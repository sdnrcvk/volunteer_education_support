import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function Login() {

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8 mr-5">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="logo.png"
          alt="Your Company"
        />
        <br></br>
        <hr></hr>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Giriş
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm space-y-2">
          <div>
            <label htmlFor="email-address" className="sr-only">
              E-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="E-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Şifre
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Şifre"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Şifrenizi mi unuttunuz?
            </a>
          </div>
          <div className="text-sm">
            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Henüz bir hesabın yok mu? Kaydol
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
              Giriş Yap
          </button>
        </div>
      </form>
    </div>
    <div>
      <img src="https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1" alt=""/>
    </div>
  </div>
  )
}
