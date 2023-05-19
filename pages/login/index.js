import React, { useContext } from 'react'
import { LockClosedIcon,ArrowLeftCircleIcon } from '@heroicons/react/20/solid'
import { useFormik } from 'formik'
import validationSchema from '../validations/loginValidations'
import Link from 'next/link'
import Image from 'next/image'
import {useAuth } from '../contexts/authContext'

export default function Login() {
  const { login }=useAuth();

  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, dirty } = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values,{resetForm,setSubmitting})=>{
      //console.log(values);
      login(values);
      resetForm();
      setSubmitting(false);
    },
    validationSchema,
  })
  
  return (
  <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <Link href="/">
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
          Giriş Yap
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="E-mail"
            />
            {errors.email && touched.email && (<div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 mt-1 rounded relative" role="alert">
            {errors.email}</div>)}
          </div>
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
        </div>

        <div className="flex items-center justify-between">
          <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              Şifrenizi mi unuttunuz?
            </Link>
          </span>
          <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Henüz bir hesabın yok mu? {' '}
            <Link href ="/register" className="text-blue-600 hover:underline dark:text-blue-500">Kaydol</Link>
          </span>{' '}
        </div>

        <div>
          <button
            type="submit"
            disabled={!dirty || isSubmitting}
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
      <img src="https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1"/>
    </div>
  </div>
  )
}
