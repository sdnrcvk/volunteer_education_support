import React from 'react'
import { LockClosedIcon, ArrowLeftCircleIcon } from '@heroicons/react/20/solid'
import { useFormik } from 'formik'
import validationSchema from '../validations/registerValidations'
import Link from 'next/link'
import Image from 'next/image'

export default function Register() {

  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, setSubmitting, resetForm, dirty } = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      birthdate:'',
      phone:'',
      gender:'',
      city:'',
      district:'',
      email:'',
      password:'',
      passwordConfirm:'',
      accept:true,
    },
    onSubmit:values=>{
      console.log(values);
    },
    validationSchema,
  })

  return (
  <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <Link href="/login">
      <ArrowLeftCircleIcon className="h-10 text-indigo-500 group-hover:text-indigo-400 absolute bottom-0 right-0" aria-hidden="true" />
    </Link>

    <div className="w-full max-w-md space-y-8 mr-5">
      <div>
        <Image
          className="mx-auto h-12 w-auto"
          src="/logo.png"
          alt="Site Logosu"
          width={1000} height={237}
        />
        <br></br>
        <hr></hr>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Kayıt Ol
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm space-y-2">

          {/* Ad */}
          <div>
            <label htmlFor="firstName" className="sr-only">Ad</label>
            <div className="mt-2">
              <input type="text" name="firstName" id="firstName" placeholder="Ad" value={values.firstName} onChange={handleChange} onBlur={handleBlur} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              {errors.firstName && touched.firstName && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.firstName}</div>)}
            </div>
          </div>

          {/* Soyad */}
          <div>
            <label htmlFor="lastName" className="sr-only">Soyad</label>
            <div className="mt-2">
              <input type="text" name="lastName" id="lastName" placeholder="Soyad" value={values.lastName} onChange={handleChange} onBlur={handleBlur} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              {errors.lastName && touched.lastName && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.lastName}</div>)}
            </div>
          </div>

          {/* Doğum Tarihi */}
          <div>
            <label htmlFor="birthdate" className="sr-only">Doğum Tarihi</label>
            <div className="mt-2">
              <input type="date" name="birthdate" id="birthdate" placeholder="Doğum Tarihi" value={values.birthdate} onChange={handleChange} onBlur={handleBlur} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            {errors.birthdate && touched.birthdate && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.birthdate}</div>)}
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="phone" className="sr-only">Telefon</label>
            <div className="mt-2">
              <input type="tel" name="phone" id="phone" placeholder="(0___) ___ __ __" value={values.phone} onChange={handleChange} onBlur={handleBlur} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" maxLength={11}/>
              {errors.phone && touched.phone && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.phone}</div>)}
            </div>
          </div>

          {/* Cinsiyet */}
          <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
            Cinsiyet :
            <div className="flex items-center gap-x-3">
              <input
                id="female"
                name="gender"
                value="female"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleChange} checked={values.gender==="female"}
              />
              <label htmlFor="push-everything" className="block text-sm leading-6 text-gray-900">
                Kadın
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="male"
                name="gender"
                value="male"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleChange} checked={values.gender==="male"}
              />
              <label htmlFor="push-email" className="block text-sm leading-6 text-gray-900">
                Erkek
              </label>
            </div>
          </div>
          {errors.gender && touched.gender && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.gender}</div>)}
            
          {/* il-İlçe */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="city" className="sr-only">Şehir</label>
              <div>
                <select id="city" name="city" value={values.city} onBlur={handleBlur} onChange={handleChange}
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option>İl Seçiniz</option>
                  <option>Tokat</option>
                  <option>Karabük</option>
                </select>
                {errors.city && touched.city && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.city}</div>)}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="district" className="sr-only">İlçe</label>
              <div>
                <select id="district" name="district" value={values.city} onBlur={handleBlur} onChange={handleChange}
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option>İlçe Seçiniz</option>
                  <option>Merkez</option>
                </select>
                {errors.district && touched.district && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.district}</div>)}
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="E-mail"
            />
            {errors.email && touched.email && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.email}</div>)}
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
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Şifre"
            />
            {errors.password && touched.password && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">{errors.password}</div>)}
          </div>

          {/* Şifre Doğrulama */}
          <div>
            <label htmlFor="confirm_password" className="sr-only">
              Şifre Onay
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"  
              value={values.passwordConfirm}              
              onChange={handleChange}
              onBlur={handleBlur}      
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Şifreyi Yeniden Giriniz "
            />
            {errors.passwordConfirm && touched.passwordConfirm && (<p className="text-danger text-start">{errors.passwordConfirm}</p>)}
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
          <input id="accept" name='accept' type="checkbox" value={values.accept} onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
          </div>
          <label htmlFor="accept" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">Şartlar ve koşulları</Link> kabul ediyorum.</label>
      </div>
        <div>
          <button
            type="submit"
            disabled={!values.accept || isSubmitting}
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
