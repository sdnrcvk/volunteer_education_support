import React from 'react'
import { LockClosedIcon, ArrowLeftCircleIcon } from '@heroicons/react/20/solid'

export default function Register() {

  return (
  <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <a href="/login">
      <ArrowLeftCircleIcon className="h-10 text-indigo-500 group-hover:text-indigo-400 absolute bottom-0 right-0" aria-hidden="true" />
    </a>

    <div className="w-full max-w-md space-y-8 mr-5">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="logo.png"
          alt="Site Logosu"
        />
        <br></br>
        <hr></hr>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Kayıt Ol
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm space-y-2">

          {/* Ad */}
          <div>
            <label for="first-name" className="sr-only">Ad</label>
            <div className="mt-2">
              <input type="text" name="first-name" id="first-name" placeholder="Ad" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          {/* Soyad */}
          <div>
            <label for="last-name" className="sr-only">Soyad</label>
            <div className="mt-2">
              <input type="text" name="last-name" id="last-name" placeholder="Soyad" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          {/* Doğum Tarihi */}
          <div>
            <label for="birthdate" className="sr-only">Doğum Tarihi</label>
            <div className="mt-2">
              <input type="date" name="birthdate" id="birthdate" placeholder="Doğum Tarihi" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          {/* Telefon */}
          <div>
            <label for="phone" className="sr-only">Telefon</label>
            <div className="mt-2">
              <input type="tel" name="phone" id="phone" placeholder="(0___) ___ __ __" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" maxLength={11}/>
            </div>
          </div>

          {/* Cinsiyet */}
          <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
            Cinsiyet :
            <div className="flex items-center gap-x-3">
              <input
                id="female"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-everything" className="block text-sm leading-6 text-gray-900">
                Kadın
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="male"
                name="gender"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-email" className="block text-sm leading-6 text-gray-900">
                Erkek
              </label>
            </div>
          </div>
            
          {/* il-İlçe */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label for="city" className="sr-only">Şehir</label>
              <div>
                <select id="city" name="city"
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option>İl Seçiniz</option>
                  <option>Tokat</option>
                  <option>Karabük</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label for="district" className="sr-only">İlçe</label>
              <div>
                <select id="district" name="district"
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option>İlçe Seçiniz</option>
                  <option>Merkez</option>
                </select>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email-address" className="sr-only">
              E-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="E-mail"
            />
          </div>

          {/* Şifre */}
          <div>
            <label htmlFor="password" className="sr-only">
              Şifre
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Şifre"
            />
          </div>

          {/* Şifre Doğrulama */}
          <div>
            <label htmlFor="confirm_password" className="sr-only">
              Şifre Onay
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"        
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Şifreyi Yeniden Giriniz "
            />
          </div>
        </div>

        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="false" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Şartlar ve koşulları</a> kabul ediyorum.</label>
      </div>
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
              Kayıt Ol
          </button>
        </div>
      </form>
    </div>
    <div>
      <img src="https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=1"/>
    </div>
  </div>
  )
}
